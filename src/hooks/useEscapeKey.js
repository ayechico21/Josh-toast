import React from "react";

export function useEscapeKey(handleEscapeKey) {
  React.useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [handleEscapeKey]);
}
