import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant, icon }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast message={message} variant={variant} icon={icon} id={id} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
