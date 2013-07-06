exports.BattleAbilities = {  
 "rawpower": {
                desc: "As health decreases, physical attack damage increases drastically.",
                shortDesc: "Physical attacks have a power increase equal to the percent of health lost.",
                onBasePower: function(basePower, attacker, defender, move) {
                        if (move.category === 'Physical') {
                                this.debug('Raw Power boost');
                                var raw = (2 - (attacker.hp/(attacker.maxhp)));
                                return basePower * raw;
                        }
                },
                id: "rawpower",
                name: "Raw Power",
                rating: 4,
                num: 9001
        },
