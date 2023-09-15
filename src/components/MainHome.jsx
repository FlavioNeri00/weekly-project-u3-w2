import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <div className="m-5 pb-5">
      <h1 className="display-2">Benvenuto su Il mio Meteo</h1>
      <h2 className="display-5">Scopri il meteo della tua città</h2>
      <Link to="/search">
        {" "}
        <Button variant="info" className="w-25 fs-2 mt-3 rounded-0 shadow-lg">
          Cerca la tua città!
        </Button>
      </Link>
    </div>
  );
};
export default MainHome;
