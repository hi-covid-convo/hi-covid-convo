import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table, Grid, Label, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    const marginTop = {
      marginTop: '-40px',
    };
    return (
        <div className="spacing" id="analytics-page">
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
                  <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.props.reviews.map((review) => <ReviewItemAdmin key={review._id} review={review}/>)}
              </Table.Body>
            </Table>
            <Container>
            <Button className="ui primary button" id="edit" as={Link} to='/editAnalytics/:_id'>
              Edit Analytics
            </Button>
            </Container>
          </Container>
          <Container as = "h4">
            <Grid columns={3} divided stackable>
              <Grid.Row>
                <Grid.Column>
                  <Header as="h2" textAlign="center" inverted>Rating</Header>
                  <PieChart
                      center={[55, 50]}
                      data={[
                        { title: 'Excellent', value: _.size(_.filter(this.props.reviews, function (feedback) { return feedback.rating === 'excellent'; })), color: '#3ebfb2' },
                        { title: 'Good', value: _.size(_.filter(this.props.reviews, function (feedback) { return feedback.rating === 'good'; })), color: '#0077b6' },
                        { title: 'Fair', value: _.size(_.filter(this.props.reviews, function (feedback) { return feedback.rating === 'fair'; })), color: '#1a535c' },
                        { title: 'Poor', value: _.size(_.filter(this.props.reviews, function (feedback) { return feedback.rating === 'poor'; })), color: '#012a4a' },
                      ]}
                      labelStyle={{
                        fontSize: '11px',
                        fill: '#ffffff',
                        fontWeight: '800',
                      }}
                      labelPosition={60}
                      paddingAngle={0}
                      radius={50}
                      viewBoxSize={[112.5, 112.5]}
                      // label={({ dataEntry }) => dataEntry.value}
                      label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                  />
                  <Container as ="LabelsCenter" style={marginTop}>
                    <Label as='legend1'>
                      Excellent
                    </Label>
                    <Label as='legend2' centered>
                      Good
                    </Label>
                    <Label as='legend3' centered>
                      Fair
                    </Label>
                    <Label as ='legend4' centered>
                      Poor
                    </Label>
                  </Container>
                </Grid.Column>
                <Grid.Column>
                  <Header as="h2" textAlign="center" inverted>How Helpful</Header>
                  <PieChart
                      center={[55, 50]}
                      data={[
                        { title: 'Very Helpful', value: _.size(_.filter(this.props.reviews, function (feedback) { return feedback.howHelpfulWasCece === 'Very helpful'; })), color: '#3ebfb2' },
                        { title: 'Somewhat Helpful', value: _.size(_.filter(this.props.reviews, function (feedback) { return feedback.howHelpfulWasCece === 'Somewhat helpful'; })), color: '#0077b6' },
                        { title: 'Not Very Helpful', value: _.size(_.filter(this.props.reviews, function (feedback) { return feedback.howHelpfulWasCece === 'Not very helpful'; })), color: '#1a535c' },
                        // eslint-disable-next-line max-len
                        { title: 'Not Helpful at All', value: _.size(_.filter(this.props.reviews, function (feedback) { return feedback.howHelpfulWasCece === 'Not helpful at all'; })), color: '#012a4a' },
                      ]}
                      labelStyle={{
                        fontSize: '11px',
                        fill: '#ffffff',
                        fontWeight: '800',
                      }}
                      labelPosition={60}
                      paddingAngle={0}
                      radius={50}
                      viewBoxSize={[112.5, 112.5]}
                      // label={({ dataEntry }) => dataEntry.value}
                      label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                  />
                  <Container as ="LabelsCenter" style={marginTop}>
                    <Label as='legend1'>
                      Very
                    </Label>
                    <Label as='legend2' centered>
                      Somewhat
                    </Label>
                    <Label as='legend3' centered>
                      Not Very
                    </Label>
                    <Label as ='legend4' centered>
                      Not at All
                    </Label>
                  </Container>
                </Grid.Column>
                <Grid.Column>
                  <Header as="h2" textAlign="center" inverted>Recommend</Header>
                  <PieChart
                      center={[55, 50]}
                      data={[
                        { title: 'Yes', value: _.size(_.filter(this.props.reviews, function (feedback) { return feedback.wouldYouRecommendCece === 'Yes'; })), color: '#3ebfb2' },
                        { title: 'No', value: _.size(_.filter(this.props.reviews, function (feedback) { return feedback.wouldYouRecommendCece === 'No'; })), color: '#0077b6' },
                      ]}
                      labelStyle={{
                        fontSize: '11px',
                        fill: '#ffffff',
                        fontWeight: '800',
                      }}
                      labelPosition={60}
                      paddingAngle={0}
                      radius={50}
                      viewBoxSize={[112.5, 112.5]}
                      // label={({ dataEntry }) => dataEntry.value}
                      label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                  />
                  <Container as ="LabelsCenter" style={marginTop}>
                    <Label as='legend1'>
                      Yes
                    </Label>
                    <Label as='legend2' centered>
                      No
                    </Label>
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
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
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Reviews.userPublicationName);
  return {
    doc: Reviews.collection.findOne(documentId),
    ready: subscription.ready(),
  };
})(Analytics);
