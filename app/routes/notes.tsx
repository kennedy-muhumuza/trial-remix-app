import React from "react";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import newNoteStyles from "~/components/NewNote.css";
import { getStoredNotes } from "~/data/notes";

const NotesPage = () => {
  return (
    <main>
      <NewNote />
    </main>
  );
};

export default NotesPage;

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  // Add Validation...
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
}

export function links() {
  return [...newNoteLinks()];
}
