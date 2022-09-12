import { useState, useContext } from "react";
import UserContext from "../assets/context/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Withdraw() {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    async function enviar(e) {
        e.preventDefault();

        const withdraw = {
            description,
            type: "withdraw",
            price: parseFloat(price)
        };

        const headers = {
            headers: { "Authorization": `Bearer ${user.token}` }
        };

        try {
            await axios.post("http://localhost:5000/transactions", withdraw, headers);
            alert("Retirada feita com êxito!");
            navigate("/home");
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <Screen1>
            <Logo>
                <h1>Nova saída</h1>
            </Logo>
            <form onSubmit={enviar}>
                <Input1 type="text" onChange={(e) => setPrice(e.target.value)} placeholder="Valor" value={price} required></Input1>
                <Input2 type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" value={description} required></Input2>
                <Button1 type="submit">Salvar saída</Button1>
            </form>
        </Screen1>
    );
};

const Screen1 = styled.div`

    background: #8C11BE;
    height: 667px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
    display: flex;
    flex-direction: column;           
    }
`

const Logo = styled.div`

    height: 78px;
    width: 375px;    
    padding-left: 23px;
    padding-right: 23px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 17px;     
    color: white;    
    }
`

const Input1 = styled.input`        
        width: 326px;
        height: 45px;
        background-color: "#FFFFFF";
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 13px;
        padding-left: 10px;
        box-sizing: border-box;
        cursor: pointer;

        ::placeholder {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23.48px;
        color: black;        
        }

        &:disabled{
            opacity: 0.7;
        }
`

const Input2 = styled.input`        
        width: 326px;
        height: 45px;
        background-color: "#F2F2F2";
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 13px;
        padding-left: 10px;
        box-sizing: border-box;
        cursor: pointer;

        ::placeholder {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23.48px;
        color: black;  
        }

        &:disabled{
            opacity: 0.7;
        }
`

const Button1 = styled.button`
        display: flex;
        width: 326px;
        height: 45px;
        background: #A328D6;
        border-radius: 4.63636px;
        border: #A328D6;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 25px;
        box-sizing: border-box;
        cursor: pointer;
        text-align: center;
        align-items: center;
        justify-content: center;

        &:disabled{
            opacity: 0.7;
        }
`