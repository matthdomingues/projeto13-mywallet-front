import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SignUp() {

    // variaveis para formulario
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    const navigate = useNavigate();

    async function cadastrar(e) {
        e.preventDefault();

        let requisicaoUsuario = ({
            nome: `${nome}`,
            email: `${email}`,
            senha: `${senha}`,
            confirmaSenha: `${confirmaSenha}`,
        });
        console.log(requisicaoUsuario);

        try {
            await axios.post("http://localhost:5000/sign-up", requisicaoUsuario);
            alert('Cadastro feito com sucesso!');
            navigate("/");
        } catch (error) {
            alert('Falha no Cadastro! Tente novamente!');
            console.log(error);
        };

    };

    return (<>
        <Screen2>
            <Logo>
                <h1>My Wallet</h1>
            </Logo>
            <form onSubmit={cadastrar}>
                <input type="text" onChange={(e) => setNome(e.target.value)} placeholder="Nome" value={nome} required></input>
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" value={email} required></input>
                <input type="password" onChange={(e) => setSenha(e.target.value)} placeholder="Senha" value={senha} required></input>
                <input type="password" onChange={(e) => setConfirmaSenha(e.target.value)} placeholder="Confirme a senha" value={confirmaSenha} required></input>
                <button type="submit">Cadastrar</button>
            </form>
            <Link1 to={"/"}>
                <h2>Já tem uma conta? Entre agora!</h2>
            </Link1>
        </Screen2>
    </>)
}

const Link1 = styled(Link)`
    text-decoration: none ;
`

const Screen2 = styled.div`

    background-color: #8C11BE;
    height: 667px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;  

    form {
    display: flex;
    flex-direction: column;

    input {
    width: 303px;
    height: 45px;
    background-color: ${props => props.carregando === "true" ? "#F2F2F2" : "#FFFFFF"};
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
    font-size: 19.976px;
    line-height: 25px;
    color: black;
    }

    &:disabled{opacity: 0.7;}
}
    
    button {
    width: 303px;
    height: 45px;
    background: #A328D6;
    border-radius: 4.63636px;
    border: #A328D6;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    margin-bottom: 25px;
    box-sizing: border-box;
    cursor: pointer;

    &:disabled{
            opacity: 0.7;
        }

    }

    }

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
`

const Logo = styled.div`

    margin-top: 95px;
    margin-bottom: 10px;
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