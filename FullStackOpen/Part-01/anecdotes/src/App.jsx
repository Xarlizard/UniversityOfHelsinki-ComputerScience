import { useState } from 'react'

const Display = ({h1, anecdotes, selected, vote}) => <><h1>{h1}</h1><p>{anecdotes[selected]}</p><p>has {vote[selected]} votes</p></>

const Button = ({text, handleClick}) => <><button onClick={handleClick}>{text}</button></>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const h1 = ["Anecdote of the day", "Anecdote with most votes"]
   
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [vote, setVote] = useState(Array(8).fill(0))

  const randomize = () => {
    const newSelected = Math.floor(Math.random()*anecdotes.length)
    setSelected(newSelected)
    setIndex(newSelected)
  }

  const setVoteValue = () => {
    const newVote = {...vote}
    newVote[selected] += 1
    setVote(newVote)
    if(newVote[selected] > newVote[mostVoted]){ setMostVoted(selected) }
  }

  return (
    <div>
      <Display h1={h1[0]} anecdotes={anecdotes} selected={selected}  vote={vote} />
      <Button handleClick={setVoteValue}  text="vote"          />
      <Button handleClick={randomize}     text="next anecdote" />
      <Display h1={h1[1]} anecdotes={anecdotes} selected={mostVoted} vote={vote} />
    </div>
  )
}

export default App