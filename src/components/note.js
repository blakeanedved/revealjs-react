import React from 'react';

function Note({ children }) {
  return <aside className="notes">{children}</aside>;
}

export default Note;
