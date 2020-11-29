import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ReviewItemAdmin extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.review.rating}</Table.Cell>
          <Table.Cell>{this.props.review.howHelpfulWasCece}</Table.Cell>
          <Table.Cell>{this.props.review.wouldYouRecommendCece}</Table.Cell>
          <Table.Cell>{this.props.review.whatCanBeImproved}</Table.Cell>
          <Table.Cell>{this.props.review.finalThoughts}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ReviewItemAdmin.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewItemAdmin;
