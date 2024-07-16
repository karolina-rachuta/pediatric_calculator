import "./CalendarButton.css";

function CalendarButton({ active, date, setCurrentActiveDate }) {
  let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    date.getDay()
  ];
  return (
    <div
      className={active ? "calendar-button-day active" : "calendar-button-day"}
      onClick={() => setCurrentActiveDate(date)}
    >
      <div>{date.getDate()}</div>
      <div>{weekday}</div>
    </div>
  );
}

export default CalendarButton;
