import React from 'react';
import { Container, Header } from 'semantic-ui-react';

/** Renders the FAQs page. May change FAQs to general knowledge information page */
export default class General extends React.Component {
  render() {
    return (
        <div className="spacing">
          <Container text>
            <Header as='h1' textAlign='center'>COVID-19 General Knowledge</Header>
            <p>
              Here is some general knowledge regarding the COVID-19 pandemic, including prevention, how its spread, and
              symptoms.
            </p>
            <Header as='h2'>Symptoms</Header>
            <p>
              Covid-19 is a respiratory illness caused by the coronavirus, and is highly contagious.
              People who have the COVID-19 virus may have symptoms such as, including fever and chills, cough,
              SOB (shortness of breath), fatigue, muscle soreness and many more flu-like symptoms. People who have
              the virus may have severe to mild symptoms. There are also cases of people who have contracted the virus,
              but are asymptomatic (do not have any reported symptoms)
            </p>
            <Header as='h2'>Spread</Header>
            <p>
              COVID-19 is highly contagious, and is spread by close contact with someone who is infected (close contact
              is defined as about 6 feet, or two arm lengths). It spreads by respiratory droplets when an infected
              person
              coughs, sneezes, or talks. You may also contract the virus by touch. Touching a surface or object that has
              virus on it and then touching your eyes, nose, or mouth can also spread the virus.
            </p>
            <Header as='h2'>Prevention and Protection</Header>
            <p>As of now, there is currently no vaccine for the virus. The best way to protect yourself and others is to
              avoid being exposed to the virus. This means limiting yourself to leaving your home unless necessary. When
              you do leave your home, always be sure to wear a mask not only for the safety of yourself, but for others
              as well. Always make sure to disinfect your work space and other surfaces often, and always wash your
              hands
              with soap and water for at least 20 seconds.
            </p>

            <Header as='h5' textAlign='center'>
              This information was gathered by the collected by the Centers for Disease Control and Prevention (CDC).
            </Header>
          </Container>
        </div>
    );
  }
}
