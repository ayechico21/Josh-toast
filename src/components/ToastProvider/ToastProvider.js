import React from "react";

import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
    /**Create new toast */
    const newToast = {
      id: crypto.randomUUID(),
      message: message,
      variant: variant,
    };
    setToasts((cur) => [...cur, newToast]); /*add new toast */
  }

  function removeToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  function handleEscapeKey() {
    if (window.event.key === "Escape") setToasts([]);
  }

  useEscapeKey(handleEscapeKey);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        handleEscapeKey,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
