import { Link } from "react-router-dom";
import avatar from "../../images/girl.png";
import addIcon from "../../images/plus.svg";
import "./ChildrenNav.css";
import { useState } from "react";

const children = [
  {
    id: 1,
    name: "Anna",
  },

  {
    id: 2,
    name: "Zosia",
  },
  {
    id: 3,
    name: "Grazyna",
  },
];
function ChildrenNav() {
  const [activeChild, setActiveChild] = useState(1);

  return (
    <>
      <div className="child-wrapper">
        {children.map(({ id, name }) => (
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
        <Link to="/addChild">
          <img src={addIcon} className="add-icon" />
        </Link>
      </div>
      <div>
        <Link to="/addChild" className="btn">
          Edit
        </Link>
        <Link to="/" className="btn">
          History of Dosing
        </Link>
      </div>
    </>
  );
}

export default ChildrenNav;
