import React from 'react'
import Diagram from '../Diagram/Diagram';
// Здесь мы получим filter - отфильтрованный массив объектов, по году.
// Где мы уже будем перебирать каждый объект который относится к одному году
// По месецам и в зависимости от расхода заполнять ползунок.
function CostsDiagram(props) {

    const diagramDataSets = [   
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]


    // costs - это отфильтрованный массив который мы получим
    // сosts - внутри этого массива объекты которые находятся в списке
    // сosts - совпадающие по году добавления
    // cost - это отдельно взятый объект в этом отфильтрованном массиве
    for (const cost of props.costs){
        // Возвращает порядковый номер месяца в котором находится объект
        const costMonth = cost.date.getMonth();
        //Порядковый номер соответствует объекту diagramDataSets 
        diagramDataSets[costMonth].value += cost.amount;
    }


  return (
    <Diagram dataSets={diagramDataSets} />
  )
}

export default CostsDiagram