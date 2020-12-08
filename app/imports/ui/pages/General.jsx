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
              Here is some general knowledge regarding the COVID-19 pandemic, including COVID-19 symptoms as well as ways to spread and prevent COVID-19.
            </p>
            <Header as='h2' inverted>Symptoms</Header>
            <p>
              COVID-19 is a respiratory illness caused by the coronavirus (SARS-CoV-2), and is highly
              contagious. People who have
              COVID-19 may experience symptoms such as fever and chills, cough, SOB (shortness of breath),
              fatigue, muscle soreness and many more flu-like symptoms. People who have
              the virus may have mild to severe symptoms. There are also cases of people who have contracted the virus,
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
            <p>Anyone around the world can experience these symptoms, therefore no one is immune to COVID-19. Older
              adults and other individuals who have pre-existing or severe underlying medical conditions (Ex: heart
              disease, diabetes, etc.) are at a higher risk of catching COVID-19.</p>
            <Header as='h2' inverted>Spread</Header>
            <p>
              You can get COVID-19 by being in close contact with someone who is infected (close contact
              is defined as about 6 feet, or two arm lengths). It spreads by respiratory droplets when an infected
              person
              coughs, sneezes, or talks. You may also contract the virus by touch. Touching a surface or object that has
              virus on it and then touching your eyes, nose, or mouth can also spread the virus.
            </p>
            <Header as='h3' inverted><i>What if?</i></Header>
            <ul>
              <p>
                If you are experiencing any of the symptoms mentioned above, there is a possibility you have COVID-19.
                Most people experience mild symptoms and are able to recover at home. If you think you are exposed to
                the
                virus, contact your healthcare provider and keep track of your symptoms. If it is an emergency warning
                sign, get emergency medicare immediately if you are experiencing:
              </p>
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
              as well. Choose a mask that has at least two layers of washable, breathable fabric that comfortably fits
              against the sides of your face and covers your nose and mouth. Always make sure to disinfect your work
              space and other surfaces often, and always wash your hands with soap and water for at least 20 seconds. If
              you do not have any access with soap and water, use hand sanitizer that contains at least 60% alcohol.
            </p>
            <p>
              If you are taking care of someone you know who has contracted the virus, do your best to support them by:
            </p>
            <Header as='h3' inverted><i>Helping cover necessities</i></Header>
            <ul>
              <li>Help the sick person by following the doctor&apos;s instructions for care and medicine if necessary
              </li>
              <li>See if over-the-counter medicine reduces fever</li>
              <li>Get plenty of rest</li>
              <li>Drink plenty of fluids</li>
              <li>Help out with groceries, prescriptions, and other forms of aid</li>
              <li>Take care of their pet(s) and limit contact between the sick person and their pet(s) if necessary</li>
            </ul>
            <Header as='h3' inverted><i>Being aware of warning signs</i></Header>
            <ul>
              <li>Have their doctor&apos;s phone number on hand</li>
              <li>Call their doctor if condition worsens</li>
              <li>Seek medical care if necessary</li>
            </ul>
            <Header as='h2' inverted>Combatting Stress during COVID</Header>
            <p>Although we are in a tough time during this pandemic, there are ways to relieve your stress.  Some of them include:</p>
            <ul>
              <li>Yoga</li>
              <li>Reading</li>
              <li>Gardening</li>
              <li>Eating/exploring new foods</li>
              <li>Finding ways to keep in touch with family/friends</li>
              <li>Developing new hobbies</li>
            </ul>
            <p>If a hobby involves going outside, do it in moderation and stay safe!</p>
            <Header as='h5' textAlign='center' inverted>
              This information was gathered and collected by the Centers for Disease Control and Prevention (CDC).
            </Header>
          </Container>
        </div>
    );
  }
}
