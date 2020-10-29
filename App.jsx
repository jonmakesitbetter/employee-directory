import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Container from "./components/Container";

function App() {
  return (
    <div>
<Navbar />
      <Container style={{ marginTop: 20 }}>
<Cards />
      </Container>
    </div>
  );
}

export default App;
