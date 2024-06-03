import Button from "./Button.jsx";
import "./ImcTable.css";

const ImcTable = ({ data, resetImc, imc, info, infoClass }) => {
  return (
    <div id="result-container">
      <p id="imc-number">
        Seu IMC: <span className={infoClass}>{imc}</span>
      </p>
      <p id="imc-info">
        Situação atual: <span className={infoClass}>{info}</span>
      </p>
      <h3>
        Confira as classificações: <span></span>
      </h3>
      <div id="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>
        {data.map((item) => (
          <div className="table-data" key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </div>
        ))}
      </div>
      <Button id="back-btn" text="Voltar" action={resetImc} />
    </div>
  );
};

export default ImcTable;
