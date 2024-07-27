import { useState } from "react";
import "./App.css";
import NotesHeader from "./components/NotesHeader";
import NoteApp from "./components/NoteApp";
import AppProviders from "./providers/AppProviders";

function App() {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("earliest");

  // const handleAddNotes = (newNote) => {
  //   // setNotes((prevNotes) => [...prevNotes, newNote]);
  //   dispatch({ type: "add", payload: newNote });
  // };
  // const handleDeleteNote = (id) => {
  //   // const filteredNote = notes.filter((n) => n.id !== id);
  //   // setNotes(filteredNote);
  //   // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  //   dispatch({ type: "delete", payload: id });
  // };

  // const handleCompleteNote = (e) => {
  //   const noteId = Number(e.target.value);
  //   // const newNote = notes.map((note) =>
  //   //   note.id === noteId ? { ...note, completed: !note.completed } : note
  //   // );
  //   // setNotes(newNote);
  //   dispatch({ type: "complete", payload: noteId });
  // };

  return (
    <AppProviders>
      <div className="container">
        <NotesHeader
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
        <NoteApp sortBy={sortBy} />
      </div>
    </AppProviders>
  );
}

export default App;
