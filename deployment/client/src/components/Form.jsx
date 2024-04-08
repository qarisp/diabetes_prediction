import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Result from "./Result";

const Form = () => {
  const [parameter, setParameter] = useState({
    high_bp: "",
    high_chol: "",
    chol_check: "",
    smoker: "",
    stroke: "",
    hearth_disease: "",
    phys_activity: "",
    fruits: "",
    veggies: "",
    heavy_alch: "",
    any_healthcare: "",
    gen_health: "",
    ment_health: "",
    phys_health: "",
    diff_walking: "",
    age: "",
    bmi: "",
  });

  const {
    high_bp,
    high_chol,
    chol_check,
    smoker,
    stroke,
    heart_disease,
    phys_activity,
    fruits,
    veggies,
    heavy_alch,
    any_healthcare,
    gen_health,
    ment_health,
    phys_health,
    diff_walking,
    age,
    bmi,
  } = parameter;

  const onInputChange = (e) => {
    setParameter({ ...parameter, [e.target.name]: e.target.value });
  };

  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://127.0.0.1:8080/predict", parameter);
    setResult(response.data)
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2>Input Data</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="high_bp" className="form-label">
                High Blood Pressure
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="high_bp"
                value={high_bp}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>Do you have high blood pressure?</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="high_chol" className="form-label">
                High Cholesterol
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="high_chol"
                value={high_chol}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>Do you have high cholesterol?</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="chol_check" className="form-label">
                Cholesterol Check
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="chol_check"
                value={chol_check}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>
                  Have you checked your cholesterol level in the last 5 years?
                </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="smoker" className="form-label">
                Smoker
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="smoker"
                value={smoker}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>Are you a smoker?</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="stroke" className="form-label">
                Stroke
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="stroke"
                value={stroke}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>Have you ever had stroke before?</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="heart_disease" className="form-label">
                Heart Disease
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="heart_disease"
                value={heart_disease}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>
                  Do you have Coronary Heart Disease (CHD) or Myocardial
                  Infarction (MI)?
                </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="phys_activity" className="form-label">
                Physical Activity
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="phys_activity"
                value={phys_activity}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>
                  Are you physically active in the last 30 days?
                </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="fruits" className="form-label">
                Fruits
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="fruits"
                value={fruits}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>
                  Do you consume fruits regurarly (1 or more per day)?
                </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="veggies" className="form-label">
                Vegetables
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="veggies"
                value={veggies}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>
                  Do you regurarly consume vegetables (1 or more per day)?
                </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="heavy_alch" className="form-label">
                Heavy Alcohol Consumption
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="heavy_alch"
                value={heavy_alch}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>
                  Are you a heavy drinker (more than 14 for male and 7 for
                  female per week)?
                </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="any_healthcare" className="form-label">
                Health Care
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="any_healthcare"
                value={any_healthcare}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>Do you have any health care coverage?</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="gen_health" className="form-label">
                General Health
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="gen_health"
                value={gen_health}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>
                  How good is your health according to you?
                </option>
                <option value="5">1</option>
                <option value="4">2</option>
                <option value="3">3</option>
                <option value="2">4</option>
                <option value="1">5</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="ment_health" className="form-label">
                Mental Health
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Number of days your mental health was not good in the last 30 days"
                name="ment_health"
                value={ment_health}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phys_health" className="form-label">
                Physical Health
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Number of days your physical health was not good in the last 30 days"
                name="phys_health"
                value={phys_health}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="diff_walking" className="form-label">
                Difficulty Walking
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="diff_walking"
                value={diff_walking}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>
                  Do you have serious difficulty in walking?
                </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Your age"
                name="age"
                value={age}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bmi" className="form-label">
                BMI
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Your BMI"
                name="bmi"
                value={bmi}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <Result result={result} />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
