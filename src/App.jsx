import { useState } from "react";
import { data } from "./data/data.js";

import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

import "./App.css";

function App() {
  // função calcular imc
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) return;

    const heightFloat = +height.replace(",", ".");
    const weightFloat = +weight.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult);

    getData(imcResult);
  };

  //função extrair dados do data.js
  const getData = (imc) => {
    data.forEach((item) => {
      if (imc >= item.min && imc <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
  };

  // resetar imc
  const resetImc = () => {
    setImc("");
  };
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable
          data={data}
          resetImc={resetImc}
          imc={imc}
          info={info}
          infoClass={infoClass}
        />
      )}
    </div>
  );
}

export default App;
