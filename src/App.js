import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [activity, setActivity] = useState('');

	const getAdvace = async () => {
		const responce = await fetch(`http://www.boredapi.com/api/activity/`);
		const data = await responce.json();
		setActivity(data);
	};


	useEffect(() => {
		getAdvace();
	}, []);

	return (
		<div className="App">
			<div className="container">
				<h1>Don't know what to do? Click the button below to find a fun activity</h1>
			</div>
			<div className="activity">
				<p>{activity.activity}</p>
				<p>{activity.type}</p>
			</div>
			<div className="container">
				<button onClick={getAdvace}>GO!</button>
			</div>
		</div>
	);
}

export default App;
