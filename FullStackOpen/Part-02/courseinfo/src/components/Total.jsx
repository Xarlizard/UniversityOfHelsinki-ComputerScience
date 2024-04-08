const Total = ({parts}) => 
    <>
        <p><b>total of {parts.reduce((total, part) => total + part['exercises'], 0)} exercises</b></p>
    </>

export default Total