import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, removeToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant, icon }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            message={message}
            variant={variant}
            icon={icon}
            removeToast={removeToast}
            id={id}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
