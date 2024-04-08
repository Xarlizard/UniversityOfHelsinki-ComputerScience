const Total = ({parts}) => {

    const sum = (parts) => {
        let result = 0
        for(let i = 0; i < parts.length; i++){result += parts[i]['exercises']}
        return result
    }
    return(
      <>
        <p><b>total of {sum(parts)} exercises</b></p>
      </>
    )
  }

export default Total