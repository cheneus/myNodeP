console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const optArg =  {
    title: {
      describe : 'Title of the note',
      demand : true,
      alias: 't'
    },
    body: {
      describe: 'Title of the note',
      demand: true,
      alias: 'b'
    }
}  

const argv = yargs
// http://yargs.js.org/docs/#api-commandcmd-desc-builder-handler
  .command('add' , 'add a title and a body', {
    // tell you what u need to complete the command
    title: optArg.title,
    body: optArg.body
  })
  .command('list', 'list all notes')
  .command('read', 'read an individual note', {
    title: optArg.title
  })
  .command('remove', 'remove a note', {
     title: optArg.title
  })
  .help()
  .argv;

var command = argv._[0];

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