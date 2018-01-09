console.log('starting notes.js');
const fs = require('fs');

var logNote = (note) => {
    console.log(`title : ${note.title}`)
    console.log(`body: ${note.body}`)
    console.log(`---------------------`)
}

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  // console.log('adding note', title, body)
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);
  console.log(duplicateNotes)
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  var notes = fetchNotes()
  return notes
  // console.log(notes)
}
var removeNote = (title) => {
  // console.log('removing note', title)
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes)
  return notes.length !== filteredNotes.length;
}
var getNote = (title) => {
  console.log('reading', title)
  var notes =  fetchNotes()
  var notesFilter =  notes.filter((note) => note.title === title);
  return notesFilter[0]
}
module.exports = {
  // same as addNote: addNote in ES6
  addNote,
  getAll,
  removeNote,
  getNote,
  logNote
}