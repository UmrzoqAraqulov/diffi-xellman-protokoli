import { useState } from "react";

const randomNumber = () => {
  return Math.ceil(Math.random() * 100);
};

const App = () => {
  const [inputValues, setInputValues] = useState({
    pValue: null,
    zValue: null,
    aValue: null,
  });
  const [resultValue, setResultValue] = useState({
    xValue: null,
    kValue: null,
  });

  const { xValue, kValue } = resultValue;
  const { pValue, zValue, aValue } = inputValues;

  const submit = (e) => {
    e.preventDefault();
    let x = randomNumber();
    let y = randomNumber();
    y = y === x ? randomNumber() : y;
    let A = aValue ** y % pValue;
    let k = A ** x % pValue;
    setResultValue({ xValue: x, kValue: k });
    console.log(k);
    console.log(x);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div className="protokol">
      <div className="inputInformations">
        <form>
          <h2>Ikki tomon kelishib olgan ma'lumotlar</h2>
          <div className="element">
            <label htmlFor="p">p = </label>
            <input
              id="p"
              type="number"
              placeholder="1957"
              onChange={handleChange}
              name="pValue"
              value={pValue}
              required={true}
            />
          </div>
          <div className="element" style={{ textAlign: "center" }}>
            Z<sup>*</sup>
            <sub>p</sub> value
            {"{1:" + (pValue > 1 ? pValue : " p") + "}"}
          </div>
          <div className="element">
            <label htmlFor="z">
              Z<sup>*</sup>
              <sub>p</sub> =
            </label>
            <input
              id="z"
              disabled={pValue > 1 ? false : true}
              type="number"
              placeholder="131"
              value={zValue}
              onChange={handleChange}
              name="Value"
              required
            />
          </div>
          <div className="element">
            <label htmlFor="a">α = </label>
            <input
              id="a"
              type="number"
              value={aValue}
              placeholder="131"
              onChange={handleChange}
              name="aValue"
              required
            />
          </div>
        </form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={submit}>hisoblash</button>
        </div>
      </div>
      <div className="result">
        <h2>Natija</h2>
        <div>
          <h3 style={{ paddingBottom: "10px" }}>x = {xValue}</h3>
          <h3>k = {kValue}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
