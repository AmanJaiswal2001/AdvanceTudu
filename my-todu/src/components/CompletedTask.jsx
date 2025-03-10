import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
const CompletedTask = ({text}) => {
    const [isFilled, setIsFilled] = useState(false);
    const [checked, setChecked] = useState(false);
   
    return (
        <div className='w-full flex items-center justify-between p-2 h-20 border-t  border-[#496E4B33]'>
    
    <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setChecked(!checked)}
        >
          <Checkbox  
          
          sx={{
    color: 'gray',
    '&.Mui-checked': {
      color: 'green',
    },
    '&.MuiSvgIcon-root': {
      fill: 'none',
      stroke: 'currentColor',
    },
    '&.dark .Mui-checked': {
      color: 'white', // Dark mode checked color
    },
    '&.dark .MuiSvgIcon-root': {
      color: 'white', // Dark mode icon color
    }
            }} 
             checked={checked}
            // onChange={handleCheckboxChange} 
            />
          <span className={`${checked?"line-through ":""}`}>{text}</span>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setIsFilled(!isFilled)}
        >
          <svg
            className="w-6 h-6  stroke-current fill-none dark:text-white">
 
            {/* width="22"
            height="21"
            viewBox="0 0 22 21"
            fill={isFilled ? 'black' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            strokeWidth="1.5"
          > */}
            <path d="M21.4232 8.11812C21.3294 7.82986 21.1524 7.5758 20.9145 7.38795C20.6766 7.2001 20.3885 7.08686 20.0863 7.06249L14.5551 6.61624L12.4194 1.45155C12.3039 1.17013 12.1074 0.929412 11.8547 0.759996C11.6021 0.59058 11.3047 0.500122 11.0005 0.500122C10.6963 0.500122 10.399 0.59058 10.1463 0.759996C9.89369 0.929412 9.69712 1.17013 9.58163 1.45155L7.44788 6.61531L1.91381 7.06249C1.61117 7.08809 1.3228 7.20243 1.08485 7.39119C0.8469 7.57994 0.669943 7.83472 0.576151 8.12361C0.482359 8.41249 0.475904 8.72263 0.557593 9.01516C0.639283 9.3077 0.805485 9.56962 1.03538 9.76812L5.25413 13.4084L3.96881 18.8516C3.89693 19.1473 3.91453 19.4577 4.01938 19.7434C4.12423 20.0291 4.3116 20.2771 4.55771 20.4562C4.80382 20.6352 5.09757 20.737 5.40167 20.7488C5.70576 20.7605 6.00649 20.6817 6.26569 20.5222L11.0001 17.6084L15.7373 20.5222C15.9965 20.6798 16.2967 20.7571 16.5998 20.7445C16.903 20.7318 17.1956 20.6298 17.4409 20.4512C17.6861 20.2726 17.8731 20.0254 17.9782 19.7407C18.0832 19.4561 18.1017 19.1467 18.0313 18.8516L16.7413 13.4075L20.9601 9.76718C21.1918 9.56902 21.3595 9.30653 21.442 9.01296C21.5244 8.71939 21.5179 8.40796 21.4232 8.11812Z" />
          </svg>
        </div>
        </div>
      )
}

export default CompletedTask