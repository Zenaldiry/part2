import axios from "axios";
const baseUrl = "http://localhost:3001/persons";
const getNames = () => {
  return axios.get(baseUrl).then((res) => {
    return res.data;
  });
};

const addNew = (newName, newNum, persons) => {
  return axios
    .post(baseUrl, {
      name: newName,
      number: newNum,
      id: `${persons.length + 1}`,
    })
    .then((res) => res.data);
};

const deleteName = (event) => {
  return axios.delete(`${baseUrl}/${event.target.id}`).then((res) => {
    return res.data;
  });
};

const updateName = (id, newNum, newName) => {
  return axios
    .put(`${baseUrl}/${id}`, { name: newName, number: newNum })
    .then((response) => {
      return response.data;
    });
};

export default { getNames, addNew, deleteName, updateName };
