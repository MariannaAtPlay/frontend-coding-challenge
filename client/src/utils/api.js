import { _getCampaigns, _getCards } from './_data';

export function getInitialData() {
    return Promise.all([_getCampaigns(), _getCards()])
        .then(([campaigns, cards]) => ({
			campaigns,
			cards
		})
	);
}
