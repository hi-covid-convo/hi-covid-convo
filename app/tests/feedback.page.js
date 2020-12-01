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

  /** Fills out and submits the form to signin, then checks to see that login was successful. */
  async fillSurvey(testController) {
    await this.isDisplayed(testController);
  }
}

export const feedbackPage = new FeedbackPage();
