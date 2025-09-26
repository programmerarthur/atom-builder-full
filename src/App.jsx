
import React, { useState } from 'react';
import Landing from './Landing';
import MainApp from './MainApp';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  return showLanding ? <Landing onStart={() => setShowLanding(false)} /> : <MainApp />;
}
