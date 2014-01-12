exports.BattleScripts = {
	init: function() {
		for (var i in this.data.Pokedex) {
			var tier = '';
			var adjustment = 0;
			if (this.data.FormatsData[i]) tier = this.data.FormatsData[i].tier;
			switch (tier) {
			case 'OU':
				adjustment = 6;
				break;
			case 'BL':
				adjustment = 12;
				break;	
			case 'UU':
				adjustment = 18;
				break;
			case 'BL2':
				adjustment = 24;
				break;
			case 'RU':
				adjustment = 30;
				break;
			case 'BL3':
				adjustment = 36;
				break;
			case 'NU':
				adjustment = 42;
				break;
			case 'NFE':
				adjustment = 48;
				break;
			case 'LC':
				adjustment = 54;
			}

			if (adjustment) {
				this.data.Pokedex[i].baseStats.hp += adjustment;
				this.data.Pokedex[i].baseStats.atk += adjustment;
				this.data.Pokedex[i].baseStats.def += adjustment;
				this.data.Pokedex[i].baseStats.spa += adjustment;
				this.data.Pokedex[i].baseStats.spd += adjustment;
				this.data.Pokedex[i].baseStats.spe += adjustment;
			}
		}
	}
};