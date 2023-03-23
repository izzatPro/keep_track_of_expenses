import React, {useState} from 'react';
import './CostForm.css';

const CostForm = () => {

    const [inputName,setInputName] = useState('');
    const [inputAmount,setInputAmount] = useState('');
    const [inputDate,setInputDate] = useState('')

    const nameChangeHandler = (e) =>{
        setInputName(e.target.value);
        console.log(inputName);
    }

    const amountChangeHandler = (e) =>{
        setInputAmount(e.target.value);
    }

    const dateChangeHandler = (e) =>{
        setInputDate(e.target.value);

    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const submitInfo = {
            name:inputName,
            amount:inputAmount,
            date: new Date(inputDate)
        }
        setInputAmount('');
        setInputDate('');
        setInputName('');
    } 

  return (
    <form onSubmit={submitHandler}>
    <div className='new-cost__controls'>
        <div className="new-cost__control">
            <label htmlFor="">Название</label>
            <input type="text" onChange={nameChangeHandler} value={inputName} />
        </div>
        <div className="new-cost__control">
            <label htmlFor="" min="0.01" step="0.01">Cумма</label>
            <input type="text" onChange={amountChangeHandler} value={inputAmount}/>
        </div>
        <div className="new-cost__control">
            <label htmlFor="">Дата</label>
            <input type="date" min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} value={inputDate}/>
        </div>
        <div className="new-cost__actions">
            <button type="submit">
                Добавить расход
            </button>
        </div>
    </div>
    </form>
  )
}

export default CostForm