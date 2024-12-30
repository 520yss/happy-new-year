import React, { useState, useEffect } from "react";
const CountdownTimer = ({ countdown }) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    if (!countdown) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [countdown]);
  return (
    <div className="flex items-center justify-center h-screen">
      {countdown || showMessage ? (
        <div className="text-white text-3d">
          {countdown || "Happy New year~"}
        </div>
      ) : null}
    </div>
  );
};

export default CountdownTimer;
