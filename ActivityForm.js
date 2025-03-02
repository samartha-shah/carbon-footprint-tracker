import React, { useState } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';

function ActivityForm() {
  const [activities, setActivities] = useState([{ type: 'Driving', emission: 0 }]);
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await auth.currentUser.getIdToken();
      const response = await axios.post('/api/activities', { activities }, {
        headers: { Authorization: token }
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error saving activities:', error);
    }
  };

  const addActivity = () => {
    setActivities([...activities, { type: '', emission: 0 }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {activities.map((activity, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Activity Type"
            value={activity.type}
            onChange={(e) =>
              setActivities(activities.map((a, i) => i === index ? { ...a, type: e.target.value } : a))
            }
            required
          />
          <input
            type="number"
            placeholder="Emission"
            value={activity.emission}
            onChange={(e) =>
              setActivities(activities.map((a, i) => i === index ? { ...a, emission: +e.target.value } : a))
            }
            required
          />
        </div>
      ))}
      <button type="button" onClick={addActivity}>Add Activity</button>
      <button type="submit">Save Activities</button>
    </form>
  );
}

export default ActivityForm;
