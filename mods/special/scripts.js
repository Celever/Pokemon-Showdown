exports.BattleScripts = {
	init: function() {
		for (var i in this.data.Pokedex) {
			if (this.data.Pokedex[i].baseStats.spa > this.data.Pokedex[i].baseStats.spd) {
				var sp = this.data.Pokedex[i].baseStats.spa
			}
			else {
				var sp = this.data.Pokedex[i].baseStats.spd
			}
			this.data.Pokedex[i].baseStats.spa = sp;
			this.data.Pokedex[i].baseStats.spd = sp;
		}
	}
};
