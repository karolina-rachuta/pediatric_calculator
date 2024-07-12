import "./SearchMeds.css";
import { Link } from "react-router-dom";

function SearchMeds() {
  return (
    <div>
      <h2>Search for the medication:</h2>
      <div className="control-group">
        <label htmlFor="api">API</label>
        <input type="text" id="api" />
      </div>
      <div className="control-group">
        <label htmlFor="medication">Medication</label>
        <input type="text" id="medication" />
      </div>
      
      <h2>Recommended Dosage:</h2>
      <div></div>
      <Link className="btn btn-icon" to="/">Start giving medication <span>+</span></Link>
    </div>
  );
}

export default SearchMeds;
