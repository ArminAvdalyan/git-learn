import logo from './logo.svg';
import './App.css';

import Button from "./components/Button/Button.js";
import Input from "./components/Input/Input.js";
import Title from "./components/Title/Title.js";
function App() {
  return (
    <div className="App">
      <Title/>
      <Input/>
      <Button/>
    </div>
  );
}

export default App;
