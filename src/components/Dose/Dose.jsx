import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import CalendarButton from "../CalendarButton/CalendarButton";
import ChildrenNav from "../ChildrenNav/ChildrenNav";
import NavBar from "../NavBar/NavBar";
import MedsFilter from "../MedsFilter/MedsFilter";
import "./Dose.css";
import Timeline from "../Timeline/Timeline";

const timelineData = [
  {
    date: new Date(),
    drugName: 'Apap',
    dosage: '1.2 unit',
    temperature: undefined,
    symptopms: [],
    checked: false
  },
  {
    id: 1,
    date: new Date(),
    drugName: 'Ibup',
    dosage: '1.3 unit',
    temperature: undefined,
    symptopms: [],
    checked: false
  },
  {
    id: 2,
    date: new Date(),
    drugName: 'Apap',
    dosage: '1.2 unit',
    temperature: undefined,
    symptopms: [],
    checked: false
  }, 
  {
    id: 3,
    date: new Date(),
    drugName: 'xccx',
    dosage: '1.4 unit',
    temperature: undefined,
    symptopms: [],
    checked: false
  },
  {
    id: 4,
    date: new Date(),
    drugName: 'Ibup',
    dosage: '1.3 unit',
    temperature: undefined,
    symptopms: [],
    checked: false
  },
  {
    id: 5,
    date: new Date(),
    drugName: 'xccx',
    dosage: '1.4 unit',
    temperature: undefined,
    symptopms: [],
    checked: false
  },
];

function Dose({ children, activeChild, setActiveChild }) {
  const [calendar, setCalendar] = useState(
    [...Array(7)].map(
      (item, index) =>
        new Date(new Date().setDate(new Date().getDate() + index))
    )
  );

  const [currentActiveDate, setCurrentActiveDate] = useState(new Date());
  let location = useLocation();
  //const [meds, setMeds] = useState([location.state.medication]);
  const [meds, setMeds] = useState(["Apap", "Ibup", "xccx"]);
  const [activeMeds, setActiveMeds] = useState(meds);

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
        <MedsFilter
          meds={meds}
          setActiveMeds={setActiveMeds}
          activeMeds={activeMeds}
        />
        <Timeline timelineData={timelineData} activeMeds={activeMeds}/>
      </div>
    </>
  );
}

export default Dose;
