import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({course}) => {
    const { name, parts } = course;

    return (
        <article>
            <Header name={name} />
            <Content parts={parts} />
            <Total parts={parts}/>
        </article>
    )
}

export default Course