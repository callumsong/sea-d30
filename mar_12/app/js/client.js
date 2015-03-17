'use strict';

var React = require('react'),
    Fluxxor = require('fluxxor'),
    NoteStore = require('./stores/note_stores'),
    actions = require('./actions/note_actions'),
    NotesApp = require('./components/note_app');

var stores = {
  NoteStore: new NoteStore()
};

var flux = new Fluxxor.Flux(stores, actions);

React.render(<NotesApp flux={flux}/>, document.body);