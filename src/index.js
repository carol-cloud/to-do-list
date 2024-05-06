import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TourProvider } from '@reactour/tour'


const steps = [
  {
    selector: '.input-task',
    content: 'Digite sua nova task',
  },
  {
    selector: '.add-button',
    content: 'Clique aqui para adiciona-la a lista',
  },
  {
    selector: '.delete-button',
    content: 'Clique aqui para deletar a task',
  },
  {
    selector: '#moveUp',
    content: 'Clique aqui para movê-la para cima',
  },
  {
    selector: '#moveDown',
    content: 'Clique aqui para movê-la para baixo'
  }
 
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TourProvider steps={steps}>
    <App />
  </TourProvider>
);



