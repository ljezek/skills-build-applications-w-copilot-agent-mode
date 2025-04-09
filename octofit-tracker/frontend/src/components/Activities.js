import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://studious-parakeet-jpwxjgjx46jf6-8000.app.github.dev/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <h1 className="card-title">Activities</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity.id}>
                  <td>{activity.id}</td>
                  <td>{activity.name}</td>
                  <td>{activity.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary mt-3">Add Activity</button>
        </div>
      </div>
    </div>
  );
};

export default Activities;
