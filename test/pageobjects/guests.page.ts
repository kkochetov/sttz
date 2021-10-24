class GuestsPage {

    get kidAgeSelector() { return $('select[name="age"]') }

    addAdult() { $$('div.sb-group__field.sb-group__field-adults button')[1].click() }
    removeAdult() { $$('div.sb-group__field.sb-group__field-adults button')[0].click() }

    addKid() { $$('div.sb-group__field.sb-group-children button')[1].click() }
    removeKid() { $$('div.sb-group__field.sb-group-children button')[0].click() }

    addRoom() { $$('div.sb-group__field.sb-group__field-rooms button')[1].click() }
    removeRoom() { $$('div.sb-group__field.sb-group__field-rooms button')[0].click() }

    async setKidsAge(age: number) {
        await this.kidAgeSelector.selectByIndex(age + 1);
    }

}

export default new GuestsPage();