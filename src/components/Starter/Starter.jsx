import "./starter.css";

export default function Starter({ newNotifications, setNewNotifications }) {
  const count = newNotifications.filter(
    (notification) => notification.isRead !== true
  ).length;
  const readAll = () => {
    const updatedNotifications = newNotifications.map((notification) => {
      return { ...notification, isRead: true };
    });

    setNewNotifications(updatedNotifications);
  };

  return (
    <div className="notification-header">
      <div className="notification-wrapper">
        <h2>Notifications</h2>
        <span className="notification-number">{count}</span>
      </div>
      <span className="read-all" onClick={readAll}>
        Mark all as read
      </span>
    </div>
  );
}
