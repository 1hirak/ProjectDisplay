import React, { useEffect } from 'react';

function CleanupOnUnmount() {
  useEffect(() => {
    // TODO: Add your setup logic here (e.g., subscribe to a service, start a timer, etc.)

    return () => {
      // TODO: Add your cleanup logic here (e.g., unsubscribe, clear timers, etc.)
    };
  }, []); // Runs once on mount, cleanup runs on unmount

  return (
    <div>
      <h1>This component cleans up on unmount.</h1>
    </div>
  );
}

export default CleanupOnUnmount;
