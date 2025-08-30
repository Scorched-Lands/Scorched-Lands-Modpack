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
    event.create(`${material}_node`);
  });
});
