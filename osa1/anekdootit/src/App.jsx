/* eslint-disable react/prop-types */
import { useState } from 'react'

const Header = ({header}) => {
  return(
    <div>
     <h1>{header}</h1>
    </div>
  )
}

const Button = ({click, text}) => {
  return(
    <div>
      <button onClick={click}>
        {text}
      </button>
    </div>
  )
}

const HeaderVotes = ({headerVotes}) => {
  return(
    <div>
      <h1>{headerVotes}</h1>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const header = "Anecdote of the day";
  const headerVotes = "Anecdote with most votes"; 
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const handleNextAnekdoteButtonClick = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomAnecdote); 
  }

  const handleVoteButtonClick = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);   
  }

  const mostVotes = Math.max(...votes);
  const mostVoted = votes.indexOf(mostVotes)
  
  return (
    <div>
      <Header header={header} />
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>     
      <Button click={handleVoteButtonClick} text="vote" />
      <Button click={handleNextAnekdoteButtonClick} text="next anecdote" />
      <HeaderVotes headerVotes={headerVotes} />
      <div>{anecdotes[mostVoted]}</div>
      <div>has {mostVotes} votes</div>
    </div>
  );
}

export default App
