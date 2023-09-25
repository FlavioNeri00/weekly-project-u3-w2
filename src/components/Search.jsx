import { useEffect, useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import Layout from "./Layout";
import { useDispatch } from "react-redux";
import SearchCity from "./SearchCity";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [loadingElements, setLoadingElements] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lonAndLat, setLonAndLat] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const URL = "https://api.openweathermap.org/geo/1.0/direct?q=";
  const accessKey = "&appid=cf19f67355a5052a780ada98827f9cfb";

  const fetchingLocation = async () => {
    try {
      const response = await fetch(URL + searchQuery + accessKey);
      if (response.ok) {
        console.log(response);
        const arr = await response.json();
        console.log("nome", arr.name);
        navigate(`/city/${arr[0].name}/${arr[0].country}/${arr[0].lat}/${arr[0].lon}`);
      } else {
        alert("fetch error");
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (searchQuery !== "") {
      fetchingLocation();
    }
  }, []);

  console.log(loadingElements);
  console.log(lonAndLat);
  console.log(searchQuery);

  return (
    <div style={{ backgroundColor: "#CBD18F", height: "100vh", overflow: "hidden" }}>
      <Container fluid="xl">
        {loadingElements && lonAndLat ? <SearchCity /> : <h1 className="display-1 my-5 ">Cerca la tua città!</h1>}

        <InputGroup className="mb-3  m-auto mt-5">
          <Form
            className="m-auto w-50 shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              setLoadingElements(true);
              fetchingLocation();
            }}
          >
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Roma, Milano, Napoli, Torino..."
              value={searchQuery}
              onChange={handleQueryChange}
              size="lg"
            />
          </Form>
        </InputGroup>
      </Container>
    </div>
  );
};

export default Search;
