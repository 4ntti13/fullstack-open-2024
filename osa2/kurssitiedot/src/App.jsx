/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// App.jsx:
import Course from './Course'

const Header = ({header}) => {
  return(
    <div><h1>{header}</h1></div>
  )
}

export const CourseHeader = ({coursesName}) => {  
  return (   
    <div>
      <h2>{coursesName}</h2>
    </div>
  )
}

export const Content = ({parts}) => {
  //console.log(parts)
  return (
    <div>
      {parts.map(part => 
        <Part key = {part.id} part = {part} />  
      )}     
    </div>
  ) 
}

const Part = ({part}) => {  
  return (   
    <div>{part.name} {part.exercises}</div>        
  )
}

export const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0); 
  return (
    <div>
      <b>Total of {total} exercises</b>
    </div>
  )
}

const App = () => {
  const header = "Web development curriculum";
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <div><Header header = {header} /></div>
      <div>{courses.map(courses => 
        <Course key={courses.id} courses = {courses} coursesName = {courses.name} />
        )}
      </div>
        
    </div>
    
  )
}

export default App;

