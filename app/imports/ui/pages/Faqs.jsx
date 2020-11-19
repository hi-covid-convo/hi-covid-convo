import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export default class Faqs extends React.Component {
  render() {
    return (
        <Container text>
          <Header as='h1' textAlign='center'>COVID FAQs</Header>
          <p>Here are some frequently asked questions regarding COVID-19. If you cannot find the answers for your
            questions here, ask our chat-bot Cece!
          </p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </Container>
    );
  }
}
