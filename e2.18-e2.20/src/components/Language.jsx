const Language = ({ language }) => {
  const lang = () => {
    if (!language) {
      return null;
    }
    return language[0].map((e, i) => {
      return <div key={i}>{e}</div>;
    });
  };
  return (
    <>
      <h2>language</h2>
      <div>{lang()}</div>
    </>
  );
};
export default Language;
