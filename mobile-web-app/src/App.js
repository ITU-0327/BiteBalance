import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CameraScan1 from './pages/CameraScan1';
import HomePage from "./pages/HomePage";
import FrontPage from "./pages/FrontPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ShoppingList from "./pages/ShoppingList";
import Chatbot from "./pages/Chatbot";
import Recipie from "./pages/Recipie";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/scan-your-pantry":
        title = "";
        metaDescription = "";
        break;
      case "/settings-page":
        title = "";
        metaDescription = "";
        break;
      case "/shopping-list":
        title = "";
        metaDescription = "";
        break;
      case "/chatbot":
        title = "";
        metaDescription = "";
        break;
      case "/recipe":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/scan-your-pantry" element={<CameraScan1 />} />
      <Route path="/settings-page" element={<SettingsPage />} />
      <Route path="/shopping-list" element={<ShoppingList />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/recipe" element={<Recipie />} />
    </Routes>
  );
}
export default App;
