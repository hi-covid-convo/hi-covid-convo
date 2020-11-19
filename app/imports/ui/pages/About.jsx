import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export default class About extends React.Component {
  render() {
    return (
        <Container text>
          <Header as='h1' textAlign='center'>About Covid Convo</Header>
          <p>Hi-Covid-Convo was made to improve the customer experience while providing easy navigation and providing
            useful and helpful resources for Hawaii.
          </p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </Container>
    );
  }
}
