global.materialNodes = [
  "anthralite",
  "coal",
  "copper",
  "diamond",
  "gold",
  "iron",
  "lapis",
  "quartz",
  "redstone",
  "ruby",
  "sulfur",
  "vehement_coal",
  "zinc",
  // "ancient_debris"
];

global.metalMaterials = [
  "anthralite",
  "copper",
  "gold",
  "iron",
  "zinc",
  // "ancient_debris"
]

global.dustMaterials = [
  "coal",
  "redstone",
  "sulfur",
  "vehement_coal",
]

global.gemMaterials = [
  "diamond",
  "lapis",
  "quartz",
  "ruby",
]

// ITEMS

StartupEvents.registry("item", (event) => {
  global.materialNodes.forEach((material) => {
    event.create(`${material}_clump`).maxStackSize(16);
  });
  global.dustMaterials.forEach((dust) => {
    event.create((`pulverized_${dust}_dust`))
    event.create((`powdered_${dust}_dust`))
  });
    global.metalMaterials.forEach((metal) => {
    event.create(`pulverized_${metal}`)
    event.create(`${metal}_crystals`)
    event.create(`caustic_${metal}`)
    event.create(`sculked_${metal}`)
    event.create(`purified_${metal}`)
  });
});

// BLOCKS

StartupEvents.registry("block", (event) => {
  global.materialNodes.forEach((material) => {
    event
      .create(`${material}_node`)
      .stoneSoundType()
      .unbreakable()
      .tagBlock("minecraft:wither_immune")
      .tagBlock("minecraft:features_cannot_replace")
      .tagBlock("buildinggadgets2:deny")
      .tagBlock("minecraft:lava_pool_stone_cannot_replace")
      .tagBlock("forge:relocation_not_supported")
      .tagBlock("c:relocation_not_supported")
      .tagBlock("create:non_movable")
      .tagBlock("create:non_breakable");
  });
});

// FLUIDS

StartupEvents.registry("fluid", (event) => {
  global.metalMaterials.forEach((metal) => {
    event
      .create(`${metal}_slurry`)
      .tag(`kubejs:${metal}_slurry`)
      .tag('minecraft:lava')
      .thickTexture(0xFF0000)
      .noBucket()
  });
});