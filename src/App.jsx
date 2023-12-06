import { useState } from "react";

const randomNumber = (maxValue) => {
  return Math.ceil(Math.random() * (maxValue - 1) + 1);
};

const tubSon = (number) => {
  for (let i = 2; i ** 2 <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const App = () => {
  const [inputValues, setInputValues] = useState({
    pValue: undefined,
    aValue: undefined,
  });
  const [resultValue, setResultValue] = useState({
    xValue: undefined,
    yValue: undefined,
    kValue: undefined,
    AValue: undefined,
    BValue: undefined,
  });

  const { xValue, yValue, kValue, AValue, BValue } = resultValue;
  const { pValue, aValue } = inputValues;
  const submit = (e) => {
    e.preventDefault();
    if (tubSon(pValue) && pValue > aValue) {
      let x = randomNumber(pValue);
      let y = randomNumber(pValue);
      let A = aValue ** y % pValue;
      let B = aValue ** x % pValue;
      let k = A ** x % pValue;
      setResultValue({ xValue: x, yValue: y, kValue: k, AValue: A, BValue: B });
    } else {
      alert("kiritgan ma'lumotlariz noto'g'ri boshqatdan o'rinib ko'ring!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div className="protokol">
      <h1>Diffi Xellman Protokoli</h1>
      <div className="inputInformations">
        <form onSubmit={submit}>
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
          <p>
            α ning qiymati {"{1:" + (pValue ? pValue : " p ni kiriting") + "}"} su
            oraliqda bo'lishi kerak
          </p>
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit">hisoblash</button>
          </div>
        </form>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div className="tomon">
          <h2 style={{ textAlign: "center" }}>Birinchi tomon</h2>
          <h3>A = {AValue}</h3>
          <h3>x = {xValue}</h3>
          <h3>k = {kValue}</h3>
        </div>
        <div className="tomon">
          <h2 style={{ textAlign: "center" }}>Ikkinchi tomon</h2>
          <h3>B = {BValue}</h3>
          <h3>y = {yValue}</h3>
          <h3>k = {kValue}</h3>
        </div>
      </div>
      <div className="result">
        <h2>Natija</h2>
        <div>
          <h3>k = {kValue}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
