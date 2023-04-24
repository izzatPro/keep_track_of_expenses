import React, {useState} from 'react';
import './CostForm.css';

const CostForm = (props) => {

    const [inputName,setInputName] = useState('');
    const [inputAmount,setInputAmount] = useState('');
    const [inputDate,setInputDate] = useState('')
    
   

    const nameChangeHandler = (e) =>{
        setInputName(e.target.value);
    }

    const amountChangeHandler = (e) =>{
        setInputAmount(e.target.value);
    }

    const dateChangeHandler = (e) =>{
        setInputDate(e.target.value);
    }

    const [clazzz, setClazzz] = useState('new-cost__display')








    const submitHandler = (e) =>{
        e.preventDefault();

        if (clazzz === 'new-cost__display'){
            setClazzz((prevClazzz => {
                return ''
            }))
        }
        
        else {
            setClazzz((prevClazzz => {
                return 'new-cost__display'
            }))
        }

        const submitInfo = {
            description:inputName,
            amount:inputAmount,
            date: new Date(inputDate),
            id: Math.random().toString()
        }
        
        props.upDateCost(submitInfo);


        setInputAmount('');
        setInputDate('');
        setInputName('');
    } 

    const cancel = () =>{
        if (clazzz === 'new-cost__display'){
            setClazzz((prevClazzz => {
                return ''
            }))
        }
        else {
            setClazzz((prevClazzz => {
                return 'new-cost__display'
            }))
        } 
    }

  return (
    <form onSubmit={submitHandler}>
    <div className='new-cost__controls'>
        <div className="new-cost__control">
            <label className={clazzz} htmlFor="">Название</label>
            <input className={clazzz} type="text" onChange={nameChangeHandler} value={inputName} />
        </div>
        <div className="new-cost__control">
            <label className={clazzz} htmlFor="" min="0.01" step="0.01">Cумма</label>
            <input className={clazzz} type="text" onChange={amountChangeHandler} value={inputAmount}/>
        </div>
        <div className="new-cost__control">
            <label className={clazzz} htmlFor="">Дата</label>
            <input className={clazzz} type="date" min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} value={inputDate}/>
        </div>
        <div className={clazzz === 'new-cost__display' ? 'new-cost__actions' : 'new-cost__actions new-cost__width' }>
            <button type="submit">
                Добавить {clazzz === 'new-cost__display' && ' Новый'} Расход
            </button>
            <button className={clazzz} onClick={cancel} type="button">
                Отмена
            </button>
        </div>
    </div>
    </form>
  )
}

export default CostForm