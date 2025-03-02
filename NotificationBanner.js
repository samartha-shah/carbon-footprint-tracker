import React, { useState } from 'react';

function NotificationBanner({ message }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="notification-banner">
      {message}
      <button onClick={() => setIsVisible(false)} className="close-button">&times;</button>
    </div>
  );
}

export default NotificationBanner;
