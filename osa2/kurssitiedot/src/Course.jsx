/* eslint-disable react/prop-types */
// Course.jsx:
import {CourseHeader, Content, Total} from './App'
const Course = ({courses, coursesName}) => {  
    return(
      <div>
        < CourseHeader coursesName = {coursesName} />
        < Content parts = {courses.parts} />
        < Total parts = {courses.parts} />    
      </div>
    )
}

export default Course;