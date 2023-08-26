import { useState, useEffect } from "react";

import { Flex } from "@chakra-ui/react";

import styles from "./styles.module.css";

import html_notes from "@/src/constants/html_notes_imports";
//import css_notes from "../../constants/css_notes_imports";
//import single_items from "../../constants/single_items_imports";

//const allNotesOptions = ["html", "css", "components"];

const allNotesOptions = ["html"];

const notesByOption: any = {
  html: html_notes,
  //css: css_notes,
  //components: single_items,
};

function AllNotes() {
  /* NOTES OPTIONS */
  const [notesOption, setNotesOption] = useState(allNotesOptions[0]);

  /* NOTES LIST */
  const [notesList, setNotesList] = useState(html_notes);

  /* CURRENT NOTE */
  const [currentNote, setCurrentNote] = useState(notesList[0]);

  /* UPDATE NOTES LIST */
  useEffect(() => {
    const list = notesByOption[notesOption];
    setNotesList(list);
    setCurrentNote(list[0]);
  }, [notesOption]);

  const handleClick = (note: any) => {
    setCurrentNote(note);
  };

  return (
    <Flex className={styles.mainNotes}>
      <section className={styles.allNotes}>
        {/* OPTIONS  */}
        <ul className={styles.notesOptions}>
          {allNotesOptions.map((option, index) => {
            return (
              <li
                key={index}
                className={
                  option === notesOption
                    ? styles.noteOptionSelected
                    : styles.noteOption
                }
                onClick={() => setNotesOption(option)}
              >
                {option}
              </li>
            );
          })}
        </ul>

        {/* NOTES LIST */}
        <ul className={styles.notesList}>
          {notesList.map((note, index) => {
            return (
              <li
                key={index}
                onClick={() => handleClick(note)}
                className={
                  note.name === currentNote.name
                    ? styles.optionSelected
                    : styles.option
                }
              >
                {note.name}
              </li>
            );
          })}
        </ul>
      </section>

      <section className={styles.notesExample}>
        <currentNote.example />
      </section>
    </Flex>
  );
}
export default AllNotes;
