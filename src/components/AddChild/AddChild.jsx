import { useEffect, useState } from "react";
import "./AddChild.css";
import boy from "../../images/boy.png";
import girl from "../../images/girl.png";
import NavBar from "../NavBar/NavBar";

function AddChild() {
  const [childName, setChildName] = useState("");
  const [childGender, setChildGender] = useState("");
  const [childBodyWeight, setChildBodyWeight] = useState("");
  const [childBodyHeight, setChildBodyHeight] = useState("");
  const [childBmi, setChildBmi] = useState("");

  useEffect(() => {
    if (childBodyHeight > 0 && childBodyWeight > 0) {
      setChildBmi(Math.round(childBodyWeight / (childBodyHeight / 100) ** 2));
    }
  }, [childBodyWeight, childBodyHeight]);

  const validateChildName = () => {};

  const handleGenderChange = (e) => {
    setChildGender(e.target.value);
  };

  const handleChildBodyHeight = (e) => {
    setChildBodyHeight(Math.abs(e.target.value));
  };

  const handleChildBodyWeight = (e) => {
    setChildBodyWeight(Math.abs(e.target.value));
  };

  return (
    <div>
      <NavBar />
      <div className="child-box">
        <form>
          <div className="child-avatar-box">
            <img
              className="child-avatar"
              src={childGender === "male" ? boy : girl}
              alt="Child"
            />
            <input
              type="text"
              placeholder="First Name"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
            />
          </div>

          <div className="child-parameters-box">
            <div className="child-layout">
              <label htmlFor="birthDay">Date of Birth</label>
              <input type="date" id="birthDay" />
            </div>

            <div className="child-layout">
              <label htmlFor="bodyWeight">Body weight</label>
              <input
                type="number"
                placeholder="kg"
                value={childBodyWeight}
                onChange={handleChildBodyWeight}
                min="0"
                id="bodyWeight"
              />
            </div>
            <div className=" child-layout">
              <label htmlFor="bodyHeight">Height</label>
              <input
                type="number"
                placeholder="cm"
                value={childBodyHeight}
                onChange={handleChildBodyHeight}
                min="0"
                id="bodyHeight"
              />
            </div>
            <div className="child-layout">
              <label htmlFor="gender">Gender</label>
              <div className="child-layout">
                <div>
                  <input
                    type="radio"
                    value="female"
                    name="childGender"
                    checked={childGender === "female"}
                    id="female"
                    onChange={handleGenderChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="male"
                    id="male"
                    name="childGender"
                    checked={childGender === "male"}
                    onChange={handleGenderChange}
                  />
                  <label htmlFor="male">Male</label>
                </div>
              </div>
            </div>

            <div className="child-layout">
              <label htmlFor="bmi">BMI</label>
              <input type="text" id="bmi" value={childBmi} disabled />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddChild;
