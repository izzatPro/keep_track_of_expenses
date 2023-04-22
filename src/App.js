import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from 'react';


  const INITIAL_COSTS = [
    {
      date: new Date("2021","05","17"),
      description: 'Холодильник',
      amount: 999.99,
      id: 'c1'
    },
    {
      date: new Date("2022","09","3"),
      description: 'MacBook',
      amount: 2345.36,
      id: 'c2'
    },
    {
      date: new Date("2022","02","26"),
      description: 'Джинсы',
      amount: 62,
      id: 'c3'
    },
  ]




const App = () => {

    const [costs , setCost] = useState(INITIAL_COSTS);

    const upDateCost = (cost) =>{
      setCost((prevCost) =>{
        return [cost,...prevCost];  
      })
  }

  return (
    <div className="App">
      <NewCost upDateCost={upDateCost} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;




