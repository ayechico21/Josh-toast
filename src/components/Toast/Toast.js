import React from "react";
import { X } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

function Toast({ message, variant, icon: Icon, removeToast, id }) {
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>{Icon && <Icon size={24} />}</div>
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton} onClick={() => removeToast(id)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
