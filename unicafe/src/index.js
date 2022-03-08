import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const addFeedback = {
      good: () => {setGood(good + 1)},
      neutral: () => {setNeutral(neutral + 1)},
      bad: () => {setBad(bad + 1)}
  }

  return (
    <div>
      <Feedback addFeedback={addFeedback}/>
      <Statistics feedback={{good, neutral, bad}}/>
    </div>
  )
}

const Feedback = ({addFeedback}) => {
  const {good, neutral, bad} = addFeedback
  return(
      <div>
          <h1>Give Feedback</h1>
          <FeedbackButton text="good" handleClick={good}/>
          <FeedbackButton text="neutral" handleClick={neutral}/>
          <FeedbackButton text="bad" handleClick={bad} />
      </div>
 ) 
}

const FeedbackButton = ({text, handleClick}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({feedback}) => {

  const {good, neutral, bad} = feedback
  const all = good + neutral + bad
  const average = (good * 1 + bad * -1) / all
  const positive = good / all * 100

  if(all === 0) return (
      <div>
          <h1>Statistics</h1>
          <p>No feedback given</p>
      </div>
  )

  else return (
      <div>
          <h1>Statistics</h1>
          <table>
              <tbody>
                  <Statistic text="good" value={good}/>
                  <Statistic text="neutral" value={neutral}/>
                  <Statistic text="bad" value={bad}/>
                  <Statistic text="all" value={all}/>
                  <Statistic text="average" value={average}/>
                  <Statistic text="positive" value={positive} unit="%"/>
              </tbody>
          </table>
      </div>
  )
}

const Statistic = ({text, value, unit}) => (
  <tr>
      <td>{text}</td>
      <td> {value} {unit}</td>
  </tr>
)

ReactDOM.render(<App />, document.getElementById('root'))