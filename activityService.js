import axios from 'axios';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

export const saveActivities = async (activities) => {
  const token = await auth.currentUser.getIdToken();
  return axios.post('/api/activities', { activities }, {
    headers: { Authorization: token }
  });
};

export const fetchCarbonFootprint = async () => {
  const token = await auth.currentUser.getIdToken();
  return axios.get('/api/carbon-footprint', {
    headers: { Authorization: token }
  });
};
