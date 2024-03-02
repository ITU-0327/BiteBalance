import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import DropdownMenuFrame from "../components/DropdownMenuFrame";
import "./SettingsPage.css";

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <a className="image-11" target="_blank" href="/home-page" />
      <main className="frame-container">
        <FrameComponent6 />
        <div className="allergies-preferences-frame">
          <FrameComponent5 />
        </div>
        <DropdownMenuFrame />
      </main>
    </div>
  );
};

export default SettingsPage;
