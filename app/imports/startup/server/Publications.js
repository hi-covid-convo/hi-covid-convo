import { Meteor } from 'meteor/meteor';
import { Reviews } from '../../api/review/Reviews';

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise publish nothing.
Meteor.publish(Reviews.userPublicationName, function () {
  if (this.userId) {
    return Reviews.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
