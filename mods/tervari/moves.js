exports.BattleMovedex = {
        acidarmor: {
                inherit: true,
                pp: 40
        },
        aircutter: {
                inherit: true,
                basePower: 55
        },
        assurance: {
                inherit: true,
                basePower: 50,
                basePowerCallback: function(pokemon, target) {
                        if (pokemon.volatiles.assurance && pokemon.volatiles.assurance.hurt) {
                                this.debug('Boosted for being damaged this turn');
                                return 100;
                        }
                        return 50;
                }
        },
        aurasphere: {
                inherit: true,
                basePower: 90
        },
        barrier: {
                inherit: true,
                pp: 30
        },
        blizzard: {
                inherit: true,
                basePower: 120
        },
        bubble: {
                inherit: true,
                basePower: 20
        },
        camouflage: {
                inherit: true,
                desc: "The user's type changes based on the battle terrain. Ground-type in Wi-Fi battles. (In-game: Ground-type in puddles, rocky ground, and sand, Water-type on water, Rock-type in caves, Ice-type on snow and ice, and Normal-type everywhere else.) Fails if the user's type cannot be changed or if the user is already purely that type.",
                shortDesc: "Changes user's type based on terrain. (Ground)",
                onHit: function(target) {
                        this.add('-start', target, 'typechange', 'Ground');
                        target.types = ['Ground'];
                }
        },
        charm: {
                inherit: true,
                type: "Normal"
        },
	"chatter": {
		num: 448,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "Deals damage to one adjacent or non-adjacent target with a 100% chance to confuse it.",
		shortDesc: "100% chance to confuse the target.",
		id: "chatter",
		name: "Chatter",
		pp: 20,
		priority: 0,
		isSoundBased: true,
		onModifyMove: function(move, pokemon) {
			if (pokemon.template.species !== 'Chatot') delete move.secondaries;
		},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion'
		},
		target: "any",
		type: "Flying"
	},

        cottonspore: {
                inherit: true,
                onTryHit: function() {}
        },
        defog: {
                inherit: true,
                desc: "Lowers one adjacent target's evasion by 1 stage. Whether or not the target's evasion was affected, the effects of Reflect, Light Screen, Safeguard, Mist, Spikes, Toxic Spikes, and Stealth Rock end for the target's side. Pokemon protected by Magic Coat or the Ability Magic Bounce are unaffected and instead use this move themselves. Ignores a target's Substitute, although a Substitute will still block the evasion lowering.",
                shortDesc: "Removes target's hazards, lowers evasion by 1.",
                onHit: function(pokemon) {
                        if (!pokemon.volatiles['substitute']) this.boost({evasion:-1});
                        var sideConditions = {reflect:1, lightscreen:1, safeguard:1, mist:1, spikes:1, toxicspikes:1, stealthrock:1};
                        for (var i in sideConditions) {
                                if (pokemon.side.removeSideCondition(i)) {
                                        this.add('-sideend', pokemon.side, this.getEffect(i).name, '[from] move: Defog', '[of] '+pokemon);
                                }
                        }
                }
        },
        dracometeor: {
                inherit: true,
                basePower: 140
        },
        dragonpulse: {
                inherit: true,
                basePower: 90
        },
        energyball: {
                inherit: true,
                basePower: 80
        },
        extrasensory: {
                inherit: true,
                pp: 30
        },
        fireblast: {
                inherit: true,
                basePower: 120
        },
        firepledge: {
                inherit: true,
                basePower: 50,
                basePowerCallback: function(target, source, move) {
                        if (move.sourceEffect in {grasspledge:1, waterpledge:1}) {
                                this.add('-combine');
                                this.debug('triple damage');
                                return 150;
                        }
                        return 50;
                }
        },
        flamethrower: {
                inherit: true,
                basePower: 95
        },
        frostbreath: {
                inherit: true,
                basePower: 40
        },
        furycutter: {
                inherit: true,
                basePower: 20
        },
        futuresight: {
                inherit: true,
                basePower: 100,
                onTryHit: function(target, source) {
                        source.side.addSideCondition('futuremove');
                        if (source.side.sideConditions['futuremove'].positions[source.position]) {
                                return false;
                        }
                        source.side.sideConditions['futuremove'].positions[source.position] = {
                                duration: 3,
                                move: 'futuresight',
                                targetPosition: target.position,
                                source: source,
                                moveData: {
                                        basePower: 100,
                                        category: "Special",
                                        affectedByImmunities: true,
                                        type: 'Psychic'
                                }
                        };
                        this.add('-start', source, 'move: Future Sight');
                        return null;
                }
        },
        glare: {
                inherit: true,
                accuracy: 90
        },
        grasspledge: {
                inherit: true,
                basePower: 50,
                basePowerCallback: function(target, source, move) {
                        if (move.sourceEffect in {waterpledge:1, firepledge:1}) {
                                this.add('-combine');
                                this.debug('triple damage');
                                return 150;
                        }
                        return 50;
                }
        },
        gunkshot: {
                inherit: true,
                accuracy: 70
        },
        heatwave: {
                inherit: true,
                basePower: 100
        },
        hex: {
                inherit: true,
                basePower: 50,
                basePowerCallback: function(pokemon, target) {
                        if (target.status) return 100;
                        return 50;
                }
        },
        hiddenpower: {
                inherit: true,
                basePower: 0,
                basePowerCallback: function(pokemon) {
                        return pokemon.hpPower || 70;
                },
                desc: "Deals damage to one adjacent target. This move's type and power depend on the user's individual values (IVs). Power varies between 30 and 70, and type can be any but Normal.",
                shortDesc: "Varies in power and type based on the user's IVs."
        },
        hiddenpowerbug: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerdark: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerdragon: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerelectric: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerfighting: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerfire: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerflying: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerghost: {
                inherit: true,
                basePower: 70
        },
        hiddenpowergrass: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerground: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerice: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerpoison: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerpsychic: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerrock: {
                inherit: true,
                basePower: 70
        },
        hiddenpowersteel: {
                inherit: true,
                basePower: 70
        },
        hiddenpowerwater: {
                inherit: true,
                basePower: 70
        },
        hurricane: {
                inherit: true,
                basePower: 120
        },
        hydropump: {
                inherit: true,
                basePower: 120
        },
        icebeam: {
                inherit: true,
                basePower: 95
        },
        incinerate: {
                inherit: true,
                basePower: 30,
                desc: "Deals damage to all adjacent foes and destroys any Berry they may be holding.",
                shortDesc: "Destroys the foe(s) Berry.",
                onHit: function(pokemon, source) {
                        var item = pokemon.getItem();
                        if (item.isBerry && pokemon.takeItem(source)) {
                                this.add('-enditem', pokemon, item.name, '[from] move: Incinerate');
                        }
                }
        },
        knockoff: {
                inherit: true,
                basePower: 20
        },
        leafstorm: {
                inherit: true,
                basePower: 140
        },
        lick: {
                inherit: true,
                basePower: 20
        },
        lowsweep: {
                inherit: true,
                basePower: 60
        },
        meteormash: {
                inherit: true,
                accuracy: 85,
                basePower: 100
        },
        minimize: {
                inherit: true,
                pp: 20
        },
        moonlight: {
                inherit: true,
                type: "Normal"
        },
        muddywater: {
                inherit: true,
                basePower: 95
        },
        naturepower: {
                inherit: true,
                desc: "This move calls another move for use depending on the battle terrain. Earthquake in Wi-Fi battles.",
                shortDesc: "Attack changes based on terrain. (Earthquake)",
                onHit: function(target) {
                        this.useMove('earthquake', target);
                }
        },
        overheat: {
                inherit: true,
                basePower: 140
        },
        pinmissile: {
                inherit: true,
                accuracy: 85,
                basePower: 14
        },
        poisongas: {
                inherit: true,
                accuracy: 80
        },
        poisonpowder: {
                inherit: true,
                onTryHit: function() {}
        },
        powergem: {
                inherit: true,
                basePower: 70
        },
        ragepowder: {
                num: 476,
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "Until the end of the turn, all single-target attacks from the foe's team are redirected to the user if they are in range. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Ability Magic Bounce, or drawn in by the Abilities Lightningrod or Storm Drain. Fails if it is not a double or triple battle. Priority +3.",
                shortDesc: "The foes' moves target the user on the turn used.",
                id: "ragepowder",
                name: "Rage Powder",
                pp: 20,
                priority: 3,
                volatileStatus: 'followme',
                secondary: false,
                target: "self",
                type: "Bug"
        },
        roar: {
                inherit: true,
                accuracy: 100,
                isNotProtectable: false
        },
        rocktomb: {
                inherit: true,
                accuracy: 80,
                basePower: 50,
                pp: 10
        },
        skullbash: {
                inherit: true,
                basePower: 100,
                pp: 15
        },
        sleeppowder: {
                inherit: true,
                onTryHit: function() {}
        },
        smog: {
                inherit: true,
                basePower: 20
        },
        snore: {
                inherit: true,
                basePower: 40
        },
        spore: {
                inherit: true,
                onTryHit: function() {}
        },
        stormthrow: {
                inherit: true,
                basePower: 40
        },
        strugglebug: {
                inherit: true,
                basePower: 30
        },
        stunspore: {
                inherit: true,
                onTryHit: function() {}
        },
        surf: {
                inherit: true,
                basePower: 95
        },
        sweetkiss: {
                inherit: true,
                type: "Normal"
        },
        swordsdance: {
                inherit: true,
                pp: 30
        },
        synchronoise: {
                inherit: true,
                basePower: 70
        },
        thief: {
                inherit: true,
                basePower: 40
        },
        thunder: {
                inherit: true,
                basePower: 120
        },
        thunderbolt: {
                inherit: true,
                basePower: 95
        },
        vinewhip: {
                inherit: true,
                basePower: 35,
                pp: 15
        },
        wakeupslap: {
                inherit: true,
                basePower: 60,
                basePowerCallback: function(pokemon, target) {
                        if (target.status === 'slp') return 120;
                        return 60;
                }
        },
        waterpledge: {
                inherit: true,
                basePower: 50,
                basePowerCallback: function(target, source, move) {
                        if (move.sourceEffect in {firepledge:1, grasspledge:1}) {
                                this.add('-combine');
                                this.debug('triple damage');
                                return 150;
                        }
                        return 50;
                }
        },
        whirlwind: {
                inherit: true,
                accuracy: 100,
                isNotProtectable: false
        },
        willowisp: {
                inherit: true,
                accuracy: 75
        },
        "chainbolt": {
		num: 701,
		accuracy: 100,
		basePower: 25,
		category: "Special",
		desc: "Deals damage to one adjacent target and hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's Substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "chainbolt",
		isViable: true,
		name: "Chain Bolt",
		pp: 30,
		priority: 0,
		multihit: [2,5],
		secondary: false,
		target: "normal",
		type: "Electric"
	},
	"deserttomb": {
		num: 702,
		accuracy: 95,
		basePower: 85,
		category: "Special",
		desc: "Deals damage to one adjacent target and prevents it from switching for four or five turns; seven turns if the user is holding Grip Claw. Causes damage to the target equal to 1/16 of its maximum HP (1/8 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin. This effect is not stackable or reset by using this or another partial-trapping move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		id: "deserttomb",
		isViable: true,
		name: "Desert Tomb",
		pp: 10,
		priority: 0,
		volatileStatus: 'partiallytrapped',
		secondary: false,
		target: "normal",
		type: "Rock"
	},
	"hydroshock": {
		num: 350,
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		desc: "Blah Blah Blah",
		shortDesc: "Blah Blah Blah",
		id: "hydroshock",
		isViable: true,
		name: "Hydro Shocke",
		pp: 10,
		priority: 0,
		onMultiHit: function(move) {
		      type: "Electric"		      
		},		
		multihit: [2,2],
		secondary: false,
		target: "normal",
		type: "Water"
	},	
	"distortion": {
		num: 703,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Blah Blah Blah",
		shortDesc: "Blah Blah Blah",
		id: "distortion",
		isViable: true,
		name: "Distortion",
		pp: 10,
		priority: -1,
		onTryHit: function(target) {
			decision = this.willMove(target);
			if (!decision || decision.choice !== 'move' || (decision.move.priority === '1')) {
				this.willMove(pokemon).move.priority = 1;
			}
		},
		secondary: false,
		target: "normal",
		type: "Psychic"
	},
	"divingtalon": {
		num: 704,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Makes contact. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "divingtalon",
		isViable: true,
		name: "Diving Talon",
		pp: 20,
		priority: 1,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Flying"
	},
	"firerocket": {
		num: 705,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Makes contact. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "firerocket",
		isViable: true,
		name: "Fire Rocket",
		pp: 20,
		priority: 1,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Fire"
	},
	"focusball": {
		num: 706,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Deals damage to one adjacent target with a 20% chance to lower its Special Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Sp. Def by 1.",
		id: "focusball",
		isViable: true,
		name: "Focus Ball",
		pp: 15,
		priority: 0,
		secondary: {
			chance: 20,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Fighting"
	},
	"gyre": {
		num: 707,
		accuracy: 85,
		basePower: 100,
		basePowerCallback: function() {
			if (this.weather) return 125;
			return 100;
		},
		category: "Special",
		desc: "Deals damage to one adjacent target. Power doubles during weather effects and this move's type changes to match; Ice-type during Hail, Water-type during Rain Dance, Rock-type during Sandstorm, and Fire-type during Sunny Day.",
		shortDesc: "Power doubles and type varies in each weather.",
		id: "gyre",
		isViable: true,
		name: "Gyre",
		pp: 10,
		priority: 0,
		onModifyMove: function(move) {
			switch (this.effectiveWeather()) {
			case 'sunnyday':
				move.type = 'Fire';
				break;
			case 'raindance':
				move.type = 'Water';
				break;
			case 'sandstorm':
				move.type = 'Rock';
				break;
			case 'hail':
				move.type = 'Ice';
				break;
			}
		},
		secondary: false,
		target: "flying",
		type: "Flying"
	},
	"magnify": {
		num: 708,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Accuracy by 2 stages.",
		shortDesc: "Boosts the user's Accuracy by 2.",
		id: "magnify",
		isViable: true,
		name: "Magnify",
		pp: 30,
		priority: 0,
		isSnatchable: true,
		boosts: {
			accuracy: 2
		},
		secondary: false,
		target: "self",
		type: "Steel"
	},
	"mindforce": {
		num: 709,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Deals damage to one adjacent target. Fails if the target did not select a status move for use this turn, or if the target moves before the user. Priority +1.",
		shortDesc: "Usually goes first. Fails if target is not using a status move.",
		id: "mindforce",
		isViable: true,
		name: "Mind Force",
		pp: 5,
		priority: 1,
		onTryHit: function(target) {
			decision = this.willMove(target);
			if (!decision || decision.choice !== 'move' || (decision.move.category !== 'Status' && decision.move.id !== 'mefirst')) {
				return false;
			}
		},
		secondary: false,
		target: "normal",
		type: "Psychic"
	},
	"mysticroom": {
		num: 710,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, all active Pokemon have their Attack and Special Attack stats swapped. Stat stage changes are unaffected. If this move is used during the effect, the effect ends. Priority -7.",
		shortDesc: "For 5 turns, all Attack and Sp. Atk stats switch.",
		id: "mysticroom",
		name: "Mystic Room",
		pp: 10,
		priority: -7,
		onHitField: function(target, source, effect) {
			if (this.pseudoWeather['mysticroom']) {
				this.removePseudoWeather('mysticroom', source, effect, '[of] '+source);
			} else {
				this.addPseudoWeather('mysticroom', source, effect, '[of] '+source);
			}
		},
		effect: {
			duration: 5,
			onStart: function(side, source) {
				this.add('-fieldstart', 'move: MysticRoom', '[of] '+source);
			},
			onModifyAtkPriority: 100,
			onModifyAtk: function(atk, pokemon) {
			return pokemon.stats.spa;
			},
			onModifySpAPriority: 100,
			onModifySpA: function(spa, pokemon) {
				return pokemon.stats.atk;
			},
			onResidualOrder: 24,
			onEnd: function() {
				this.add('-fieldend', 'move: Mystic Room');
			}
		},
		secondary: false,
		target: "all",
		type: "Psychic"
	},
	"rabidfrenzy": {
		num: 711,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Deals damage to one adjacent target and lowers the user's Defense and Special Defense by 1 stage. Makes contact.",
		shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
		id: "rabidfrenzy",
		isViable: true,
		name: "Rabid Frenzy",
		pp: 5,
		priority: 0,
		isContact: true,
		self: {
			boosts: {
				def: -1,
				spd: -1
			}
		},
		secondary: false,
		target: "normal",
		type: "Dark"
	},
	"rootbomb": {
		num: 712,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Deals damage to all adjacent foes and changes type to Grass before hitting.",
		shortDesc: "Changes foes type to Grass before hitting.",
		id: "rootbomb",
		name: "Root Bomb",
		pp: 15,
		priority: 0,
		effect: { 
			onBeforeMove: function(pokemon, target, move) {
				this.add('-start', target, 'typechange', 'Grass');
				target.types = ['Grass'];
			}
		},
		secondary: false,
		target: "normal",
		type: "Fire"
	},
	"shadowsword": {
		num: 713,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "Deals damage to one adjacent target with a 20% chance to lower its Defense by 1 stage. Makes contact.",
		shortDesc: "20% chance to lower the target's Defense by 1",
		id: "shadowsword",
		name: "Shadow Sword",
		pp: 20,
		priority: 0,
		isContact: true,
		secondary: {
			chance: 20,
			boosts: {
				def: -1
			}
		},
		target: "ghost",
		type: "Ghost"
	},
	"shortcircuit": {
		num: 714,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Deals damage to one adjacent target. Makes contact. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "shortcircuit",
		isViable: true,
		name: "Short Circuit",
		pp: 20,
		priority: 1,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Electric"
	},
	"starstorm": {
		num: 715,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		desc: "Deals damage to one adjacent target with a 20% chance to lower its Special Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Sp. Def by 1.",
		id: "starstorm",
		isViable: true,
		name: "Star Storm",
		pp: 5,
		priority: 0,
		secondary: {
			chance: 20,
			boosts: {
				spd: -1
			}
		},
		target: "normal",
		type: "Psychic"
	},
        "vendetta": {
                num: 716,
                accuracy: 85,
                basePower: 120,
                category: "Special",
                desc: "Deals damage to one adjacent target with a 20 chance to hit it with Spite.",
                shortDesc: "20% chance to spite the target.",
                id: "vendetta",
                isViable: true,
                name: "Vendetta",
                pp: 5,
                priority: 0,
                onHit: function(target) {
                        var spiteroll = this.random(100);
                        if (spiteroll > 80) {
                                if (target.deductPP(target.lastMove, 4)) {
                                        this.add("-activate", target, 'move: vendetta', target.lastMove, 4);
                                        return;
                                }
                        }
                        return false;
                },
                target: "normal",
                type: "Ghost"
        },
	"voidhorn": {
		num: 717,
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		desc: "Deals damage to one adjacent target",
		shortDesc: "Strong Ghost-Type Move",
		id: "voidhorn",
		isViable: true,
		name: "Void Horn",
		pp: 10,
		priority: 0,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Ghost"
	},
        "aciditygash": {
                num: 716,
                accuracy: 95,
                basePower: 100,
                category: "Physical",
                desc: "Deals damage to one adjacent target with a 20 chance to inflict Badly Poison.",
                shortDesc: "20% chance to badly poison the target.",
                id: "aciditygash",
                isViable: true,
                name: "Acidity Gash",
                pp: 10,
                priority: 0,
   		 secondary: {
			chance: 20,
			status: 'tox'
			},
                target: "normal",
                type: "Poison"
        }
};
