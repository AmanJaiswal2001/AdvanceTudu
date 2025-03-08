import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";


const initialState={
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    completedTasks: JSON.parse(localStorage.getItem('completedTasks')) || [],
    importantTasks: JSON.parse(localStorage.getItem('importantTasks')) || [] ,

};


const tuduSlice=createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        
        },
        editTask: (state, action) => {
            const { id, updatedTask } = action.payload;
            const taskIndex = state.tasks.findIndex(task => task.id === id);
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
        
            }
        },
        completeTask: (state, action) => {
            const taskToComplete = state.tasks.find(task => task === action.payload);
            if (taskToComplete) {
                state.completedTasks.push(taskToComplete);
                state.tasks = state.tasks.filter(task => task !== action.payload);
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
                localStorage.setItem('completedTasks', JSON.stringify(state.completedTasks));
          
            }
    },
    markImportant: (state, action) => {
        const task = action.payload;
        if (!state.importantTasks.includes(task)) {
            state.importantTasks.push(task);
        } else {
            state.importantTasks = state.importantTasks.filter(item => item !== task);
        }
        localStorage.setItem('importantTasks', JSON.stringify(state.importantTasks)); 
     
    }
}
})


export const {addTask,removeTask,editTask,completeTask,markImportant}=tuduSlice.actions

export default tuduSlice.reducer;