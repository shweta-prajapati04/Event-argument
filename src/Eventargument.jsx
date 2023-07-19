import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

const Eventargument = () => {
    let [Count, setCount] = useState(0);
    const Handleargument = (number, oper) => {
        if (oper === '+')
            setCount(Count + number);
        else if (oper === '-') {
            if (Count > 0 && Count >= 10)
                setCount(Count - number);
            else
                setCount(Count - Count);
            if (Count == 0)
                alert('your counter became 0')
        }
        else
            setCount(Count * number);
    }
    return (
        <div>
            <h2>EVENT HANDLE WITH ARGUMENT</h2>
            <div style={{ padding: '50px', backgroundColor: Count >= 50 ? 'red' : 'yellow' }} >
                <h1> {Count}</h1>
                <button onClick={() => Handleargument(5, '+')}>Add 5</button>
                <button onClick={() => Handleargument(10, '-')}>Remove 10</button>
                <button onClick={() => Handleargument(2, '*')}>Multiply by 2</button>
            </div>
        </div>
    )
}

export default Eventargument