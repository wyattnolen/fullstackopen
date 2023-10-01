const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name} - age {props.age}</p>
    </div>
  )
}

const App = () => {
  const age = 0
  return (
    <>
      <p>Greetings</p>
      <Hello name="Clark" age={age}/>
      <Hello name="Kasey" age={age + 30}/>
      <Hello name="Wyatt" age="31"/>
    </>
  )
}

export default App