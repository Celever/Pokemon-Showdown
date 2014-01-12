exports.BattleScripts = {
	init: function() {
		for (var i in this.data.Learnsets) {
			delete this.data.Learnsets[i].learnset['5E'];
			delete this.data.Learnsets[i].learnset['4E'];
			delete this.data.Learnsets[i].learnset['3E'];
			delete this.data.Learnsets[i].learnset['2E'];
			delete this.data.Learnsets[i].learnset['1E'];
			delete this.data.Learnsets[i].learnset['5T'];
			delete this.data.Learnsets[i].learnset['4T'];
			delete this.data.Learnsets[i].learnset['3T'];
			delete this.data.Learnsets[i].learnset['2T'];
			delete this.data.Learnsets[i].learnset['1T'];
			delete this.data.Learnsets[i].learnset['5M'];
			delete this.data.Learnsets[i].learnset['4M'];
			delete this.data.Learnsets[i].learnset['3M'];
			delete this.data.Learnsets[i].learnset['2M'];
			delete this.data.Learnsets[i].learnset['1M'];
		}
	}
};
