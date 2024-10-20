import { Link, redirect, useActionData, useLoaderData } from "@remix-run/react";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import NoteList, { links as noteListLinks } from "~/components/NoteList";
import newNoteStyles from "~/components/NewNote.css";
import { getStoredNotes, storedNotes } from "~/data/notes";
// import { redirect } from "@remix-run/react";

const NotesPage = () => {
  const notes = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
};

export default NotesPage;

export const loader = async () => {
  const notes = await getStoredNotes();
  return notes;
};

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  // Add Validation...
  if (noteData.title.trim().length < 5) {
    return { message: "Invalid title - must be at least 5 characters long." };
  }

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storedNotes(updatedNotes);
  console.log("notes page store to notes json log");

  return redirect("/notes");
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}

export function ErrorBoundary({ error }: { error: string }) {
  return (
    <main className="error">
      <h1>An error related to notes occurred⛔</h1>
      <p>{error.message}</p>
      <p>
        Back to <Link to="/">Safety</Link>!
      </p>
    </main>
  );
}
