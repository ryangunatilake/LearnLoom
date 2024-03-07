import React from 'react';
import '../Styles/Overview.css';

const Overview = () => {
  const data = [
    { title: 'Lectures Uploaded', count: 999, change: '12% increase from last month', color: '#A463F2' },
    { title: 'Notes Generated', count: 67, change: '10% decrease from last month', color: '#F2994A' },
    { title: 'Flashcards Generated', count: 115, change: '8% increase from last month', color:'#56CCF2' },
    { title: "Quiz's Generated", count: 69, change:'2% increase from last month', color:'#F2C94C'}
  ];

  return (
    <div className="stats-container">
      <h1>Overview</h1>
      <div className="stats-cards">
        {data.map((item, index) => (
          <div className="card" key={index} style={{ borderColor:item.color }}>
            <p>{item.title}</p>
            <h2>{item.count}</h2>
            <span style={{color:item.color}}>{item.change}</span>
          </div>
        ))}
      </div>
      <select className="time-period">
        <option>Last 30 days</option>
        <option>Last 15 days</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default Overview;
