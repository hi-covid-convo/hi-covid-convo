import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export default class About extends React.Component {
  render() {
    return (
        <div className="spacing">
          <Container text>
            <Header as='h1' textAlign='center'>About Covid Convo</Header>
            <p>Hawaii Covid Convo was made to improve the customer experience while providing easy navigation and
              providing
              useful and helpful resources for Hawaii.
            </p>
            <p>We wanted to use a chat-bot interface to provide a friendlier and more personalized experience for the
              users. We know that many residents and tourists have a difficult time finding the appropriate resources
              when it comes to Covid-19 in the state of Hawaii. Our chat-bot Cece will provide an easier way to access
              the resources that people are looking for.
            </p>
            <p>Whether you are trying to find a location to get tested for COVID-19, or you want to just stay updated
              with
              the latest news on the virus, Cece will be able to assist anyone and their COVID-19 requests!
            </p>
          </Container>
        </div>
    );
  }
}
