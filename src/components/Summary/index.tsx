import { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';
import income from '../../assets/Entradas.svg'
import outcome from '../../assets/Saídas.svg'
import total from '../../assets/Total.svg'

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transactions) => {
        if (transactions.type === 'deposit') {
            acc.deposits += transactions.amount;
            acc.total += transactions.amount;
        } else {
            acc.withdraws += transactions.amount;
            acc.total -= transactions.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Saídas" />
                </header>
                <strong>- 
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}