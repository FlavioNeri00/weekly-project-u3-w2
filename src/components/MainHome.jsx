import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <div className="pb-5 pt-4" style={{ backgroundColor: "#CBD18F", height: "100vh" }}>
      <h1 className="display-2">Benvenuto su Il mio Meteo</h1>
      <h2 className="display-5">Scopri il meteo della tua città</h2>
      <Link to="/search">
        {" "}
        <Button
          className="w-25 fs-2 mt-3 py-3 rounded-0 border border-1 border-black shadow-lg"
          style={{ backgroundColor: "#3A6B35", color: "black" }}
        >
          Cerca la tua città!
        </Button>
      </Link>
    </div>
  );
};
export default MainHome;
