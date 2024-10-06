import { useEffect, useState } from "react";
import server from "../services/phone";
const Filter = ({ setPersons }) => {
  const [value, setValue] = useState("");
  //...................................................
  const handleInput = (e) => {
    const input = e.target.value.trim();
    setValue(input.toLowerCase());
  };
  //...................................................
  useEffect(() => {
    server.getNames().then((data) => {
      const filteredData = data.filter((e) => {
        return e.name.toLowerCase().includes(value);
      });
      setPersons(filteredData);
    });
  }, [setPersons, value]);
  //...................................................

  return (
    <div>
      filter shown as <input type="text" onChange={handleInput} />
    </div>
  );
};

export default Filter;
