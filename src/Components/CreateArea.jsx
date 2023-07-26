import React,{useState} from 'react';


function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function InputHandler(event) {
    var newValue = event.target.value;
    var newName = event.target.name;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [newName]: newValue,
      };
    });
  }

  function handleAddClick(event) {
    event.preventDefault();
    props.onClicking(note);
    setNote({ title: "", content: "" }); 
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={InputHandler} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={InputHandler}
        />
        <button onClick={handleAddClick}>Add</button>
      </form>
    </div>
  );
}


export default CreateArea;
