import Name from "./Name";
import Language from "./Language";
import Flag from "./Flag";
import Capital from "./Capital";
const Country = ({ country, choosen }) => {
  if (country.length === 1) {
    return (
      <>
        <Name name={choosen.name} />
        <Capital capital={choosen.capital} />
        <Language language={choosen.language} />
        <Flag flag={choosen.flag} />
      </>
    );
  }
};
export default Country;
