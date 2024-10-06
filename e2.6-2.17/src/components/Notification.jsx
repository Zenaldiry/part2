const Notification = ({ name, kind }) => {
  const style = {
    color: "green",
    fontSize: 20,
    backgroundColor: "#ddd",
    padding: 10,
    border: "green 5px solid",
    marginBottom: 5,
  };

  const deleteStyle = {
    color: "red",
    fontSize: 20,
    backgroundColor: "#ddd",
    padding: 10,
    border: "red 5px solid",
    marginBottom: 5,
  };

  if (kind) {
    return <div style={style}> {name}</div>;
  } else {
    return <div style={deleteStyle}> {name}</div>;
  }
};

export default Notification;
