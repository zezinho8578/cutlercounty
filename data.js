const skillDescriptions = {
    'Accounting': 'Use to sift through financial records for anomalies, like hidden accounts, shell corporations, or money laundering. Essential for white-collar crime investigations.',
    'Alertness': 'The ability to spot danger or notice things that are out of place. Use it to hear a floorboard creak, spot the bulge of a concealed weapon, or notice a car that has been tailing you.',
    'Anthropology': 'The study of human societies. Use to understand the beliefs, rituals, and social structures of isolated communities, cults, or gangs.',
    'Archeology': 'The study of human history through physical remains. Use to date an object, understand the significance of an old crime scene, or interpret historical artifacts.',
    'Artillery': 'Knowledge of heavy, indirect-fire weapons. Unlikely to be used in standard deputy work, but might be relevant for dealing with military-grade threats or ordnance.',
    'Athletics': 'Physical prowess. Use for running, jumping, climbing, and other feats of agility and endurance. Critical for foot pursuits and navigating difficult terrain.',
    'Bureaucracy': 'Navigating administrative systems and red tape. Use to fast-track a warrant, requisition special equipment, or bury a sensitive report.',
    'Criminology': 'Knowledge of criminal behavior. Use to build a profile of a suspect, predict a criminal\'s next move, or analyze a crime scene from a behavioral perspective.',
    'Demolitions': 'The use and disposal of explosives. Use to safely disarm a bomb or to strategically breach a fortified structure. Requires proper certification.',
    'Disguise': 'The ability to alter one\'s appearance to avoid recognition. Useful for undercover work or surveillance operations.',
    'Dodge': 'The ability to instinctively evade attacks. Use to get out of the way of a melee attack or dive for cover to avoid gunfire.',
    'Drive': 'Handling a vehicle in a crisis. Use for high-speed pursuits, off-road driving, or performing advanced maneuvers like a J-turn.',
    'Firearms': 'Safe and accurate use of pistols, shotguns, and rifles in combat. Represents training in marksmanship under stressful conditions.',
    'First Aid': 'Emergency medical treatment. Use to stabilize a wounded civilian or fellow officer until paramedics arrive. Can be life-saving in the field.',
    'Forensics': 'Gathering and analyzing physical evidence from a crime scene. Use to collect fingerprints, DNA samples, ballistics, and other trace evidence.',
    'Heavy Machinery': 'Operating heavy equipment like bulldozers, backhoes, or farm combines. Useful for clearing debris, accessing remote areas, or dealing with rural incidents.',
    'Heavy Weapons': 'Use of military-grade weapons like machine guns or grenade launchers. Not standard issue, but knowledge may be required for special response situations.',
    'History': 'Knowledge of past events, particularly local history. Use to find historical precedents for a strange case or understand the background of an old family feud.',
    'HUMINT': 'Human Intelligence. The art of gathering information from people. Use for interviewing witnesses, interrogating suspects, or cultivating confidential informants.',
    'Law': 'Deep knowledge of the legal system, procedures, and statutes. Use to identify the specific crime committed, ensure a warrant is ironclad, or navigate complex legal loopholes.',
    'Medicine': 'Advanced medical knowledge beyond first aid. Use to diagnose illnesses, identify poisons, or determine a precise cause of death before an autopsy.',
    'Melee Weapons': 'Effective use of hand-to-hand weapons like batons, knives, or improvised weapons in a close-quarters fight.',
    'Navigate': 'Finding your way using maps, GPS, or natural landmarks. Crucial for patrols in rural or wilderness areas of the county.',
    'Occult': 'Knowledge of secret and esoteric lore, including mysticism, local folklore, and paranormal legends. Use to identify symbols, understand rituals, and research unconventional threats.',
    'Persuade': 'The ability to change someone\'s mind or influence their actions through reasoned argument, empathy, or deception. Use to de-escalate a tense situation, convince a witness to talk, or talk a suspect into surrendering.',
    'Pharmacy': 'Knowledge of drugs, their effects, and their creation. Use to identify narcotics, understand an overdose, or recognize the signs of a clandestine drug lab.',
    'Psychotherapy': 'The diagnosis and treatment of mental illness. Use to profile a mentally unstable suspect or help a witness recall repressed memories. Cannot be used on yourself.',
    'Ride': 'The ability to handle and ride an animal, typically a horse. Useful for mounted patrol in parks or difficult terrain.',
    'Search': 'The ability to find things that are hidden or concealed. Use to conduct a thorough search of a vehicle, a room, or an outdoor area for evidence or contraband.',
    'SIGINT': 'Signals Intelligence. The practice of intercepting and analyzing electronic communications. Use for wiretaps, tracking cell phones, or breaking simple codes.',
    'Stealth': 'Moving without being seen or heard. Use for surveillance, approaching a suspect unnoticed, or setting up a hidden observation post.',
    'Surgery': 'Invasive medical procedures. Far beyond the scope of a deputy\'s duties, but the knowledge could be used to understand complex wounds on a victim.',
    'Survival': 'Knowledge of how to survive in the wilderness. Use to track a fugitive through the woods, find shelter, or endure harsh weather conditions during an extended search.',
    'Swim': 'The ability to handle oneself in water during a crisis. Use for water rescues or pursuing a suspect into a lake or river.',
    'Unarmed Combat': 'Hand-to-hand fighting skills. Use to subdue a resisting suspect, defend against an attack, or fight when your weapon is unavailable.',
    'Unnatural': 'This skill cannot be learned; it is gained only through direct, sanity-shattering exposure to phenomena that defy reality. It represents a fractured glimpse into the horrifying truth of the universe.'
};

const weaponPresets = {
    "Melee Weapons": [
        { name: "Unarmed", skillIdentifier: "Unarmed Combat", range: 1, dmg: "1D4-1", ap: "", lethality: "", desc: "Basic hand-to-hand strikes with fists, kicks, and elbows. Damage can be improved with training." },
        { name: "Brass Knuckles", skillIdentifier: "Unarmed Combat", range: 1, dmg: "1D4", ap: "", lethality: "", desc: "A simple, concealable force-multiplier for unarmed strikes." },
        { name: "Knife", skillIdentifier: "Melee Weapons", range: 1, dmg: "1D4", ap: "3", lethality: "", desc: "A small, single-edged blade. Common and easily concealable." },
        { name: "Combat Dagger", skillIdentifier: "Melee Weapons", range: 1, dmg: "1D6", ap: "3", lethality: "", desc: "A dedicated combat knife with a larger, often double-edged blade." },
        { name: "Club/Baton", skillIdentifier: "Melee Weapons", range: 1, dmg: "1D6", ap: "", lethality: "", desc: "A blunt instrument designed for subduing targets through impact." },
        { name: "Baseball Bat", skillIdentifier: "Melee Weapons", range: 1, dmg: "1D8", ap: "", lethality: "", desc: "A heavy club for sport or improvised combat." },
        { name: "Fire Axe", skillIdentifier: "Melee Weapons", range: 1, dmg: "1D10", ap: "", lethality: "", desc: "A heavy, typically two-handed axe for breaching or as a formidable weapon." }
    ],
    "Firearms": [
        { name: "Light Pistol (.38)", skillIdentifier: "Firearms", range: 10, dmg: "1D8", ap: "", lethality: "", ammoC: 6, ammoM: 6, desc: "Small-caliber sidearms, easily concealable but lacking stopping power." },
        { name: "Medium Pistol (9mm)", skillIdentifier: "Firearms", range: 15, dmg: "1D10", ap: "", lethality: "", ammoC: 15, ammoM: 15, desc: "Standard-issue service pistols, balancing magazine capacity and effectiveness." },
        { name: "Heavy Pistol (.45)", skillIdentifier: "Firearms", range: 20, dmg: "1D12", ap: "", lethality: "", ammoC: 8, ammoM: 8, desc: "Large-caliber handguns and revolvers known for their immense stopping power." },
        { name: "Shotgun (Shot)", skillIdentifier: "Firearms", range: 50, dmg: "2D10", ap: "", lethality: "", ammoC: 5, ammoM: 5, desc: "Fires a spread of pellets, devastating at close range." },
        { name: "Shotgun (Slug)", skillIdentifier: "Firearms", range: 75, dmg: "2D8", ap: "", lethality: "", ammoC: 5, ammoM: 5, desc: "Fires a single, solid projectile for greater range and accuracy." },
        { name: "Carbine (5.56mm)", skillIdentifier: "Firearms", range: 100, dmg: "1D12", ap: "3", lethality: "10", ammoC: 30, ammoM: 30, desc: "Standard patrol rifles, versatile for most combat scenarios." },
        { name: "Rifle (.308)", skillIdentifier: "Firearms", range: 150, dmg: "1D12+2", ap: "5", lethality: "10", ammoC: 20, ammoM: 20, desc: "Full-power cartridges for superior range and penetration, used in marksman rifles." }
    ],
    "Heavy Weapons": [
        { name: "Light Machine Gun", skillIdentifier: "Heavy Weapons", range: 200, dmg: "1D12", ap: "3", lethality: "10", ammoC: 100, ammoM: 200, desc: "An automatic rifle designed for sustained suppressive fire. SWAT use only." },
        { name: "Grenade Launcher (40mm)", skillIdentifier: "Heavy Weapons", range: 150, dmg: "", ap: "", lethality: "15", ammoC: 1, ammoM: 1, desc: "Fires explosive or chemical grenades further than they can be thrown. SWAT use only." }
    ]
};

const armorPresets = [
    { name: "Kevlar vest (Concealable)", ap: 3, desc: "Standard soft body armor. If worn under clothing, requires an Alertness test to spot.", isBombSuit: false },
    { name: "Reinforced Kevlar vest (Concealable)", ap: 4, desc: "Soft body armor with trauma plate inserts. Harder to conceal.", isBombSuit: false },
    { name: "Tactical body armor", ap: 5, desc: "Hard plate carrier worn externally. Cannot be concealed. Standard for SWAT.", isBombSuit: false },
    { name: "Bomb suit", ap: 10, desc: "Heavy EOD suit. Includes helmet. Cannot be concealed.", isBombSuit: true }
];
