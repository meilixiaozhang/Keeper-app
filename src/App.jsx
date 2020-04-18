import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./notes";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
