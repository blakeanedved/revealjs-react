import React from 'react';
import { MakeFullProps } from "./BaseComponent";

export type NoteProps = MakeFullProps<'aside'>;

function Note(props: NoteProps) {
  return <aside {...props} className="notes" />;
}

export default Note;
