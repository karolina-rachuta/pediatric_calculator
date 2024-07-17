import "./MedsFilter.css";

function MedsFilter({ meds, setActiveMeds, activeMeds }) {

  const handleMedFilter = (med) =>
    setActiveMeds((prevState) =>
      prevState.includes(med)
        ? prevState.filter((drug) => drug !== med)
        : [...prevState, med]
    );

  return (
    <div>
      {meds.map((med) => (
        <button className={activeMeds.includes(med) ? 'filter-drug-active' : ''} onClick={() => handleMedFilter(med)} key={med}>
          {med}
        </button>
      ))}
    </div>
  );
}

export default MedsFilter;
