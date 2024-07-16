import { useEffect, useState } from "react";
import "./SearchMeds.css";
import { Link } from "react-router-dom";

const medications = [
  {
    id: 1,
    api: "ibuprophen",
    drugs: [
      {
        id: 1,
        name: "Ibufen",
        dose: 1.3,
        unit: "unit",
      },
      {
        id: 2,
        name: "Ibum",
        dose: 0.5,
        unit: "unit",
      },
    ],
  },
  {
    id: 2,
    api: "paracetamol",
    drugs: [
      {
        id: 1,
        name: "Apap",
        dose: 1.4,
        unit: "unit",
      },
      {
        id: 2,
        name: "Med2",
        dose: 1.8,
        unit: "unit",
      },
    ],
  },
  {
    id: 3,
    api: "cetamol",
    drugs: [
      {
        id: 1,
        name: "Apap2",
        dose: 1.2,
        unit: "unit",
      },
      {
        id: 2,
        name: "Med3",
        dose: 1.05,
        unit: "unit",
      },
    ],
  },
];

function SearchMeds() {
  const [ingredientsResult, setIngredientsResult] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [medication, setMedication] = useState("");
  const [dose, setDose] = useState("");

  useEffect(() => {
    if (ingredient.length >= 2) {
      setIngredientsResult(
        medications
          .filter((med) => med.api.includes(ingredient))
          .map((med) => med.api)
      );
    }
  }, [ingredient]);

  useEffect(() => {
    setDose(medications.flatMap(med => med.drugs).filter(brand => brand.name === medication).map(brand => `${brand.dose} ${brand.unit}`))
  }, [medication]);

  const handleIngredient = (e) => {
    setIngredient(e.target.value);
  };

  const handleSelectedMedication = (e) => {
    setMedication(e.target.value);
  }

  return (
    <div className="search-meds-box">
      <h2>Search for the medication:</h2>
      <div className="control-group">
        <label htmlFor="api">API</label>
        <input
          type="text"
          id="api"
          value={ingredient}
          onChange={handleIngredient}
        />
      </div>
      <ul className="autocomplete-sugesstions">
        {ingredientsResult.map((ingredientResult) => (
          <li
            key={ingredientResult}
            //css schowac autocomplite
            onClick={() => {
              setIngredient(ingredientResult);
            }}
          >
            {ingredientResult}
          </li>
        ))}
      </ul>
      <div className="control-group">
        <label htmlFor="medication">Medication</label>
          <select id="medication" onChange={handleSelectedMedication}>
            <option value=""></option>
            {medications
              .filter((med) => med.api.includes(ingredient))
              .flatMap((med) => med.drugs)
              .map((brand) => (
                <option key={brand.name} value={brand.name}>{brand.name}</option>
              ))}
          </select>
      </div>

      <h2>Recommended Dosage:</h2>
      <div>{dose}</div>
      <Link className="btn btn-icon" to="/">
        Start giving medication <span>+</span>
      </Link>
    </div>
  );
}

export default SearchMeds;
