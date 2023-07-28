import "./App.css";
import SchemaForm from "./components/SchemaForm";
import { Columns } from "./components/columns";

function App() {
  return (
    <div className="App">
      <SchemaForm
        columns={Columns()}
        onSubmit={(e) => console.log("value:: ", e)}
      />
    </div>
  );
}

export default App;
