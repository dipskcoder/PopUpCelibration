// pages/index.js
import { useState } from 'react';
import FullPagePopup from '../components/FullPagePopup';
import CompactPopup from '../components/CompactPopup';

export default function Home() {
  const [showFullPopup, setShowFullPopup] = useState(false);
  const [showCompactPopup, setShowCompactPopup] = useState(false);

  return (
    <div>
      <button onClick={() => setShowFullPopup(true)}>Show Full-Page Pop-Up</button>
      <button onClick={() => setShowCompactPopup(true)}>Show Compact Pop-Up</button>

      <FullPagePopup isVisible={showFullPopup} onClose={() => setShowFullPopup(false)} />
      <CompactPopup isVisible={showCompactPopup} onClose={() => setShowCompactPopup(false)} />
    </div>
  );
}
