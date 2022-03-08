import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const App = ({anecdotes}) => {
    const length = anecdotes.length
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(length).fill(0))

    const mostVoted = () => {
        const max = Math.max(...votes)
        return votes.indexOf(max)
    }

    const randomAnecdote = () => {
        let random = selected
        while(random === selected) 
            random = getRandomInt(0, length)
        setSelected(random)
    }

    const voteAnecdote = () => {
        const copyVotes = [...votes]
        copyVotes[selected]++
        setVotes(copyVotes)
    }

    return (
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected] || "no"} votes</p>
        <Button text="vote" handlerClick={voteAnecdote}/>
        <Button text="next anecdote" handlerClick={randomAnecdote}/>
        <h1>Anecdote whit most votes</h1>
        <p>{anecdotes[mostVoted()]}</p>
        <p>has {votes[mostVoted()] || "no"} votes</p>
      </div>
    )
}

const Button = ({text, handlerClick}) => (
    <button onClick={handlerClick}>{text}</button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)