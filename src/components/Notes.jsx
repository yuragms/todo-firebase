import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase/firebaseContect";
import { AlertContext } from "../context/alert/alertContext";

export const Notes = ({ notes }) => {
  const { removeNote } = useContext(FirebaseContext);
  const alert = useContext(AlertContext);

  const removeHandler = (id) => {
    removeNote(id)
      .then(() => {
        alert.show("Заметка была удалена", "success");
      })
      .catch(() => {
        alert.show("Что-то пошло не так", "danger");
      });
  };

  return (
    <ul className="list-group">
      {notes.map((note) => (
        <li className="list-group-item note" key={note.id}>
          <div>
            <strong>{note.title}</strong>
            <small>{note.date}</small>
          </div>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => removeHandler(note.id)}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
