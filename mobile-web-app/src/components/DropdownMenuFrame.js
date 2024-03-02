import DropdownMenu from "./DropdownMenu";
import "./DropdownMenuFrame.css";

const DropdownMenuFrame = () => {
  return (
    <section className="dropdown-menu-frame">
      <a className="dietary-requirements" target="_blank" href="/home-page">
        <b className="diet">Diet</b>
      </a>
      <DropdownMenu />
      <div className="allergies-my-preferences">
        <b className="allergies">{`Allergies: `}</b>
      </div>
      <div className="allergies-my-preferences1">
        <b className="my-preferences">My Preferences:</b>
      </div>
    </section>
  );
};

export default DropdownMenuFrame;
