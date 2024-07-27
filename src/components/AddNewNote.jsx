import { useState } from "react";
import { useNotesDispatch } from "../context/NotesContext";

function AddNewNote() {
  const dispatch = useNotesDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: "add", payload: newNote });
    setTitle("");
    setDescription("");
  };

  const hadnleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const hadnleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form onSubmit={handleSubmit} className="note-form">
        <input
          type="text"
          value={title}
          onChange={hadnleChangeTitle}
          className="text-field"
          placeholder="Note title"
        />
        <input
          type="text"
          value={description}
          onChange={hadnleChangeDescription}
          className="text-field"
          placeholder="Note description"
        />
        <button className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
