ServerEvents.recipes(function (event) {
  var aspecti = [
    ["kubejs:pink_slime_aspectus", "industrialforegoing:pink_slime"],
    ["kubejs:netherite_aspectus", "kubejs:molten_netherite"],
    ["kubejs:diamond_steel_aspectus", "kubejs:molten_diamond_steel"],
    ["kubejs:scorched_aspectus", "kubejs:molten_scorched"],
    ["kubejs:treated_iron_aspectus", "kubejs:molten_treated_iron"],
    ["kubejs:zinc_aspectus", "embers:molten_zinc"],
  ];

  aspecti.forEach(function (pair) {
    var aspectus = pair[0];
    var fluid = pair[1];

    event.custom({
      type: "embers:stamping",
      fluid: { amount: 90, fluid: fluid },
      input: { item: "embers:ember_shard" },
      output: { item: aspectus },
      stamp: { item: "embers:ingot_stamp" },
    });
  });
});
