import Costs from "./components/Costs";

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





function App() {
  return (
    <div className="App">
    <h1>Начнем изучение React !</h1>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;




