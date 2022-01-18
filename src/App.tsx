import React, { useState } from 'react';
import './app.scss';

const App = (): JSX.Element => {
	const [counter, setCounter] = useState<number>(1);

	return (
		<div>
			<h1 className="header">
				Countersds
				{counter}
			</h1>
			<button type="button" onClick={() => setCounter(count => count + 1)}>
				Click to increasesddd
			</button>
		</div>
	);
};

export default App;
