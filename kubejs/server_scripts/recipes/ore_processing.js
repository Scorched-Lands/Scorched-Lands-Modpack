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
      processingTime: 1620,
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

})
