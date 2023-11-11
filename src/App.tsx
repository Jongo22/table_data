import Table from "./components/Table";
import "./styles.css"

function App() {
  const showTableOne = "true";
  const showTableTwo = "true";
  
  return (
    <>
      <Table tableOne={showTableOne}></Table>
      <Table tableTwo={showTableTwo}></Table>
    </>
  );
}

export default App;
