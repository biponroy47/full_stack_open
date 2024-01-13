const Notification = ({ message }) => {
  const notificationStyle = {
    color: "black",
    fontSize: 25,
    fontStyle: "italic",
    background: "lightgreen",
    padding: 5,
    margin: 10,
    borderStyle: "solid",
    borderRadius: 10,
  };

  if (message === null) return null;
  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
