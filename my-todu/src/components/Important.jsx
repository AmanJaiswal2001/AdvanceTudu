import React from 'react';
import { useSelector } from 'react-redux';
import ListTask from './ListTask';
import Sidebar from './Sidebar';

const Important = () => {
    const importantTasks = useSelector((state) => state.tudu.importantTasks);
    // const isMenuOpen=useSelector((store)=>store.toggle.isMenuOpen)
    const handleCompleteTask = (task) => {
        // Complete logic yahan implement karein
        console.log(`${task} marked as complete`);
    };
    // if(!isMenuOpen) return null;
    const theme = useSelector((state) => state.toggle.theme);
    return (
        <div className={`flex  px-10 pt-10  gap-10 ${theme === 'dark' ? 'bg-[#242424] text-white' : 'bg-[#FBFDFC] text-black'}`}>
      
      <Sidebar/>
      <div className={`flex w-[80%]   gap-10 ${theme === 'dark' ? 'bg-[#242424] text-white' : 'bg-[#FBFDFC] text-black'}`}>
      
            {importantTasks.length > 0 ? (
                importantTasks.map((task, index) => (
                    <ListTask
                        key={index}
                        text={task}
                        onComplete={handleCompleteTask}
                    />
                ))
            ) : (
                <p className='text-center text-gray-500'>No important tasks available.</p>
            )}
        </div>
        </div>
    );
};

export default Important;
