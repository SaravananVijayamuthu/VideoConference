import { useState } from 'react';
import './App.css';
import Signin from './components/signin';

function App() {
	const [ token, setToken ] = useState();
	return(
  <div className="App">
  {!token ? < Signin setToken={setToken}/> : <div>Hello From Twilio</div>}
  </div>
  );
}

export default App;
