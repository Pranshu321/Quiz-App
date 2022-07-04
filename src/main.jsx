import React , {useState} from 'react';
import Join from './Join';
import App from './App';

const Main = () => {
    const [quizstarted, setquizstated] = useState(false);
    return (
        <>
            {
                quizstarted ? (
                    <App />
                ) : <Join fun={() => setquizstated(true)} />
            }
        </>
    )
}

export default Main