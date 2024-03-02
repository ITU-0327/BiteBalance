import MainFrame from "../components/MainFrame";
import RecipeAndChartFrame from "../components/RecipeAndChartFrame";
import SettingsFrame from "../components/SettingsFrame";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page1">
      <MainFrame />
      <RecipeAndChartFrame />
      <SettingsFrame />
    </div>
  );
};

export default HomePage;
