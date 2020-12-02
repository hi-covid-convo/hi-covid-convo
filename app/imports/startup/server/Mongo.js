import { Meteor } from 'meteor/meteor';
import { Reviews } from '../../api/review/Reviews.js';

/* eslint-disable no-console */

/** Initialize the database with a default review/feedback document. */
function addReview(data) {
  console.log('  Adding: data (user not required)');
  Reviews.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Reviews.collection.find().count() === 0) {
  if (Meteor.settings.defaultReviews) {
    console.log('Creating default feedback data.');
    Meteor.settings.defaultReviews.map(data => addReview(data));
  }
}

if (Reviews.collection.find().count() === 0) {
  if (Meteor.settings.defaultFeedback) {
    console.log('Creating default feedback data.');
    Meteor.settings.defaultFeedback.map(data => addReview(data));
  }
}

/** Test for Chatbot */
