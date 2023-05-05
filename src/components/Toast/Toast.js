import React from "react";
import { X } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider";

function Toast({ message, variant, icon: Icon, id }) {
  const { removeToast } = React.useContext(ToastContext);
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>{Icon && <Icon size={24} />}</div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}</VisuallyHidden>
        {message}
      </p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => removeToast(id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
