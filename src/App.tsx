import { useState } from 'react';
import Page from './components/Page';
import './App.css';

const App: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Page />
        </div>
    );
};

export default App;
