import React from 'react';
import { Header, Container, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='middlepage'>
          <Container text textAlign='center'>
            <Header as='h1' size='huge'>Welcome to Covid-Convo</Header>
            <p>Our goal is simple, to provide an easy-to-use chatbot for those concerned with COVID-19. Whether
              it&apos;s
              directly answering user&apos;s questions or redirecting them to useful resources.</p>
            <hr/>
            <Header as='h2' icon textAlign='center'>
              <Icon name='chat'/>
            <Button as={Link} to='/Cece'>
              <Header.Content>Ask Cece!</Header.Content>
            </Button>
            </Header>
          </Container>
        </div>
    );
  }
}

export default Landing;
