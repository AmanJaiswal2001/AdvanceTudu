import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
    const tasks = useSelector((state) => state.tudu.tasks);
  const completedTasks = useSelector((state) => state.tudu.completedTasks);

const data = {
  labels: ['Completed Tasks', 'Pending Tasks'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [tasks.length, completedTasks.length],
      backgroundColor: [
       ' rgba(63, 145, 66, 1)',
       ' rgba(20, 46, 21, 1)',
      ],
      hoverOffset: 4,
    },
  ],
};
const options = {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
}

  return (
    <div className='w-52 h-52 pt-5'>
      <Doughnut data={data}  options={options} />
    </div>
  );
};

export default PieChart;
