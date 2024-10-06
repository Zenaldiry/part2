const Total = ({ parts }) => {
  return (
    <p>
      <strong>Number of exercises </strong>
      {parts.reduce((pre, cur) => {
        return pre + cur.exercises;
      }, 0)}
    </p>
  );
};

export default Total;
