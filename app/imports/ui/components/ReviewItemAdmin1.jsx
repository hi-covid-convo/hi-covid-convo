import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Reviews } from '../../api/review/Reviews';

/** Renders a single row in the Analytics table. See pages/Analytics.jsx. */
class ReviewItemAdmin extends React.Component {
  removeItem(docID) {
    console.log(`item to delete is: ${docID}`);
    Reviews.collection.remove(docID);
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
  Reviews: PropTypes.object.isRequired,
};

export default ReviewItemAdmin;
