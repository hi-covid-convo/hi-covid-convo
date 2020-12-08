import React from 'react';
import { Container, Header, Card, Icon, Image, Grid } from 'semantic-ui-react';

export default class About extends React.Component {
  render() {
    const white = { color: 'white' };
    return (
        <div className="spacing" id="about-page">
          <Container text style={white}>
            <Header as='h1' textAlign='center' inverted>About Covid Convo</Header>
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
          <Container as='h4' text style={white}>
            <Header as='h1' textAlign='center' inverted>Development Team</Header>
          </Container>
          <Container as='h4'>
            <Grid columns={4} divided stackable>
              <Grid.Row>
                <Grid.Column><Card>
                  <Image src='https://glarita.github.io/images/GlenLarita.jpg' wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>Glen Larita</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <a href='http://github.com/glarita' target='_blank' rel='noreferrer'>
                      <Icon name='github'/>
                    </a>
                  </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image src='https://sydempsey.github.io/images/sydz_good.jpg' wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Sydney Dempsey</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                      <a href='https://github.com/sydempsey' target='_blank' rel='noreferrer'>
                        <Icon name='github'/>
                      </a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image src='https://duhkneelow.github.io/images/me.JPG' wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Daniel Nilo</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                      <a href='https://github.com/duhkneelow' target='_blank' rel='noreferrer'>
                        <Icon name='github'/>
                      </a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Image src='https://ba-bbage.github.io/images/Profile_Pic_Face.jpg' wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>Brian Raymund Abad</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                      <a href='https://github.com/BA-bbage' target='_blank' rel='noreferrer'>
                        <Icon name='github'/>
                      </a>
                    </Card.Content>
                  </Card></Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}
