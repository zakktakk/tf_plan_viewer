import React, {useState} from 'react'
import './app.css'


export const App = () => {
	const [count, setCount] = useState(0)

	return (
		<div className='app'>
			<header className='app-header'>
				<p>Vite + React</p>
				<p>
					<button onClick={() => setCount((count) => count + 1)}>
						count is: {count}
					</button>
				</p>
			</header>
		</div>
	)
}
