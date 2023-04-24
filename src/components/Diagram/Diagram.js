import React from 'react'
import DiagramBar from './DiagramBar'
import './Diagram.css'
//Это блочный родитель диаграммы, обертка каждого блока месяца
//Суда будет попадать пропс всех месяцов и их расходов 
//После чего будет в качестве пропса передаваться в компонент DiagramBar
//Данный компонент является связующим звеном между компонентами.

// -- // 
// Нам нужен maxValue , мы его получим путем создания массива через props.dataSets
// Мы создадим массив из свойств value у объектов dataSets
const Diagram = (props) => {
    //Масив из значений [2332,423,2] etc
    const dataSetsValues = props.dataSets.map(dataSet => dataSet.value);
    //Для того чтобы использывать функцию макс ( найти максимальное число), нам нужно множество чисел разделенных запятыми 
    //А у нас массив чисел, массив чисел если поместить функцию макс выйдет ошибка
    //Мы используем оператор спред чтобы массив чисел развернулся и превратился в обычные числа через запятую
    //В набор безымянных данных
    const maxMonthCosts = Math.max(...dataSetsValues);
  return (
    <div className='diagram'>
        {props.dataSets.map(dataSet => 
        <DiagramBar key={dataSet.label} value={dataSet.value} maxValue={maxMonthCosts} label={dataSet.label}/>
        )}
    </div>
  )
}

export default Diagram