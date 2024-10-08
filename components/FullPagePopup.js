// components/FullPagePopup.js
import { motion } from 'framer-motion';

const FullPagePopup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="full-page-popup" onClick={onClose}>
      <motion.div
        className="popup-content"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Congratulations! You've reached a new level!</h2>
        <div className="xp-bar">
          <motion.div
            className="xp-bar-fill"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2 }}
          />
        </div>
        <motion.div
          className="new-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          🏆 New Badge Unlocked!
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FullPagePopup;
