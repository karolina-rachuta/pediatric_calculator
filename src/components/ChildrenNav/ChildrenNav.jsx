import { Link } from "react-router-dom";
import avatar from "../../images/girl.png";
import addIcon from "../../images/plus.svg";
import "./ChildrenNav.css";


function ChildrenNav({children, activeChild, setActiveChild, showUI}) {

  return (
    <>
      <div className="child-wrapper">
        {children && children.map(({ id, name }) => (
          <div
            className="child-avatar-container"
            key={id}
            onClick={() => setActiveChild(id)}
          >
            <img
              className={
                activeChild === id
                  ? "child-avatar child-active"
                  : "child-avatar"
              }
              src={avatar}
              alt="Child"
            />
            <p>{name}</p>
          </div>
        ))}
       { showUI && <Link to="/addChild">
          <img src={addIcon} className="add-icon" />
        </Link>}
      </div>
     { showUI && <div>
        <Link to="/addChild" className="btn">
          Edit
        </Link>
        <Link to="/" className="btn">
          History of Dosing
        </Link>
      </div>}
    </>
  );
}

export default ChildrenNav;
