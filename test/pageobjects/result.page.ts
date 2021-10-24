class ResultPage {

    get searchResults() { return $$('div[data-testid="property-card"]') }

    async getResult(expectedRank: number, expectedCost: number) {
        var res = await this.searchResults;

        for (var i = 0; i < res.length; i++) {
            var itemRank = await res[i].$$('div[data-testid="review-score"] div')[0].getText();
            var itemCostElements = await res[i].$$('div[data-testid="price-and-discounted-price"] span')
            var itemCost = await itemCostElements[itemCostElements.length - 1].getText();
            var itemName = await res[i].$('div[data-testid="title"]').getText();

            var rank = Number(itemRank);
            var cost = Number(itemCost.replace(/[^0-9]+/g, ''));
            if ((rank > expectedRank) &&
                (cost < expectedCost)) {
                console.log(`Result: ${itemName}. Cost ${cost} < ${expectedCost}. Rank ${rank} > ${expectedRank}`);
                return i;
            }
        }
        return -1;
    }


}

export default new ResultPage();