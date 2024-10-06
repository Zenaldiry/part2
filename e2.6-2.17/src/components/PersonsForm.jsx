import { useState } from "react";
import server from "../services/phone";
const PersonForm = ({ persons, setPersons, setNotification, setKind }) => {
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  //..........................................................
  const setting = (persons, notification, kind) => {
    setPersons(persons);
    setNotification(notification);
    setKind(kind);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };
  //..........................................................

  const addName = (e) => {
    setNewName(e.target.value);
  };
  //..........................................................

  const addNum = (e) => {
    setNewNum(e.target.value);
  };
  //..........................................................

  const submitName = (e) => {
    e.preventDefault();
    if (newName.trim() === "" || newNum.trim() === "") {
      alert("name and number are required");
      return;
    }
    let id = 0;
    const existingPerson = persons.find((p) => {
      id = p.id;
      return p.name.toLowerCase() === newName.trim().toLowerCase();
    });

    if (existingPerson) {
      const replace = window.confirm(
        "the name is already added to phonebook do you want to replace it"
      );

      if (replace) {
        server
          .updateName(id, newNum, newName)
          .then((data) => {
            const copy = [...persons];
            copy.map((e) => {
              if (e.id === data.id) {
                e.number = data.number;
              }
            });
            setting(
              copy,
              `updated the number of ${data.name} to ${data.number}`,
              true
            );
            setNewName("");
            setNewNum("");
          })
          .catch((error) => {
            console.error(`Error adding ${newName}:`, error);
            setting(
              persons,
              `${newName} has already been removed from server`,
              false
            );
          });
      } else {
        return;
      }
      return;
    }
    server.addNew(newName, newNum, persons).then((data) => {
      setting(persons.concat(data), `added ${data.name}`, true);
      setNewName("");
      setNewNum("");
    });
  };

  return (
    <form>
      <div>
        name: <input onChange={addName} value={newName} />
      </div>
      <div>
        number: <input type="number" onChange={addNum} value={newNum} />
      </div>
      <div>
        <button type="submit" onClick={submitName}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
