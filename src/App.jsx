import Definitions from './components/Definitions.jsx';

function App() {
    const definitions = [
        {dt: 'Coffee', dd: 'Black hot drink', id: 1},
        {dt: 'Milk', dd: 'White cold drink', id: 2},
    ];

    return (
        <>
            <Definitions data={definitions}/>
        </>
    )
}

export default App
