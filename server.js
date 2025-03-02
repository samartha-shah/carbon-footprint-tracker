const express = require('express');
const { db, auth } = require('./firebaseConfig');
const app = express();
const port = 3000;

app.use(express.json());

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decodedToken = await auth.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
};

app.get('/', (req, res) => {
  res.send('Welcome to the Carbon Footprint Tracker API');
});

app.post('/api/activities', authenticateUser, async (req, res) => {
  const { activities } = req.body;
  const userId = req.user.uid;
  await db.collection('users').doc(userId).set({ activities }, { merge: true });
  res.json({ message: 'Data saved successfully' });
});

app.get('/api/carbon-footprint', authenticateUser, async (req, res) => {
  const userId = req.user.uid;
  const doc = await db.collection('users').doc(userId).get();
  const userActivities = doc.data().activities || [];
  const carbonFootprint = calculateCarbonFootprint(userActivities);
  res.json({ carbonFootprint });
});

const calculateCarbonFootprint = (activities) => {
  let totalEmissions = 0;
  activities.forEach(activity => {
    totalEmissions += activity.emission;
  });
  return totalEmissions;
};

app.get('/api/suggestions', authenticateUser, async (req, res) => {
  const suggestions = [
    'Reduce energy consumption by switching to LED lights.',
    'Use public transportation or carpool to reduce travel emissions.',
    'Adopt a plant-based diet to lower food-related emissions.',
  ];
  res.json({ suggestions });
});

app.listen(port, () => {
  console.log(`Carbon Footprint Tracker API running on http://localhost:${port}`);
});
