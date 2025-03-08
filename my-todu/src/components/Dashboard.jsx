import React from 'react'
import Nav from './Nav'
import AddTask from './AddTask'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const theme = useSelector((state) => state.toggle.theme);
  return (
    
    <div>
        {/* <Nav/> */}
        <div className={`flex  pt-10 px-10  gap-10   ${theme === 'dark' ? 'bg-[#242424] text-white' : 'bg-[#FBFDFC] text-black'}`}>
        <Sidebar/>
       <AddTask/>
      
        </div>
     

      
    </div>
  )
}

export default Dashboard