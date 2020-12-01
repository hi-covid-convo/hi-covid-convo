import React from 'react';
import { Header, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const red = {
      backgroundColor: '#181a0c',
      color: '#fff',
    };
    return (
        <div className='middlepage'>
          <Container text textAlign='center'>
            <div></div>
            <Header as='h1' inverted>Welcome to Covid Convo</Header>
            <p className='landingText'>Our goal is simple, to provide an easy-to-use chatbot for those concerned with
              COVID-19. Whether
              it&apos;s
              directly answering user&apos;s questions or redirecting them to useful resources. You can ask our chat-bot
              Cece a question by clicking on the button below, or if you want to know more about our mission, see the
              About page.</p>
            <hr/>
            <div className='spacing'>
              <Button circular style={red} icon='chat' as={Link} to='/Cece' size='huge'>
              </Button>
              <Header as='h4' inverted >Ask Cece!</Header>
              <div></div>
            </div>
          </Container>
        </div>
    );
  }
}

export default Landing;
