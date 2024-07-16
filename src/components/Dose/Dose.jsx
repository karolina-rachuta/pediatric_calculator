import { useEffect, useState } from "react";
import CalendarButton from "../CalendarButton/CalendarButton";
import ChildrenNav from "../ChildrenNav/ChildrenNav";
import NavBar from "../NavBar/NavBar";
import "./Dose.css";

function Dose({ children, activeChild, setActiveChild }) {
  const [calendar, setCalendar] = useState(
    [...Array(7)].map(
      (item, index) =>
        new Date(new Date().setDate(new Date().getDate() + index))
    )
  );

  const [currentActiveDate, setCurrentActiveDate] = useState(new Date());

  useEffect(() => {}, [currentActiveDate]);

  return (
    <>
      <NavBar />
      <div className="dose-box">
        <ChildrenNav
          children={children.filter((child) => child.id === activeChild)}
          activeChild={activeChild}
          setActiveChild={setActiveChild}
        />
        <div className="calendar-mask">
          <div className="calendar-box">
            {calendar.map((date) => (
              <CalendarButton
                key={date.getDate()}
                active={currentActiveDate.getDate() === date.getDate()}
                date={date}
                setCurrentActiveDate={setCurrentActiveDate}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dose;
