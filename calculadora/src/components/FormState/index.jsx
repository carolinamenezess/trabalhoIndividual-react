import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as styles from "./FormState.module.css";


export default function FormState() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [lista, setLista] = useState('');

  function cadastrar(e) {
    e.preventDefault();
    if (peso && altura) {
    const imc = peso / (altura * altura);
      setResultado(imc.toFixed(2)); 

      if (imc < 18.5) {
        setLista("Baixo peso :(");
      } else if (imc >= 18.5 && imc <= 24.9) {
        setLista("Eutrofia --- peso adequado :)");
      } else if (imc >= 25 && imc <= 29.9) {
        setLista("Sobrepeso :(");
      } else if (imc >= 30 && imc <= 34.9) {
        setLista("Obesidade grau 1 :(");
      } else if (imc >= 35 && imc <= 39.9) {
        setLista("Obesidade grau 2 :(");
      } else {
        setLista("Obesidade extrema :(");
      }
    }
  }

  return (
    <div className="container">
      <h1 style={styles.title}>Calcule seu IMC</h1>
      <form onSubmit={cadastrar} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Insira seu peso:</label>
          <input
            type="text"
            placeholder="exemplo:  60"
            name="peso"
            onChange={(e) => setPeso(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={ styles.inputGroup }>
          <label>Insira sua altura:</label>
          <input
            type="text"
            placeholder="exemplo:  1.80"
            name="altura"
            onChange={(e) => setAltura(e.target.value)}
            style={styles.input}
          />
        </div>
        <button className="btn btn-success" type="submit" style={styles.button}>
          Calcular
        </button>
      </form>
      <h2 style={styles.result}>
        Seu IMC é: {resultado} - {lista} 
      </h2>
    </div>
  );
}
  