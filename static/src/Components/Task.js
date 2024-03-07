import React, { useState } from 'react';
import '../Styles/Task.css';

const initialTasks = [
    { title: 'Create a user flow of social application design', status: 'Approved' },
    { title: 'Create a user flow of social application design', status: 'In review' },
    { title: 'Landing page design for Fintech project of singapore', status: 'In review' },
    { title: 'Interactive prototype for app screens of deltamine project', status: 'On going' },
    { title: 'Interactive prototype for app screens of deltamine project', status: 'Approved' }
];

const statuses = ['Approved', 'In review', 'On going'];

function Task() {
    const [tasks, setTasks] = useState(initialTasks);

    return (
        <div className="task-container">
            <h2>Today task</h2>
            <div className="tabs">
                <button>All 10</button>
                <button>Important</button>
                <button>Notes 05</button>
                <button>Links 10</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input type="checkbox" />
                        {task.title}
                        <select value={task.status} onChange={(e) => handleStatusChange(e, index)}>
                            {statuses.map((status, i) => <option key={i} value={status}>{status}</option>)}
                        </select>
                    </li>
                ))}
            </ul>
        </div>
    );

    function handleStatusChange(e, taskIndex) {
        const newTasks = [...tasks];
        newTasks[taskIndex].status = e.target.value;
        setTasks(newTasks);
    }
}

export default Task;