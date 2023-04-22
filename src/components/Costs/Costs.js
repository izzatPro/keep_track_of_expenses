import CostList from './CostList';
import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from "../CostFilter/CostsFilter";
import { useState } from "react";

const Costs = (props) => {

    const [selectedYear , setSelectedYear] = useState("2023");


    const filter2023 = props.costs.filter((item) => item.date.getFullYear().toString() === selectedYear );
    const [filter, setFilter] = useState(filter2023);

    const yearChangeHandler = (year) => {
    setSelectedYear(year);
    setFilter( props.costs.filter((item) => item.date.getFullYear().toString() === year));
    }
    

  

  return (
       
      <Card className="costs" >
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <CostList filter={filter}/>
      </Card>
  )
}

export default Costs