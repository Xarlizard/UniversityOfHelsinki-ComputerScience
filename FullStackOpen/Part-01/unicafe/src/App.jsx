import { useState } from 'react'

const Button = ({handleClick, text}) => <><button onClick={handleClick}>{text}</button></>

const Statics = ({good, neutral, bad}) => (
  <>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {good + neutral + bad}</p>
    <p>average {(good*1  + bad*-1)/(good + neutral + bad)}</p>
    <p>positive {good*100 / (good + neutral + bad)} %</p>
  </>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <h1>statistics</h1>
      <Statics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App