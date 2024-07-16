import ChildrenNav from "../ChildrenNav/ChildrenNav";
import NavBar from "../NavBar/NavBar";
import "./Dose.css";

function Dose({ children, activeChild, setActiveChild }) {
  return (
    <>
      <NavBar />
      <div className="dose-box">
        <ChildrenNav
          children={children.filter(child => child.id === activeChild)}
          activeChild={activeChild}
          setActiveChild={setActiveChild}
        />
      </div>
    </>
  );
}

export default Dose;
