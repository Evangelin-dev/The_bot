// components/CoolModal/index.jsx
"use client";
import styles from './styles.module.css';

const CoolModal = ({ show, onClose, children, actionButton }) => {
  if (!show) {
    return null;
  }

  return (
    // The main overlay. Clicking it closes the modal.
    <div className={styles.overlay} onClick={onClose}>
      {/* The modal itself. stopPropagation prevents clicks inside from closing it. */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Call Us Now</h2>
          <button onClick={onClose} className={styles.closeButton}>&times;</button>
        </div>
        <div className={styles.body}>
          {/* The content (your ul list) goes here */}
          <div className={styles.contentWrapper}>
            {children}
          </div>
          {/* The button goes here */}
          <div className={styles.actionButtonContainer}>
            {actionButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoolModal;