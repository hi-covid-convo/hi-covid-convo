import { Selector } from 'testcafe';

class FeedbackPage {
  constructor() {
    this.pageId = '#feedback-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Fills out and submits a survey form */
  async fillSurvey(testController) {
    await this.isDisplayed(testController);
    const ratingSelect = Selector('#ratingField');
    await testController.click(ratingSelect);
    await testController.click(ratingSelect.find('option').withText('excellent'));
    await testController
        .click(Selector('label').withText('Very helpful'))
        .click(Selector('label').withText('Yes'));
    await testController.typeText(Selector('#improveField'), 'No comment');
    await testController.typeText(Selector('#thoughtField'), 'Thanks for the help. I hope more people use this app');
    await testController.click(Selector('#submitSurvey'));
    await testController.wait(1000);
    await testController.click(Selector('button').withText('OK'));
    await testController.wait(1000);
  }
}

export const feedbackPage = new FeedbackPage();
