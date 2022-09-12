import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../assets/context/UserContext";
import styled from "styled-components";

export default function SignIn() {

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function logar(e) {
        e.preventDefault();

        let requestLogin = ({
            email: `${email}`,
            senha: `${senha}`
        });

        try {
            const response = await axios.post("http://localhost:5000/sign-in", requestLogin);
            setUser(response.data);
            navigate("/home");
        } catch (error) {
            alert('Falha no Login!');
            console.log(error.response);
        };
    };

    return (
        <>
            <Screen1>
                <Logo>
                    <h1>My Wallet</h1>
                </Logo>
                <form onSubmit={logar}>
                    <Input1 type="text" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" value={email} required></Input1>
                    <Input2 type="password" onChange={(e) => setSenha(e.target.value)} placeholder="Senha" value={senha} required></Input2>
                    <Button1 type="submit">Entrar</Button1>
                </form>
                <Link1 to={"/sign-up"}>
                    <h2>Primeira vez? Cadastre-se!</h2>
                </Link1>
            </Screen1>
        </>
    );
};

const Link1 = styled(Link)`
    text-decoration: none ;
`

const Screen1 = styled.div`
    
    background: #8C11BE;
    height: 667px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;    
    color: white;
    cursor: pointer;
    }

    form {
    display: flex;
    flex-direction: column;           
    }
`

const Logo = styled.div`
    margin-top: 159px;
    margin-bottom: 24px;
    box-sizing: border-box;   
   
    h1 {
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 86px;
    text-align: center;
    color: white;
    }
`

const Input1 = styled.input`        
        width: 303px;
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
        width: 303px;
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
        width: 303px;
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

