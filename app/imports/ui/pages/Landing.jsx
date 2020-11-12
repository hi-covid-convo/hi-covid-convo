import React from 'react';
import { Header, Container, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Container text textAlign='center'>
          <Header as='h1' size='huge'>Welcome to Covid-Convo</Header>
          <p>Our goal is simple, to provide an easy-to-use chatbot for those concerned with COVID-19. Whether it&apos;s
            directly answering user&apos;s questions or redirecting them to useful resources.</p>
          <hr/>
          <Header as='h2' icon textAlign='center'>
            <Icon name='chat' />
            <Header.Content>Ask Cece!</Header.Content>
          </Header>
        </Container>
    );
  }
}

export default Landing;
