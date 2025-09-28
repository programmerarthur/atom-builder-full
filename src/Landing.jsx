
import React from 'react';

export default function Landing({ onStart }) {
  return (
    <div className="landing">
      <h1 className="title">Atom Builder</h1>
      <h2 className="subtitle">School of Arthuron</h2>
      <button className="start-btn" onClick={onStart}>Start Exploring</button>
    </div>
  );
}
