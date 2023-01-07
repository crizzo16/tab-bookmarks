import './App.css';
import Section from "./Section";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <div>
        {data.data.map((sec) => {
          <Section name={sec.name} links={sec.links} />
        })}
      </div>

      <Section name={"Testing"} />
      <div>Hullo</div>
    </div>
  );
}

export default App;
