const Notification = ({ message, status }) => {
  const successStyle = {
    color: "black",
    fontSize: 25,
    fontStyle: "italic",
    background: "lightgreen",
    padding: 5,
    margin: 10,
    borderStyle: "solid",
    borderRadius: 5,
  };

  const failStyle = {
    color: "black",
    fontSize: 20,
    fontStyle: "italic",
    background: "lightcoral",
    padding: 5,
    margin: 10,
    borderStyle: "solid",
    borderRadius: 5,
  };

  if (message === null) return null;
  else if (status === true) return <div style={successStyle}>{message}</div>;
  else if (status === false) return <div style={failStyle}>{message}</div>;
};

export default Notification;
