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
];

// ITEMS

StartupEvents.registry("item", (event) => {
  global.materialNodes.forEach((material) => {
    event.create(`${material}_clump`).maxStackSize(16);
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
