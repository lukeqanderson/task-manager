import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Go to dog park",
      day: "Feb 2nd at 2:15pm",
      reminder: true,
    }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask}/> : 'No Tasks'}
    </div>
  );
}

export default App;
