import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../assets/context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import exit from "../assets/imagens/exit.png";
import NewTransactions from "./newTransactions";

export default function Home() {

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);
    const token = { headers: { Authorization: `Bearer ${user.token}` } };
    const [transactions, setTransactions] = useState([]);


    useEffect(() => {
        async function userData() {
            try {
                const response = await axios.get('http://localhost:5000/transactions', token);
                setTransactions(response.data);
            } catch (error) {
                console.log(error.response);
            };
        };
        userData();
    }, [user.token, navigate]);

    function pegaSaldo() {

        if (transactions.length > 0) {
            return transactions.reduce((previous, current) => {
                if (current.type === 'deposit') {
                    return Number(previous + current.price);
                }

                return Number(previous - current.price);
            }, 0);
        } else {
            return 0;
        }
    };
    const saldo = pegaSaldo();

    return (
        <>
            <Screen1>
                <Logo>
                    <h1>Olá, {user.nome} </h1>
                    <img alt="" src={exit} onClick={() => { setUser(null); navigate("/"); }}></img>
                </Logo>
                <>
                    {transactions.length === 0 ?
                        (<Register1>
                            <h1>Não há registros de entrada ou saída</h1>
                        </Register1>) :
                        (<Register2>
                            <div className="transactions">
                                {transactions.map((m) => <NewTransactions date={m.date} description={m.description} type={m.type} price={m.price} />)}
                            </div>
                            <div className="saldo">
                                <h4>Saldo</h4>
                                <h5>{saldo}</h5>
                            </div>
                        </Register2>)}
                </>
                <Button>
                    <Link1 to={"/deposit"}>
                        <Button1>
                            <ion-icon name="add-circle-outline" color="light"></ion-icon>
                            <h1>Nova entrada</h1>
                        </Button1>
                    </Link1>
                    <Link2 to={"/withdraw"}>
                        <Button2>
                            <ion-icon name="add-circle-outline" color="light"></ion-icon>
                            <h1>Nova saída</h1>
                        </Button2>
                    </Link2>
                </Button>
            </Screen1>
        </>
    )
};

const Screen1 = styled.div`

    background: #8C11BE;
    height: 667px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const Register1 = styled.div`

    width: 326px;
    height: 446px;
    background: white;
    border-radius: 5px;
    margin-bottom: 13px;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: 'Raleway', sans-serif;
        color: #868686;        
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: center;

        height: 46px;
        width: 180px;   
    }
`

const Register2 = styled.div`

    width: 326px;
    height: 446px;
    background: white;
    border-radius: 5px;
    margin-bottom: 13px;

    display: flex;
    flex-direction: column;
    padding-top: 18px;
    padding-left: 12px;
    box-sizing: border-box;
     

    .transactions{
        width: 326px;
        height: 416px;              
        display: flex;
        flex-direction: column;
        overflow-x: auto;  
        
           
    };   

    .saldo {
        width: 306px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        };

        h5 {
            font-family: 'Raleway', sans-serif;
            color: #03AC00;        
            font-weight: 400;
            font-size: 16px;
            line-height: 19px; 
        };
    }

`

const Button = styled.div`
    width: 375px;
    height: 114px;
    padding-left: 23px;
    padding-right: 23px;
    margin-bottom: 23px;
    display: flex;
    justify-content: space-evenly;
    
`

const Button1 = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    padding-left: 10px;
    padding-top: 8px;
    box-sizing: border-box;

    ion-icon {
        width: 22px;
        height: 22px;
    }

    h1 {
        width: 64px;
        height: 40px;
        margin-top: 30px;

        font-family: 'Raleway', sans-serif;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: white; 
    }

`

const Button2 = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    padding-left: 10px;
    padding-top: 8px;
    box-sizing: border-box;

    ion-icon {
        width: 22px;
        height: 22px;
    }

    h1 {
        width: 64px;
        height: 40px;
        margin-top: 30px;

        font-family: 'Raleway', sans-serif;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: white;
    }
`
const Link1 = styled(Link)`
    text-decoration: none ;
`

const Link2 = styled(Link)`
    text-decoration: none ;
`