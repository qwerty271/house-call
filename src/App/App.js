import "./App.css";
import Form from "../Form/Form";

function App() {
  const date = "2021.10.01";
  console.log(date.split(".").reverse().join("-"));
  return (
    <div className="page">
      <Form />
    </div>
  );
}

export default App;
