import { useState } from 'react'
import Button from './components/Button'

const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad;
  const average = (good * 1 + bad * -1) / sum;
  const positive = (good / sum) * 100;

  return (
    <div>
      Good: {good}
      Neutral: {neutral}
      Bad: {bad}
      All: {sum}
      Average: {average}
      Positive: {positive}%
    </div>
  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }



  return (
    <div>
      <h1>Unicafe Feedback</h1>
      <section>
        <h2>Give Feedback</h2>
        <Button handleClick={handleGood} text="Good" />
        <Button handleClick={handleNeutral} text="Neutral" />
        <Button handleClick={handleBad} text="Bad" />
      </section>
      <section>
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </section>
    </div>
  )
}

export default App
