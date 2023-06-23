// useState
import { useState } from 'react'

function App() {
    const [name, setName] = useState('')
    const changeName = (e) => {
        e.preventDefault()
        console.log(name)
    }
    return (
        <div className="App">
            <form>
                {' '}
                <input
                    type="text"
                    value={name}
                    onChanae={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                />
                <p>{name}</p> <button onClick={changeName}>Click Me</button>
            </form>
        </div>
    )
}

export default App
