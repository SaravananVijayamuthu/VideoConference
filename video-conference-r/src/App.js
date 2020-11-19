import { useState } from 'react';
import './App.css';

function App() {
	const [ token, setToken ] = useState();
	return(
  <div className="App">
  {!token ? <div>Show Form</div> : <div>Hello From Twilio</div>}
  </div>
  );
}

export default App;
