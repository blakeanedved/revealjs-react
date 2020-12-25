import React from 'react';

function Note({ children }: { children: React.ReactNode }) {
  return <aside className="notes">{children}</aside>;
}

export default Note;
