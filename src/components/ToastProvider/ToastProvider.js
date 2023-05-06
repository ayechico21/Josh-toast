import React from "react";

import useKeydown from "../../hooks/useKeydown";

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

  useKeydown("Escape", () => setToasts([]));

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
