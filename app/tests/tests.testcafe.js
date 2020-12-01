import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { analyticsPage } from './analytics.page';
import { aboutPage } from './about.page';
import { generalPage } from './general.page';
import { cecePage } from './cece.page';
import { feedbackPage } from './feedback.page';
import { navBar } from './navbar.component';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
    .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that about and general pages work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoAboutPage(testController);
  await aboutPage.isDisplayed(testController);
  await navBar.gotoGeneralPage(testController);
  await generalPage.isDisplayed(testController);
});

test('Test that Analytics work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoAnalyticsPage(testController);
  await analyticsPage.isDisplayed(testController);
});

test('Test that Cece chatbot page shows up', async (testController) => {
  await landingPage.gotoCece(testController);
  await cecePage.isDisplayed(testController);
});

test('Test that Feedback page works', async (testController) => {
  await landingPage.gotoCece(testController);
  await cecePage.gotoFeedback(testController);
  await feedbackPage.fillSurvey(testController);
});
