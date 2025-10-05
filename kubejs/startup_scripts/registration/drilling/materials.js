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
    event.create(`${material}_clump`)
      .maxStackSize(16)
      .tag(`kubejs:clumps`)
      .tag(`kubejs:clumps/${material}`);
  });
  global.dustMaterials.forEach((dust) => {
    event.create((`pulverized_${dust}_dust`))
      .tag(`kubejs:pulverized_dusts`)
      .tag(`kubejs:pulverized_dusts/${dust}`);
      
    event.create((`powdered_${dust}_dust`))
      .tag(`kubejs:powdered_dusts`)
      .tag(`kubejs:powdered_dusts/${dust}`);
  });
  global.metalMaterials.forEach((metal) => {
    event.create(`pulverized_${metal}`)
      .tag(`kubejs:pulverized`)
      .tag(`kubejs:pulverized/${metal}`);

    event.create(`${metal}_crystals`)
      .tag(`kubejs:crystals`)
      .tag(`kubejs:crystals/${metal}`);

    event.create(`caustic_${metal}`)
      .tag(`kubejs:caustic`)
      .tag(`kubejs:caustic/${metal}`);

    event.create(`sculked_${metal}`)
      .tag(`kubejs:sculked`)
      .tag(`kubejs:sculked/${metal}`);

    event.create(`purified_${metal}`)
      .tag(`kubejs:purified`)
      .tag(`kubejs:purified/${metal}`);
  });
});

// BLOCKS
const unbreakableTags = [
  "minecraft:wither_immune", "minecraft:features_cannot_replace", "buildinggadgets2:deny",
  "minecraft:lava_pool_stone_cannot_replace", "forge:relocation_not_supported", "c:relocation_not_supported",
  "create:non_movable", "create:non_breakable"
];

StartupEvents.registry("block", (event) => {
  // ORE NODES
  global.materialNodes.forEach((material) => {
    let block =
      event
        .create(`${material}_node`)
        .soundType("stone")
        .unbreakable()
        .tagBoth("kubejs:orenodes")
        .tagBoth(`kubejs:orenodes/${material}`);

    block.modelJson = {
      loader: "forge:composite",
      textures: { particle: `kubejs:block/node/${material}` },
      parent: "block/block",
      children: {
        base: {
          parent: "minecraft:block/stone",
          render_type: "solid"
        },
        overlay: {
          parent: "block/cube_all",
          render_type: "translucent",
          textures: { all: `kubejs:block/node/${material}` },
        }
      }
    }

    unbreakableTags.forEach((tag) => {
      block.tagBlock(tag);
    });
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
      // .noBucket()
  });
});