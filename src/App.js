import "./styles.css";
let h = "rohit bajaj";

export default function App(props) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>This is me {props.name}</h2>
      <h3>{h.toUpperCase()}</h3>
      <h3>{h.indexOf("it")}</h3>
    </div>
  );
}
