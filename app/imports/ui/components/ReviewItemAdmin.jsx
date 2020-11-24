import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ReviewItemAdmin extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.stuff.rating}</Table.Cell>
          <Table.Cell>{this.props.stuff.howHelpfulWasCece}</Table.Cell>
          <Table.Cell>{this.props.stuff.whatCanBeImproved}</Table.Cell>
          <Table.Cell>{this.props.stuff.finalThoughts}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ReviewItemAdmin.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewItemAdmin;
