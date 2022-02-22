import './App.css';

const array = ['acordar', 'escovar os dentes', 'fazer café', 'estudar', 'almoçar', 'fazer exercícios', 'trabalhar', 'tomar banho', 'dormir'];

const Task = (value) => {
  return <li>{value}</li>;
};

function App() {
  return array.map((el) => Task(el));
}

export default App;
