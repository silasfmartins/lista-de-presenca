import { useState } from 'react';

import './style.css';

import { Dropzone } from '../../components/Dropzone';
import { Card } from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
    setStudents(prevState => [...prevState, newStudent]);
  }

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div className="responsible">
          <input className="responsible-input"
            type="text"
            placeholder="Nome Responsável Evento"
            onChange={e => setResponsible(e.target.value)}
          />
          <Dropzone />
        </div>
      </header>
      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student => 
          <Card 
            key={student.time} 
            name={student.name} 
            time={student.time} 
          />
        )
      }
    </div>
  )
}
