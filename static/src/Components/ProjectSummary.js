import React, { useState } from 'react';
import '../Styles/ProjectSummary.css';

const initialProjects = [
  { lecture: 'Nelsa web development', notes: 'Delayed', flashcards: 'Completed', quiz: 'Completed' },
  { lecture: 'Datascale AI app', notes: 'On going', flashcards: 'At risk', quiz: 'Delayed' },
  // ... add more projects as needed
];

const statuses = ['Delayed', 'On going', 'Completed', 'At risk'];

function ProjectSummary() {
  const [projects, setProjects] = useState(initialProjects);

  return (
    <div className="ProjectSummary">
      <table>
        <thead>
          <tr>
            <th>Lecture</th>
            <th>Reviewed Notes</th>
            <th>Flashcards</th>
            <th>Quiz</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.lecture}</td>
              <td>
                <select className={project.notes.toLowerCase()} value={project.notes} onChange={(e) => handleStatusChange(e, index, 'notes')}>
                  {statuses.map((status, i) => <option key={i} value={status}>{status}</option>)}
                </select>
              </td>
              <td>
                <select className={project.flashcards.toLowerCase()} value={project.flashcards} onChange={(e) => handleStatusChange(e, index, 'flashcards')}>
                  {statuses.map((status, i) => <option key={i} value={status}>{status}</option>)}
                </select>
              </td>
              <td>
                <select className={project.quiz.toLowerCase()} value={project.quiz} onChange={(e) => handleStatusChange(e, index, 'quiz')}>
                  {statuses.map((status, i) => <option key={i} value={status}>{status}</option>)}
                </select>
              </td>
            </tr> 
          ))}
        </tbody> 
      </table> 
    </div> 
  );

  function handleStatusChange(e, projectIndex, task) {
    const newProjects = [...projects];
    newProjects[projectIndex][task] = e.target.value;
    setProjects(newProjects);
  }
}

export default ProjectSummary;