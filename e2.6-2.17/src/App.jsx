import { useState, useEffect } from "react";
import Persons from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonsForm";
import server from "./services/phone";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState("");
  const [kind, setKind] = useState(true);
  useEffect(() => {
    server.getNames().then((data) => {
      setPersons(data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification name={notification} kind={kind} />
      <Filter setPersons={setPersons} />
      <h2>add a new</h2>
      <PersonForm
        setKind={setKind}
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
      />
      <h2>Numbers</h2>
      <Persons
        setKind={setKind}
        arr={persons}
        setPerson={setPersons}
        setNotification={setNotification}
      />
    </div>
  );
};

export default App;
