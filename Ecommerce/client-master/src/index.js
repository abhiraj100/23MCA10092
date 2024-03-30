import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:9876/numbers/p');
                setResponse(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {response && (
                <div>
                    <h1>Previous State: {response.windowPrevState.join(', ')}</h1>
                    <h1>Current State: {response.windowCurrState.join(', ')}</h1>
                    <h1>Numbers: {response.numbers.join(', ')}</h1>
                    <h1>Average: {response.avg}</h1>
                </div>
            )}
        </div>
    );
};

export default App;
