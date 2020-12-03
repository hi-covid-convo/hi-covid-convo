import React from 'react';
import { Container, Header } from 'semantic-ui-react';

/** Renders the FAQs page. May change FAQs to general knowledge information page */
export default class General extends React.Component {
  render() {
    const white = { color: 'white' };
    return (
        <div className="spacing" id="general-page">
          <Container text style={white}>
            <Header as='h1' textAlign='center' inverted>COVID-19 General Knowledge</Header>
            <p>
              Here is some general knowledge regarding the COVID-19 pandemic, including prevention, how its spread, and
              symptoms.
            </p>
            <Header as='h2' inverted>Symptoms</Header>
            <p>
              COVID-19 is a respiratory illness caused by the coronavirus, and is highly contagious.
              People who have the COVID-19 virus may have symptoms such as, including fever and chills, cough,
              SOB (shortness of breath), fatigue, muscle soreness and many more flu-like symptoms. People who have
              the virus may have severe to mild symptoms. There are also cases of people who have contracted the virus,
              but are asymptomatic (do not have any reported symptoms). Other symptoms include:
            </p>
            <ul>
              <li>Headache</li>
              <li>New loss of taste/smell</li>
              <li>Sore throat</li>
              <li>Congestion/runny nose</li>
              <li>Nausea/vomiting</li>
              <li>Diarrhea</li>
            </ul>
            <Header as='h2' inverted>Spread</Header>
            <p>
              COVID-19 is highly contagious, and is spread by close contact with someone who is infected (close contact
              is defined as about 6 feet, or two arm lengths). It spreads by respiratory droplets when an infected
              person
              coughs, sneezes, or talks. You may also contract the virus by touch. Touching a surface or object that has
              virus on it and then touching your eyes, nose, or mouth can also spread the virus.
            </p>
            <Header as='h3' inverted>What if?</Header>
            <p>
              If you are experiencing any of the symptoms mentioned above, there is a possibility you have COVID-19.
              Most people experience mild symptoms and are able to recover at home. If you think you are exposed to the
              virus, contact your healthcare provider and keep track of your symptoms. If it is an emergency warning
              sign, get emergency medicare immediately if you are experiencing:
            </p>
            <ul>
              <li>Breathing problems</li>
              <li>Constant pain/pressure on the chest</li>
              <li>New confusion</li>
              <li>Inability to wake up or stay awake</li>
              <li>Blush lips or face</li>
            </ul>
            <Header as='h2' inverted>Prevention and Protection to Yourself or Others</Header>
            <p>As of now, there is currently no vaccine for the virus. The best way to protect yourself and others is to
              avoid being exposed to the virus. This means limiting yourself to leaving your home unless necessary. When
              you do leave your home, always be sure to wear a mask not only for the safety of yourself, but for others
              as well. Always make sure to disinfect your work space and other surfaces often, and always wash your
              hands
              with soap and water for at least 20 seconds.
            </p>
            <p>
              If you are taking care of someone you know who has contracted the virus, do your best to provide support:
            </p>
            <ul>
              <Header as='h3' inverted><i>Help cover necessities</i></Header>
              <li>Help the sick person by following the doctor&apos;s instructions for care and medicine if necessary</li>
              <li>See if over-the-counter medicine reduces fever</li>
              <li>Get plenty of rest</li>
              <li>Drink plenty of fluids</li>
              <li>Help out with groceries, prescriptions, and other forms of aid</li>
              <li>Take care of their pet(s) and limit contact between the sick person and their pet(s) if necessary</li>
            </ul>

            <ul>
              <Header as='h3' inverted><i>Be aware of warning signs</i></Header>
              <li>Have their doctor&apos;s phone number on hand</li>
              <li>Call their doctor if condition worsens</li>
              <li>Seek medical care if necessary</li>
            </ul>

            <Header as='h5' textAlign='center' inverted>
              This information was gathered by the collected by the Centers for Disease Control and Prevention (CDC).
            </Header>
          </Container>
        </div>
    );
  }
}
