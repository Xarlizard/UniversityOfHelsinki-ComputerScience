const Course = ({course}) => 
    <>
        <Header course ={course.name} />
        <Content parts={course.parts} />
        <p><b>total of {course.parts.reduce((total, part) => total + part['exercises'], 0)} exercises</b></p>
    </>

const Header = ({course}) => <h2>{course}</h2>

const Content = ({parts}) => 
    <>
        {parts.map(part => 
            <Part   
                key={part.id} 
                part={part.name} 
                exercises={part.exercises}
            />
        )}
    </>

const Part = ({part, exercises}) => <p>{part} {exercises}</p>

export default Course