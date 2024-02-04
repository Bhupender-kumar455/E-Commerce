import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFemale, FaHome, FaMale, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Appbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = (value) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((item) => {
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value)
          );
        });
        setResult(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrollPosition > 720 ? "white" : "transparent",
    transition: "background-color 0.3s ease",
  };

  return (
    <Navbar expand="lg" className="fixed-top" style={navbarStyle}>
      <Container>
        <Navbar.Brand>
          <h4 id="brand">ѕαℓαмєη∂єя</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="navbar_collapse">
          <Form className="d-flex searchbar_parent">
            <Form.Control
              type="search"
              value={input}
              placeholder="Search"
              className="me-2 searchbar"
              aria-label="Search"
              onChange={(e) => handleChange(e.target.value)}
            />
            <div className="box">
              {result.map((item, key) => {
                return (
                  <div className="searchBox" key={key}>
                    <img src={item.image} alt="logo" />
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0 navIconParent align-items-center"
            style={{ maxHeight: "180px" }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/"
              className="navLinks"
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              <span>
                <FaHome style={{ fontSize: "20px", marginRight: "5px" }} />
              </span>
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/cart"
              className="navLinks"
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              <span>
                <FaShoppingCart
                  style={{ fontSize: "20px", marginRight: "5px" }}
                />
              </span>
              Cart
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/men"
              className="navLinks"
              style={{
                display: "flex",
                fontSize: "14px",
                alignItems: "center",
                fontWeight: "700",
              }}
            >
              <span style={{ fontSize: "20px", marginRight: "5px" }}>
                <FaMale />
              </span>
              Men
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/women"
              className="navLinks"
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              <span style={{ fontSize: "20px", marginRight: "5px" }}>
                <FaFemale />
              </span>
              Women
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
