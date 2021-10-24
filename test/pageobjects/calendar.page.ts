class CalendarPage {

    get currentMonthDays() { return $$('table.bui-calendar__dates')[0].$$('td[class="bui-calendar__date"]') }
    get nextMonthDays() { return $$('table.bui-calendar__dates')[1].$$('td[class="bui-calendar__date"]') }

    async pickLastDayOfCurrentMonth() {
        let currentMonthDays = await this.currentMonthDays;
        await currentMonthDays[currentMonthDays.length - 1].click();
    }

    async pickFirstDayOfNextMonth() {
        await this.nextMonthDays[0].click();
    }

}

export default new CalendarPage();