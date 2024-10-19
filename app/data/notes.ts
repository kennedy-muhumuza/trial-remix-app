import fs from "fs/promises";
import { NotesProps } from "~/components/NewNote";

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile("notesData.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data.notesData ?? [];
  return storedNotes;
}

export function storedNotes(notes: NotesProps) {
  console.log("fs write to notes json log");
  return fs.writeFile(
    "notesData.json",
    JSON.stringify({ notesData: notes || [] })
  );
}
