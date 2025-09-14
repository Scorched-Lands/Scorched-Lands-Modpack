StartupEvents.postInit((event) => {
  function affixGen(gearIDs, fileFolder, minRarity, maxRarity) {
    gearIDs.forEach((id) => {
      let modelJson = {
        dimensions: ["minecraft:overworld"],
        min_rarity: `apotheosis:${minRarity}`,
        max_rarity: `apotheosis:${maxRarity}`,
        weight: 1,
        stack: {
          item: id,
          count: 1,
          nbt: { Damage: 0 },
        },
      };

      let affixFilePath = `config/openloader/data/SL-Gateways/data/scorched_lands/affix_loot_entries/${fileFolder}/${id.replace(":","_")}.json`;
      JsonIO.write(affixFilePath, modelJson);
      console.log(`Generated Affix Loot Entry: ${affixFilePath}`);
    });
  }

  let stoneGuns = [
    "scguns:flintlock_pistol",
    "scguns:saketini",
    "scguns:handcannon",
    "scguns:musket",
    "scguns:blunderbuss",
    "scguns:repeating_musket",
    "scguns:winnie",
    "scguns:callwell_conversion",
    "scguns:callwell",
  ];

  let brassGuns = [
    'scguns:m22_waltz',
    'scguns:waltz_conversion',
    'scguns:osgood_50',
    'scguns:gauss_rifle',
    'scguns:niami',
    'scguns:spitfire',
    'scguns:gattaler',
    'scguns:thunderhead',
    'scguns:cogloader',
    'scguns:dozier_rl',
    'scguns:cr4k_mining_laser',
    'scguns:grandle',
    'scguns:scratches',
    'scguns:gale',
    'scguns:jackhammer',
    'scguns:howler',
    'scguns:howler_conversion'
]

  affixGen(stoneGuns, "treated_iron_gate", "common", "common");
  affixGen(brassGuns, "treated_brass_gate", "uncommon", "rare")
});
