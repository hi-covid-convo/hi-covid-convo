import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Encapsulates state and variable values for this collection. */
class ReviewsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ReviewsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      rating: {
        type: String,
        allowedValues: ['excellent', 'good', 'fair', 'poor'],
        defaultValue: 'good',
      },
      howHelpfulWasCece: {
        type: String,
        allowedValues: ['Very helpful', 'Somewhat helpful', 'Not very helpful', 'Not helpful at all'],
      },
      whatCanBeImproved: String,
      finalThoughts: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
 // this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const Reviews = new ReviewsCollection();
