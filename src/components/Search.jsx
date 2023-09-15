import { useEffect, useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import Layout from "./Layout";
import { useDispatch } from "react-redux";
import SearchCity from "./SearchCity";

const Search = () => {
  const [loadingElements, setLoadingElements] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lonAndLat, setLonAndLat] = useState(null);

  const dispatch = useDispatch();

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const URL = "https://api.openweathermap.org/geo/1.0/direct?q=";
  const accessKey = "&APPID=cf19f67355a5052a780ada98827f9cfb";

  const fetchingLocation = async () => {
    try {
      const response = await fetch(URL + searchQuery + accessKey, {
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log(response);
        const data = await response.json();

        setLonAndLat(...lonAndLat, data.lat);
        setLonAndLat(...lonAndLat, data.lon);

        console.log("ei", data);
        console.log(setLonAndLat);
      } else {
        alert("fetch error");
      }
    } catch (err) {}
  };

  useEffect(() => {
    fetchingLocation();
  }, [lonAndLat]);
  console.log(loadingElements);
  console.log(lonAndLat);
  console.log(searchQuery);
  return (
    <div>
      <Container fluid="xl">
        <InputGroup className="mb-3  m-auto mt-5">
          <Form
            className="m-auto w-50"
            onSubmit={(e) => {
              e.preventDefault();
              setLoadingElements(true);
              fetchingLocation();
              // dispatch({
              //     type:"ADD_LAD_LON",
              //     payload: lonAndLat
              // })
            }}
          >
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Cerca la tua città"
              value={searchQuery}
              onChange={handleQueryChange}
            />
          </Form>
        </InputGroup>
      </Container>
      <h1>{lonAndLat}</h1>
      {loadingElements ? (
        <SearchCity lat={lonAndLat.lat} lon={lonAndLat.lon} />
      ) : (
        <h1 className="display-1 my-5">Cerca la tua città</h1>
      )}
    </div>
  );
};

export default Search;
