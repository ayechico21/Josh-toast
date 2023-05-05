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
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton} onClick={() => removeToast(id)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
