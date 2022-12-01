import { useContext, useState } from 'react'
import { TransactionContext } from '../context/transContext'

const Child = () => {

    let { transactions, addTransaction } = useContext(TransactionContext)
    console.log(transactions)

    const [newdesc, setdesc] = useState('')
    const [newAmount, setAmount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        addTransaction({
            amount: Number(newAmount),
            desc: newdesc

        })
    
    }

    const getIncome = () => {
        let income = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income = income + transactions[i].amount;
            }
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense += transactions[i].amount;
            }
        }
        return expense;
    }


    return (
        <><div className='container'>
            <h1 className='heading'>Expense Tracker</h1>
            <h2>${getIncome() + getExpense()}</h2>

            <div className="expense-container">
                <h3>INCOME <br />${getIncome()}</h3>
                <h3>EXPENSE <br /> ${getExpense()}</h3>
            </div>
            <h3>History</h3>
            <ul className='trnsaction-list'>
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind}><span>{transObj.desc}</span><span>{transObj.amount}</span></li>
                    )
                })}

            </ul>
            <hr />
            <h3>Add New Transaction</h3>
            <form className="trnsaction-from" onSubmit={handleSubmit}>
                <label htmlFor="">Enter a description
                    <input type="text" required onChange={(e) => { setdesc(e.target.value) }} />
                </label>
                <br />
                <label htmlFor="">Enter a Amount
                    <input type="number" required onChange={(e) => setAmount(e.target.value)} />
                </label>
                <br />
                <input type="submit" value="Add expense" />
            </form>
        </div>
        </>

    )
}

export default Child
