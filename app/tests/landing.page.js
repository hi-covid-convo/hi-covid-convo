import { Selector } from 'testcafe';

class LandingPage {
  constructor() {
    this.pageId = '#landing-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.wait(15000).expect(this.pageSelector.exists).ok();
  }

  async gotoCece(testController) {
    await testController.click('#chatbot');
  }
}

export const landingPage = new LandingPage();
