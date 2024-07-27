import { useContext, useReducer } from "react";
import { createContext } from "react";

const NotesContext = createContext(null);
const NotesDispachContext = createContext(null);

function notesReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.payload];
    }
    case "delete": {
      return state.filter((s) => s.id !== action.payload);
    }
    case "complete": {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unknown error" + action.type);
  }
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispachContext.Provider value={dispatch}>
        {children}
      </NotesDispachContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}
export function useNotesDispatch() {
  return useContext(NotesDispachContext);
}
