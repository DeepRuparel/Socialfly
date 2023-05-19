import React, { Component,useState } from 'react';
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
export class Progress extends Component {
    static displayName = Progress.name;

    render() {
        return (
            <div>
                <h3>Progress </h3>
                <br></br>
                <ProgressList />

            </div>
        );
    }
}


function ProgressList() {
    const [levels,setLevels] =useState([
        {
            level: 'Level 1',
            status: 'INCOMPLETE',
            duedate: 'MON 5/6'
        },
        {
            level: 'Level 2',
            status: 'INCOMPLETE',
            duedate: 'WED 5/11'
        },
        {
            level: 'Level 3',
            status: 'INCOMPLETE',
            duedate: 'WED 5/13'
        },
        {
            level: 'Level 4',
            status: 'INCOMPLETE',
            duedate: 'WED 5/15'
        }
    ])
    const [pinnedTask, setPinnedTask] = useState([]);
    const [completedTask, setCompletedTask] = useState([])
    const handleClick = (level) => {
        setPinnedTask([...pinnedTask, level])
    }
    const handleUnpin = (task) => {
        const newArray = pinnedTask.filter((t) => {
            return t.level!==task.level
        } )

        setPinnedTask(newArray);
    }
    const handleComplete = (task) => {
        const filteredArray = levels.filter((t, index) => {
            return t.level!==task.level
        })
        setLevels(filteredArray)
        setCompletedTask([...completedTask, task])
    }
    const pinnedTaskBoard =
        pinnedTask.map((task) => 
            <div style={{ borderRadius: '20px', padding: '20px' } }>
                <p>{task.level} {task.status}</p>
                <p> Due by {task.duedate}</p>
                <button onClick={() => handleUnpin(task)}>unpin <TbIcons.TbPinnedOff /> </button>

            </div>
            )
    const printlevels = 
        levels.map((level) =>
            <div key={level.level} style={{ borderRadius: '20px', padding: '20px' } }>
                <p> <b style={{fontSize: '30px'}}>{level.level}</b> {level.status} </p>
                <p>Due by {level.duedate} </p>
                <button style={{ borderRadius:'10px', width:'50px' }} onClick={() => handleClick(level)}><TbIcons.TbPinned /> </button>
                <button style={{ borderRadius: '10px', width: '150px' }} onClick={() => handleComplete(level)}>Completed <AiIcons.AiOutlineCheckSquare /></button>
                
            </div>
        )
    const printcompletedtask = 
        completedTask.map((l) => 
            <div key={l.level} style={{borderRadius: '20px', padding: '20px' } }>
                <p><b style={{ fontSize: '30px' }}>{l.level}</b><span></span> completed </p>
        </div>
    )

    return (
        <>
            <div id='container' style={{ width: '100%' }}>
                <div className="pendingTask" style={{ float: 'right', width: '50%' }}>
                    
                    <h2> Pending Tasks <MdIcons.MdPendingActions /> </h2>
                    <div style={{ backgroundColor: 'cyan', width: '700px', borderRadius:'20px' }}>
                        {printlevels}
                    <br></br>
                    </div>
                    <h2>Completed Tasks <AiIcons.AiOutlineCheckSquare /> </h2>
                    <div style={{ backgroundColor: 'cyan', width: '100%', borderRadius:'20px' }}>
                        {printcompletedtask}
                    </div>
                </div>
                <div className="pinnedTask" style={{ float: 'left', width: '50%'}}>
                    <h2>Pinned Task <TbIcons.TbPinned /> </h2>
                    <div style={{ backgroundColor: 'blueviolet', width: '80%', borderRadius: '20px' }}>
                    {pinnedTaskBoard}
                    </div>
                </div>
            </div>
        </>
    );
}