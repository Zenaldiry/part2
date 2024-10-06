import server from "../services/phone";
const Persons = ({ arr, setPerson, setNotification, setKind }) => {
  const click = (event) => {
    const deleteName = window.confirm(
      "are you sure you want to delete the name"
    );
    if (deleteName) {
      server.deleteName(event).then((data) => {
        const filtered = arr.filter((e) => {
          return e.id !== data.id;
        });
        setPerson(filtered);
        setKind(false);
        setNotification(`${data.name} deleted successfully`);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
    } else {
      alert("delete name canceled");
    }
  };
  return arr.map((e, i) => {
    return (
      <div key={i}>
        <p key={i}>
          {e.name} {e.number}
          <button id={e.id} key={i} onClick={click}>
            delete
          </button>
        </p>
      </div>
    );
  });
};

export default Persons;
