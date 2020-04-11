import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './ssc192.png';
import headline from './ssc-headline-clear-cropped.png'
import './App.css';
import AppBody from './components/App-Body';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');

  function handleChange (character){
    setInput(character === /\n/ ? '<br>' : character)
  }

  return (
    <div className="App bg-secondary">
      <header className="App-header">
        <a target="_blank" rel="noopener noreferrer" href="https://slightlyskewedcreations.com" className="h-100">
        <img src={logo} className="App-logo" alt="logo"/>
        <img src={headline} alt="Slightly Skewed Creations"className="App-logo" />
        </a>
      </header>
      <div className="container-fluid">
        <AppBody>
          <Input input={input} handleChange={handleChange} handleClick={setOutput}/>
          <Output output={output}/>
        </AppBody>
      </div>
    </div>
  );
}

export default App;
