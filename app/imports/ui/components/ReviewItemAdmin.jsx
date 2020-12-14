import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Reviews } from '../../api/review/Reviews';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the Analytics table. See pages/Analytics.jsx. */
class ReviewItemAdmin extends React.Component {
  removeItem(docID) {
    console.log(`item to delete is: ${docID}`);
    this.props.Reviews.collection.remove(docID);
  }
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.review.rating}</Table.Cell>
          <Table.Cell>{this.props.review.howHelpfulWasCece}</Table.Cell>
          <Table.Cell>{this.props.review.wouldYouRecommendCece}</Table.Cell>
          <Table.Cell>{this.props.review.whatCanBeImproved}</Table.Cell>
          <Table.Cell>{this.props.review.finalThoughts}</Table.Cell>
          <Table.Cell>
            <Button icon onClick={() => this.removeItem(this.props.review._id)}>
              <Icon name = "trash" />
            </Button>
            </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ReviewItemAdmin.propTypes = {
  review: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Reviews.adminPublicationName);
  return {
    reviews: Reviews.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ReviewItemAdmin);
