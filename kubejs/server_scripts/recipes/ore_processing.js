ServerEvents.recipes(event => {

  function metalProcessing([ingot, clump, pulverized, crystal, caustic, sculked, purified, slurry]) {
    // Tier 1

    event.recipes.vintageimprovementsHammering(
      Item.of(pulverized, 2),
      clump,
      5
    );

    event.custom({
      type: "createbigcannons:melting",
      heatRequirement: "heated",
      ingredients: [{ item: pulverized }],
      processingTime: 80,
      results: [{ amount: 1000, fluid: slurry }],
    });

    event.custom({
      type: "pneumaticcraft:heat_frame_cooling",
      bonus_output: { limit: 1.0, multiplier: 0.025 },
      input: {
        type: "pneumaticcraft:fluid",
        amount: 1000,
        tag: slurry,
      },
      max_temp: 373,
      result: { item: ingot },
    });

    // Tier 2
  }

  metalProcessing([
    "minecraft:gold_ingot",
    "kubejs:gold_clump",
    "kubejs:pulverized_gold",
    "kubejs:gold_crystals",
    "kubejs:caustic_gold",
    "kubejs:sculked_gold",
    "kubejs:purified_gold",
    "kubejs:gold_slurry"
  ])

  metalProcessing([
    "scguns:anthralite_ingot",
    "kubejs:anthralite_clump",
    "kubejs:pulverized_anthralite",
    "kubejs:anthralite_crystals",
    "kubejs:caustic_anthralite",
    "kubejs:sculked_anthralite",
    "kubejs:purified_anthralite",
    "kubejs:anthralite_slurry",
  ]);

  metalProcessing([
    "minecraft:iron_ingot",
    "kubejs:iron_clump",
    "kubejs:pulverized_iron",
    "kubejs:iron_crystals",
    "kubejs:caustic_iron",
    "kubejs:sculked_iron",
    "kubejs:purified_iron",
    "kubejs:iron_slurry",
  ]);

  metalProcessing([
    "minecraft:copper_ingot",
    "kubejs:copper_clump",
    "kubejs:pulverized_copper",
    "kubejs:copper_crystals",
    "kubejs:caustic_copper",
    "kubejs:sculked_copper",
    "kubejs:purified_copper",
    "kubejs:copper_slurry",
  ]);

  metalProcessing([
    "create:zinc_ingot",
    "kubejs:zinc_clump",
    "kubejs:pulverized_zinc",
    "kubejs:zinc_crystals",
    "kubejs:caustic_zinc",
    "kubejs:sculked_zinc",
    "kubejs:purified_zinc",
    "kubejs:zinc_slurry",
  ]);
})
