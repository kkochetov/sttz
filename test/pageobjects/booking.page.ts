class BookingPage {

    get acceptCookiesButton() { return $('#onetrust-accept-btn-handler') }
    get currencyButton() { return $$('button.bui-button.bui-button--light.bui-button--large')[0] }
    get languageButton() { return $('button[data-modal-id="language-selection"]') }
    get destinationInput() { return $('label.sb-destination-label-sr input') }
    get calendarButton() { return $$('div.sb-date-field.b-datepicker')[0] }
    get guestsButton() { return $('.xp__input-group.xp__guests') }
    get purposeCheckbox() { return $('div.xp__travel-purpose label') }
    get searchButton() { return $('div.xp__button button') }

    open() {

        return browser.url(browser.options.baseUrl)
    }
}

export default new BookingPage();