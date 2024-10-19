import React from "react";
import styles from "./NoteList.css";
import { NotesProps } from "./NewNote";

const NoteList: React.FC<NotesProps> = ({ notes }) => {
  return (
    <ul>
      {notes.map((note: NotesProps, index: number) => (
        <li key={note.id} className="note">
          <article>
            <header>
              <ul className="note-meta">
                <li>#{index + 1}</li>
                <li>
                  <time dateTime={note.id}>
                    {new Date(note.id).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </li>
              </ul>
              <h2>{note.title}</h2>
            </header>
            <p>{note.content}</p>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};
