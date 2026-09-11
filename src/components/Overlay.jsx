import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Overlay = ({ isOpen, title, onClose, children, className = '' }) => {
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`overlay ${className}`}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="overlay__header">
            <span className="overlay__title">{title}</span>
            <button className="overlay__close" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
          <motion.div
            className="overlay__body"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
