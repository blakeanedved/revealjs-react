import React from 'react';

export interface NoteProps {
  children: React.ReactNode;
}

function Note({ children }: NoteProps) {
  return <aside className="notes">{children}</aside>;
}

export default Note;
