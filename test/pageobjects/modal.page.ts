class ModalPage {

    getElementNoModal(text: string) {
        return $(`//div[contains(text(),"${text}")]`)
    }
}

export default new ModalPage();