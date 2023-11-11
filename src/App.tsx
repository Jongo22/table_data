import { useState } from "react";
import Table from "./components/Table";

function App() {
  const showTableOne = true;
  const showTableTwo = true;
  return (
    <>
      <Table tableOne={showTableOne}></Table>
      <Table tableTwo={showTableTwo}></Table>
    </>
  );
}

export default App;
