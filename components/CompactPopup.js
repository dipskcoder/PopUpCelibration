// components/CompactPopup.js
import { motion } from 'framer-motion';

const CompactPopup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="compact-popup" onClick={onClose}>
      <motion.div
        className="popup-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>You've earned rewards!</h3>
        <motion.div
          className="reward-animation"
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.5, yoyo: Infinity }}
        >
          🎁 50 Coins Unlocked!
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CompactPopup;
