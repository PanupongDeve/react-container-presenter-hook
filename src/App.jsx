import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FetchingStudents } from './containers/FetchingStudents'
import { QueryResult } from './containers/QueryResult'
import { Students } from './components/Students'
import { Teachers } from './components/Teachers'
import { useTeachers } from './hooks/useTechers'



function App() {
  const [count, setCount] = useState(0)
  const [teachers, loading] = useTeachers();

  return (
    <div className="App">
      
      <QueryResult loading={loading}>
        <Teachers teachers={teachers} />
      </QueryResult>
      

      <FetchingStudents>
        {({ students }) => {
          return <Students students={students} />
        }}
      </FetchingStudents>
    </div>
  )
}

export default App
