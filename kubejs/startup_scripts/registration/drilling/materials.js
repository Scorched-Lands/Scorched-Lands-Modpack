var materialNodes = [
  ["anthralite", "#57473C"],
  ["coal", "#2D2D2D"],
  ["copper", "#E47B55"],
  ["diamond", "#49EAD6"],
  ["gold", "#FAF25E"],
  ["iron", "#D5D5D5"],
  ["lapis", "#335DC1"],
  ["quartz", "#DAD1C4"],
  ["redstone", "#FC0000"],
  ["ruby", "#D45337"],
  ["sulfur", "#F0F563"],
  ["vehement_coal", "#814040"],
  ["zinc", "#B7E6BF"],
];

var metalMaterials = [
  ["anthralite", "#57473C"],
  ["copper", "#E47B55"],
  ["gold", "#FAF25E"],
  ["iron", "#D5D5D5"],
  ["zinc", "#B7E6BF"],
  // "ancient_debris"
];

var dustMaterials = [
  ["coal", "#2D2D2D"],
  ["redstone", "#FC0000"],
  ["sulfur", "#F0F563"],
  ["vehement_coal", "#814040"],
];

var gemMaterials = [
  ["diamond", "#49EAD6"],
  ["lapis", "#335DC1"],
  ["quartz", "#DAD1C4"],
  ["ruby", "#D45337"],
];

// ITEMS

StartupEvents.registry("item", (event) => {

  materialNodes.forEach(function (pair) {
    var material = pair[0];
    var color = pair[1];

    event
      .create(`${material}_clump`)
      .maxStackSize(16)
      .tag(`kubejs:clumps`)
      .tag(`kubejs:clumps/${material}`)
      .texture("kubejs:item/blank/blank_clump")
      .color(color);
  });

  dustMaterials.forEach(function (pair) {
    var dust = pair[0];
    var color = pair[1];

    event
      .create(`pulverized_${dust}_dust`)
      .tag(`kubejs:pulverized_dusts`)
      .tag(`kubejs:pulverized_dusts/${dust}`)
      .texture("kubejs:item/blank/blank_dust")
      .color(color);

    event
      .create(`powdered_${dust}_dust`)
      .tag(`kubejs:powdered_dusts`)
      .tag(`kubejs:powdered_dusts/${dust}`)
      .texture("kubejs:item/blank/blank_powder")
      .color(color);
  });

  metalMaterials.forEach(function (pair) {
    var metal = pair[0];
    var color = pair[1];

    event
      .create(`pulverized_${metal}`)
      .tag(`kubejs:pulverized`)
      .tag(`kubejs:pulverized/${metal}`)
      .texture("kubejs:item/blank/blank_pulverized")
      .color(color);

    event
      .create(`${metal}_crystals`)
      .tag(`kubejs:crystals`)
      .tag(`kubejs:crystals/${metal}`)
      .texture("kubejs:item/blank/blank_crystal")
      .color(color);

    event
      .create(`caustic_${metal}`)
      .tag(`kubejs:caustic`)
      .tag(`kubejs:caustic/${metal}`)
      .texture("kubejs:item/blank/blank_caustic")
      .color(color);

    event
      .create(`sculked_${metal}`)
      .tag(`kubejs:sculked`)
      .tag(`kubejs:sculked/${metal}`)
      .texture("kubejs:item/blank/blank_sculked")
      .color(color);

    event
      .create(`purified_${metal}`)
      .tag(`kubejs:purified`)
      .tag(`kubejs:purified/${metal}`)
      .texture("kubejs:item/blank/blank_purified")
      .color(color);
  });
});

// BLOCKS
const unbreakableTags = [
  "minecraft:wither_immune",
  "minecraft:features_cannot_replace",
  "buildinggadgets2:deny",
  "minecraft:lava_pool_stone_cannot_replace",
  "forge:relocation_not_supported",
  "c:relocation_not_supported",
  "create:non_movable",
  "create:non_breakable",
];

StartupEvents.registry("block", (event) => {
  // ORE NODES

  materialNodes.forEach(function (pair) {
    var material = pair[0];
    let block = event
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
          render_type: "solid",
        },
        overlay: {
          parent: "block/cube_all",
          render_type: "translucent",
          textures: { all: `kubejs:block/node/${material}` },
        },
      },
    };

    unbreakableTags.forEach((tag) => {
      block.tagBlock(tag);
    });
  });
});

// FLUIDS

StartupEvents.registry("fluid", (event) => {
  metalMaterials.forEach(function (pair) {
    var metal = pair[0];
    var color = pair[1];

    event
      .create(`${metal}_slurry`)
      .tag(`kubejs:${metal}_slurry`)
      .tag("minecraft:lava")
      .thickTexture(color);
    // .noBucket()
  });
});
