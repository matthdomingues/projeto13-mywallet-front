import styled from "styled-components";

export default function NewTransactions({ date, type, description, price }) {
    return (
        <Spent>
            <h1>{date}</h1>
            <h2>{description}</h2>
            <Number color={type === "deposit" ? "#03AC00" : "#C70000"}>{price}</Number>
        </Spent>
    );
};

const Spent = styled.div` 

    display: flex;        
    align-items: left;

        h1 {
        font-family: 'Raleway', sans-serif;
        color: #C6C6C6;        
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-right: 5px;
        box-sizing: border-box;
        };

        h2 {
        width: 190px;
        font-family: 'Raleway', sans-serif;
        color: #000000;        
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        overflow-y: auto;            
        margin-right: 10px;
        box-sizing: border-box;
        };       
`

const Number = styled.div`
font-family: 'Raleway', sans-serif;
        color: ${props => props.color};
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;  `