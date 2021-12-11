import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
const [activities, setActivities] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/api/activities').then(response => {
  console.log(response);  
  setActivities(response.data);
  })
}, [] /*This array keeps the useEffect protery from continously running */);

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
        <List>
          {activities.map((activity: any) =>
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
