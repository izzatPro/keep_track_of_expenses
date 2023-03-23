import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
  const costs = [
    {
      date: new Date("2023","05","17"),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      date: new Date("2023","09","3"),
      description: 'MacBook',
      amount: 2345.36
    },
    {
      date: new Date("2023","02","26"),
      description: 'Джинсы',
      amount: 62
    },
  ]





const App = () => {
  return (
    <div className="App">
      <NewCost/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;




