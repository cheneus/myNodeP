console.log('starting app');

const _ = require('lodash')
const fs = require('fs');
const yargs = require('yargs')
const notes = require('./notes.js')

const argv = yargs.argv
var command = process.argv[2];

if (command === 'add') {
  // console.log("Adding new note")
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created")
    console.log("-------");
    notes.logNote(note)
  } else {
    console.log("Note title is taken")
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(allNotes)
  console.log(`getting ${allNotes.length}  notes`)
  allNotes.forEach((note) => {
    notes.logNote(note);
  })
} else if (command === 'read') {
  console.log('Reading')
  var note = notes.getNote(argv.title)
  if (note) {
    console.log("note found");
    notes.logNote(note)
  }
} else if (command === 'remove') {
  console.log('Removing')
  var noteRemoved = notes.removeNote(argv.title)
  console.log(noteRemoved)
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message)
} else {
  console.log("Command not found")
}
// if (command === '') {

// }