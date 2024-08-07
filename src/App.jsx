import { useState } from "react";
import "./App.css";
import notifications from "./data.json";
import Notification from "./components/Notification/Notification";
import Starter from "./components/Starter/Starter";

function App() {
  const [newNotifications, setNewNotifications] = useState(notifications);

  const read = (id) => {
    const updatedNotifications = newNotifications.map((notification) => {
      if (notification.id == id) {
        return { ...notification, isRead: true };
      }
      return notification;
    });

    setNewNotifications(updatedNotifications);
  };

  return (
    <>
      <main>
        <section className="notification-section">
          <Starter
            newNotifications={newNotifications}
            setNewNotifications={setNewNotifications}
          />

          {newNotifications.map((notification) => {
            return (
              <Notification
                key={notification.id}
                read={read}
                notification={notification}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
