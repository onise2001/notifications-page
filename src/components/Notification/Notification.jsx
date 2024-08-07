import "./notification.css";

export default function Notification({ notification, read }) {
    
  return (
    <div
      className="notification"
      style={{ backgroundColor: !notification.isRead ? "#f7fafd" : "" }}
      onClick={() => {
        read(notification.id);
      }}
    >
      <img src={notification.profilePic} alt="" className="profile-picture" />
      <div className="notification-body">
        <div className="notification-text">
          <span className="user">{notification.user}</span>
          <span className="action">{notification.action}</span>
          {notification.post ? (
            <span className="post">{notification.post}</span>
          ) : null}
          {notification.group ? (
            <span className="group">{notification.group}</span>
          ) : null}
          {!notification.isRead ? <div className="dot"></div> : null}
        </div>
        <span className="time">{notification.timeFrom} ago</span>
        {notification.message ? (
          <div className="message-wrapper">
            <p className="message">{notification.message}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
