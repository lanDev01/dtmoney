import React, { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';
import income from '../../assets/Entradas.svg'
import outcome from '../../assets/Saídas.svg'
import total from '../../assets/Total.svg'

import { Container } from "./styles";

export function Summary() {
    const transactions = useContext(TransactionsContext);
    console.log(transactions)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}