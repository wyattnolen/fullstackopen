const Note = ({ note }) => {
    const { content, important } = note;
    return (
      <p>{important ? 'Important' : 'Not Important'} - {content}</p>
    )
  }
  
  export default Note;
  