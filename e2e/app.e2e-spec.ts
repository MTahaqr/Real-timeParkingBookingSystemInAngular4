import { RealTimeParkingBookingSystemPage } from './app.po';

describe('real-time-parking-booking-system App', () => {
  let page: RealTimeParkingBookingSystemPage;

  beforeEach(() => {
    page = new RealTimeParkingBookingSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
