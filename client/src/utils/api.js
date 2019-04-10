import { _getCampaigns, _getCards, _updateCard } from './_data';

export function getInitialData() {
	return Promise.all([_getCampaigns(), _getCards()]).then(
		([campaigns, cards]) => ({
			campaigns,
			cards
		})
	);
}

export function updateCard(card, newWorkflow) {
	return _updateCard(card, newWorkflow);
}
