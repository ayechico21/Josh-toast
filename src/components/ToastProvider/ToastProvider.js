import React from "react";
import { AlertOctagon, AlertTriangle, CheckCircle, Info } from "react-feather";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

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

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState(INITIAL_MESSAGE);
  const [variant, setVariant] = React.useState(INITIAL_VARIANT);
  const [toasts, setToasts] = React.useState([]);
  const icon = ICONS_BY_VARIANT[variant];

  const addToast = (event) => {
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

  const handleEscapeKey = () => {
    if (window.event.key === "Escape") setToasts([]);
  };

  useEscapeKey(handleEscapeKey);

  return (
    <ToastContext.Provider
      value={{
        message,
        setMessage,
        variant,
        setVariant,
        VARIANT_OPTIONS,
        toasts,
        addToast,
        removeToast,
        setToasts,
        handleEscapeKey,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
