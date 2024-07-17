import "./Timeline.css";

function Timeline({ timelineData, activeMeds }) {
  return (
    <div className="timeline-box">
      <div className="timeline-header">
        <span>Date/Time</span>
        <span>Medication Name</span>
        <span>Dosage</span>
        <span>Temperature</span>
        <span>Symptoms</span>
        <span></span>
      </div>

      {timelineData
        .filter(({ drugName }) => activeMeds.includes(drugName))
        .map(
          ({ id, date, drugName, dosage, temperature, symptopms, checked }) => (
            <div className="timeline-line" key={id}>
              <span>
                {date.getHours().toLocaleString()}:
                {date.getMinutes().toLocaleString()}
              </span>
              <span>{drugName}</span>
              <span>{dosage}</span>
              <span>{temperature}</span>
              <span>{symptopms}</span>
              <span>{checked}</span>
            </div>
          )
        )}
    </div>
  );
}

export default Timeline;

// // {
//     date: new Date(),
//     drugName: 'Ibup',
//     dosage: '1.3 unit',
//     temperature: undefined,
//     symptopms: [],
//     checked: false
//   },
