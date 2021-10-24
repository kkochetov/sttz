import BookingPage from '../pageobjects/booking.page';
import CalendarPage from '../pageobjects/calendar.page';
import ModalPage from '../pageobjects/modal.page';
import GuestsPage from '../pageobjects/guests.page';
import ResultPage from '../pageobjects/result.page';

describe('Booking.com search result', () => {
    it('should have result with described parameters', async () => {
        await BookingPage.open();

        await BookingPage.acceptCookiesButton.click();

        //Currancy
        await BookingPage.currencyButton.click();
        await ModalPage.getElementNoModal('EUR').click();

        //Language
        await BookingPage.languageButton.click();
        await ModalPage.getElementNoModal('English (US)').click();

        //Destination
        await BookingPage.destinationInput.setValue('Saint Petersburg')

        //Calendar    
        await BookingPage.calendarButton.click();
        await CalendarPage.pickLastDayOfCurrentMonth();
        await CalendarPage.pickFirstDayOfNextMonth();

        //Guests
        await BookingPage.guestsButton.click();
        await GuestsPage.removeAdult();
        await GuestsPage.addKid();
        await GuestsPage.setKidsAge(5);
        await GuestsPage.addRoom();

        await BookingPage.purposeCheckbox.click();
        await BookingPage.searchButton.click();

        var resultIndex = await ResultPage.getResult(8.0, 50);
        expect(resultIndex).toBeGreaterThan(-1)
    });
});

