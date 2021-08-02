import React from "react";

// import Pagrindinis from "./pages/Pagrindinis";
// import Projektai from "./pages/Projektai";
import Galerija from "./pages/Galerija";

import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      {/* <Pagrindinis /> */}
      {/* <Projektai /> */}
      <Galerija />
      <Footer />
    </>
  );
}

export default App;
