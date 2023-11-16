import { useState } from "react";

const App = () => {
  const [formObj, setFormObj] = useState({
    fname: "",
    lname: "",
    city: "",
    gender: "",
  });

  const changeHandler = (property, value) => {
    setFormObj((prevFormObj) => ({
      ...prevFormObj,
      [property]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formObj);
    setFormObj({
      fname: "",
      lname: "",
      city: "",
      gender: "",
    });
  };
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => changeHandler("fname", e.target.value)}
          value={formObj.fname}
          type="text"
          placeholder="Frist Name"
        />
        <input
          onChange={(e) => changeHandler("lname", e.target.value)}
          value={formObj.lname}
          type="text"
          placeholder="Last Name"
        />
        <select
          onChange={(e) => changeHandler("city", e.target.value)}
          value={formObj.city}
        >
          <option value="">Chose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        <br />
        <input
          onChange={() => changeHandler("gender", "Male")}
          checked={formObj.gender === "Male"}
          type="radio"
          name="gender"
        />
        Male
        <input
          onChange={() => changeHandler("gender", "Female")}
          checked={formObj.gender === "Female"}
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
