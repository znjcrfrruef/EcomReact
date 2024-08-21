import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import { Home } from "./Componenet/Home";
import { Store } from "./Componenet/Store";
import { About } from "./Componenet/About";
import { NavBar } from "./Componenet/NavBar";
import { ShoppingCartProvider } from "./Componenet/ShoppingCartContext";
import { SignUp } from "./Componenet/SignUp";
import { SignIn } from "./Componenet/SignIn";
import { ForgotPass } from "./Componenet/ForgotPass";
import { UpdateProfile } from "./Componenet/UpdateProfile";

function App() {
  return ( 
    <ShoppingCartProvider>
      <NavBar />
      <Container className="mb-4  "> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/ForgotPass" element={<ForgotPass />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
