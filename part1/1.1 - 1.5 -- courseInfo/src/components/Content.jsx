import Part from "./Part";

const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0].part} exercises={props.parts[0].exercises} />
            <Part part={props.parts[1].part} exercises={props.parts[1].exercises} />
            <Part part={props.parts[2].part} exercises={props.parts[2].exercises} />
        </>
    )
}

export default Content