import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';
import StuffItemAdmin from '../components/StuffItemAdmin';

/** Renders the statistics of the application and the reviews on the chat-bot */
class Statistics extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Statistics</Header>
          <Header as="h3" textAlign="center">Below are the stats of the Cece Chatbot</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Very Satisfied</Table.HeaderCell>
                <Table.HeaderCell>Satisfied</Table.HeaderCell>
                <Table.HeaderCell>Unsatisfied</Table.HeaderCell>
                <Table.HeaderCell>Very Unsatisfied</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.stuffs.map((stuff) => <StuffItemAdmin key={stuff._id} stuff={stuff}/>)}
            </Table.Body>
          </Table>

          <Header as="h3" textAlign="center">Did Cece Help?</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Yes</Table.HeaderCell>
                <Table.HeaderCell>No</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
        </Container>

    );
  }
}

/** Require an array of Statistics documents in the props. */
Statistics.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Stuffs.adminPublicationName);
  return {
    stuffs: Stuffs.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Statistics);
