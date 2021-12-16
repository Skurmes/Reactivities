import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';

function App() {
const [activities, setActivities] = useState<Activity[]>([]);

useEffect(() => {
  axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => { 
    setActivities(response.data);
  })
}, [] /*This array keeps the useEffect protery from continously running */);

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
        
        <List>
          {activities.map(activity =>
            (
            <List.Item key={activity.id}>
              {activity.title} {/* This will display the activity titles. */}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
