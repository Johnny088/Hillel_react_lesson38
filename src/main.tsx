import { createRoot } from 'react-dom/client';
import { students } from './data';

const markUp = (
  <ul>
    {students.map(student => (
      <li key={student.id}>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Course: {student.course}</p>
        <p>{student.isOnline ? 'Online' : 'Offline'}</p>
        <img src={student.avatar} alt="avatar" />
      </li>
    ))}
  </ul>
);
createRoot(document.getElementById('root') as HTMLDivElement).render(markUp);
