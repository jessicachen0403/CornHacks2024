import React from 'react';

const Leaderboard = ({ users }) => {
  // Assuming users is an array of objects with properties like id, name, points, etc.
  
  // Sort users based on points in descending order
  const sortedUsers = users.sort((a, b) => b.points - a.points);

  return (
    <div className="leaderboard">
      <h2>Study Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;