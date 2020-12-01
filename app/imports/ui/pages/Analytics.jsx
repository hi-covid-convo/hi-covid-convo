import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Reviews } from '../../api/review/Reviews';
import ReviewItemAdmin from '../components/ReviewItemAdmin';

/** Renders the statistics of the application and the reviews on the chat-bot */
class Analytics extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const ratingExcell = _.size(_.filter(this.props.reviews, function (feedback) { return feedback.rating === 'excellent'; }));
    const ratingGood = _.size(_.filter(this.props.reviews, function (feedback) { return feedback.rating === 'good'; }));
    const ratingFair = _.size(_.filter(this.props.reviews, function (feedback) { return feedback.rating === 'fair'; }));
    const ratingPoor = _.size(_.filter(this.props.reviews, function (feedback) { return feedback.rating === 'poor'; }));
    return (
        <div className="spacing">
          <Container>
            <Header as="h2" textAlign="center" inverted>Analytics</Header>
            <Header as="h3" textAlign="center" inverted>Below displays analytical data of the Cece Chatbot</Header>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>How Satisfied Were You?</Table.HeaderCell>
                  <Table.HeaderCell>How Helpful was Cece?</Table.HeaderCell>
                  <Table.HeaderCell>Would you recommend Cece?</Table.HeaderCell>
                  <Table.HeaderCell>What Can Be Improved?</Table.HeaderCell>
                  <Table.HeaderCell>Final Thoughts?</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.props.reviews.map((review) => <ReviewItemAdmin key={review._id} review={review}/>)}
              </Table.Body>
            </Table>
          </Container>
          <Container>
            <PieChart
                center={[50, 50]}
                data={[
                  { title: 'Excellent', value: ratingExcell, color: '#E38627' },
                  { title: 'Good', value: ratingGood, color: '#C13C37' },
                  { title: 'Fair', value: ratingFair, color: '#6A2135' },
                  { title: 'Poor', value: ratingPoor, color: '#f84211' },
                ]}
                labelPosition={60}
                paddingAngle={0}
                radius={50}
                viewBoxSize={[300, 300]}
                label={({ dataEntry }) => dataEntry.value}
                // label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
            />;
          </Container>
        </div>
    );
  }
}

/** Require an array of Statistics documents in the props. */
Analytics.propTypes = {
  reviews: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Reviews.adminPublicationName);
  return {
    reviews: Reviews.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Analytics);
