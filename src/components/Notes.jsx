import React from "react";

export const Notes = ({ notes }) => {
  return (
    <ul className="list-group">
      {notes.map((note) => (
        <li className="list-group-item note" key={note.id}>
          {note.title}
          <button type="button" class="btn btn-outline-danger btn-sm">
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
