import { createRoot } from 'react-dom/client';
import { students } from './data';

const markUp = (
  <ul>
    {students.map(student => (
      <li key={student.id}>
        <p>{student.name}</p>
        <p>{student.age}</p>
        <p>{student.course}</p>
        <p>{student.isOnline}</p>
        <img src={student.avatar} />
      </li>
    ))}
  </ul>
);
createRoot(document.getElementById('root') as HTMLDivElement).render(markUp);
