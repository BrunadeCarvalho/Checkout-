import React, {useState} from "react";
import './Card.css'
import imagemChip from '../img/chip.png'

export default function Card(){
    const [inputName, setInputName]=useState("Nome do titular")
    const [inputNumber, setInputNumber]=useState("0000")
    const [inputNumberDois, setInputNumberDois]=useState("0000")
    const [inputNumberTres, setInputNumberTres]=useState("0000")
    const [inputNumberQuatro, setInputNumberQuatro]=useState("0000")
    const [inputCvv, setInputCvv]=useState("CVV")
    const [inputMes, setInputMes]=useState("Mês")
    const [inputAno, setInputAno]=useState("Ano")


    const handleInputName=(event)=>{
        setInputName(event.target.value);
    }
    const handleInputNumber=(event)=>{
        setInputNumber(event.target.value);
    }
    const handleInputNumberDois=(event)=>{
        setInputNumberDois(event.target.value);
    }
    const handleInputNumberTres=(event)=>{
        setInputNumberTres(event.target.value);
    }
    const handleInputNumberQuatro=(event)=>{
        setInputNumberQuatro(event.target.value);
    }
    const handleInputCvv=(event)=>{
        setInputCvv(event.target.value);
    }
    const handleInputMes=(event)=>{
        setInputMes(event.target.value);
    }
    const handleInputAno=(event)=>{
        setInputAno(event.target.value);
    }

    return(
        <div className="checkout">
            <div className="meuCartao">
                <div className="nomeBandeira">
                    <img className="imagemBandeira" src={imagemChip} alt="bandeira visa"/>
                    <span className="nomeCartao">{inputName}</span>
                </div>

                <div className="cartaoApresentacao">
                    <span className="textoCartao">{inputNumber}</span>
                    <span className="textoCartao">{inputNumberDois}</span>
                    <span className="textoCartao">{inputNumberTres}</span>
                    <span className="textoCartao">{inputNumberQuatro}</span>
                </div>

                <div className="validade-cvv">
                    <div className="labelValidade">
                        <label>VALIDADE</label>
                        <div className="validade">
                            <span>{inputMes}</span>
                            <span>/</span>
                            <span>{inputAno}</span>
                        </div>
                    </div>

                    <div className="labelCvv">
                        <label>CVV</label>
                        <span>{inputCvv}</span>
                    </div>
                </div>

            </div>
            <div className="dadosUsuario">
                <span>Insira os dados do seu cartão:</span>

                <div className="dados">

                    <input className="nomeTitular" name="Nome" onChange={handleInputName} placeholder={inputName}></input>

                    <div className="numeroCartao">
                        <input className="inputNumero" type ="text" maxLength={4} name="Número" onChange={handleInputNumber} placeholder={inputNumber}></input>
                        <input className="inputNumero" type ="text" maxLength={4} name="Número" onChange={handleInputNumberDois} placeholder={inputNumberDois}></input>
                        <input className="inputNumero" type ="text" maxLength={4} name="Número" onChange={handleInputNumberTres} placeholder={inputNumberTres}></input>
                        <input className="inputNumero" type ="text" maxLength={4} name="Número" onChange={handleInputNumberQuatro} placeholder={inputNumberQuatro}></input>
                    </div>
    
                    <div className="card-validade">
                        <select onChange={handleInputMes} id ="mês">
                            <option>Mês</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        <select onChange={handleInputAno} id="ano"> 
                            <option>Ano</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                        </select>
            
                        <input type="text" maxLength={3} className="cvv" name="CVV" onChange={handleInputCvv} placeholder={inputCvv}></input>
                        
                    </div>

                    <button>Efetuar pagamento</button>


                </div>

            </div>
        </div>
    )
}