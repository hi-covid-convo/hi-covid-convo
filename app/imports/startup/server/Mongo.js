import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Reviews } from '../../api/review/Reviews.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

function addReview(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Reviews.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

  if (Reviews.collection.find().count() === 0) {
    if (Meteor.settings.defaultData) {
      console.log('Creating default feedback data.');
      Meteor.settings.defaultFeedback.map(data => addReview(data));
    }
}

/** Test for Chatbot */
