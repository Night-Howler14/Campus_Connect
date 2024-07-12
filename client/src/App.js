import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedPage from "./components/ProtectedPage";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import Market from "./pages/Market";
import Profile from "./pages/Profile";
import Alumini from "./pages/Alumini";
import Study from "./pages/Study";
import Feedback from "./pages/Feedback";
import About from "./pages/AboutUs";
import Admin from "./pages/Admin";
import ProductInfo from "./pages/ProductInfo";
import Emergency from "./pages/Emergency";
import Lost from "./pages/Lost";
import ThingInfo from "./pages/ThingInfo";
function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      {loading && <Spinner />}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedPage>
                <Home />
              </ProtectedPage>
            }
          />

          <Route
            path="/market"
            element={
              <ProtectedPage>
                <Market />
              </ProtectedPage>
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProtectedPage>
                <ProductInfo />
              </ProtectedPage>
            }
          />
          <Route
            path="/lost"
            element={
              <ProtectedPage>
                <Lost />
              </ProtectedPage>
            }
          />
          <Route
            path="/thing/:id"
            element={
              <ProtectedPage>
                <ThingInfo />
              </ProtectedPage>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedPage>
                <Profile />
              </ProtectedPage>
            }
          />
          <Route
            path="/alumini"
            element={
              <ProtectedPage>
                <Alumini />
              </ProtectedPage>
            }
          />
          <Route
            path="/Study"
            element={
              <ProtectedPage>
                <Study />
              </ProtectedPage>
            }
          />
          <Route
            path="/feedback"
            element={
              <ProtectedPage>
                <Feedback />
              </ProtectedPage>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedPage>
                <About />
              </ProtectedPage>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedPage>
                <Admin />
              </ProtectedPage>
            }
          />
          <Route
            path="/emergency"
            element={
              <ProtectedPage>
                <Emergency />
              </ProtectedPage>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
