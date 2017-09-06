import { browser, by, element } from 'protractor';

export class RealTimeParkingBookingSystemPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
