import React from "react";
import { AlertOctagon, AlertTriangle, CheckCircle, Info } from "react-feather";

import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

/*Initial states */
const INITIAL_MESSAGE = "";
const INITIAL_VARIANT = "notice";

function ToastPlayground() {
  const [message, setMessage] = React.useState(INITIAL_MESSAGE);
  const [variant, setVariant] = React.useState(INITIAL_VARIANT);
  const [toasts, setToasts] = React.useState([]);

  const icon = ICONS_BY_VARIANT[variant];

  const handleSubmit = (event) => {
    event.preventDefault();
    /**Create new toast */
    const newToast = {
      id: crypto.randomUUID(),
      message: message,
      variant: variant,
      icon: icon,
    };
    setToasts((cur) => [...cur, newToast]); /*add new toast */
    setMessage(INITIAL_MESSAGE);
    setVariant(INITIAL_VARIANT);
  };

  const removeToast = (toastId) => {
    const nextToasts = toasts.filter(({ id }) => id !== toastId);
    setToasts(nextToasts);
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} removeToast={removeToast} />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => {
                const id = `variant-${option}`;
                return (
                  <label htmlFor={id} key={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={variant === option}
                      onChange={() => setVariant(option)}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
