import { Row, Col } from "react-bootstrap";
import characters from "../constants/characters";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  function Char(item) {
    const index = parseInt(item.item, 10);
    return (
      <div className="char" onClick={() => navigate("/fight/" + item.item)}>
        <img src={`/src/img/${characters[index].img}`} alt="character-img" />
        <h5>{characters[index].charName}</h5>
        <p>
          HP: {characters[index].hp}
          <br />
          STR: {characters[index].str}
          <br />
          DEF: {characters[index].def}
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <h3>Can you beat the code monster?</h3>
      <p>Pick a character to find out.</p>

      <Row>
        {Object.keys(characters).map((i) => (
          <Col key={i} xs="3" className="charBox">
            <Char item={i} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
