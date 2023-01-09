import './App.css';
import Section from "./Section";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      {data.data.map((tester) => {
        return <Section name={tester.name} links={tester.links} color={tester.color} />
      })}
    </div>
  );
}

export default App;
