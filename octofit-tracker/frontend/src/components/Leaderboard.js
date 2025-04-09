import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('https://studious-parakeet-jpwxjgjx46jf6-8000.app.github.dev/api/leaderboard')
      .then(response => response.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <h1 className="card-title">Leaderboard</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((leader, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{leader.name}</td>
                  <td>{leader.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary mt-3">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
