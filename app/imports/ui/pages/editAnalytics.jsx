import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Reviews } from '../../api/review/Reviews';
import ReviewItemAdmin from '../components/ReviewItemAdmin';

/** Renders the statistics of the application and the reviews on the chat-bot */
class editAnalytics extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="spacing" id="/editAnalytics/:_id">
          <Container>
            <Header as="h2" textAlign="center" inverted>Analytics</Header>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Header as="h3" textAlign="center" inverted>You're currently editing the analytical data</Header>
            <Table celled selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>How Satisfied Were You?</Table.HeaderCell>
                  <Table.HeaderCell>How Helpful was Cece?</Table.HeaderCell>
                  <Table.HeaderCell>Would you recommend Cece?</Table.HeaderCell>
                  <Table.HeaderCell>What Can Be Improved?</Table.HeaderCell>
                  <Table.HeaderCell>Final Thoughts?</Table.HeaderCell>
                  <Table.HeaderCell>Remove</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.props.reviews.map((review) => <ReviewItemAdmin key={review._id} review={review}/>)}
              </Table.Body>
            </Table>
          </Container>
        </div>
    );
  }
}

/** Require an array of Statistics documents in the props. */
editAnalytics.propTypes = {
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Reviews.userPublicationName);
  return {
    doc: Reviews.collection.findOne(documentId),
    ready: subscription.ready(),
  };
})(editAnalytics);
