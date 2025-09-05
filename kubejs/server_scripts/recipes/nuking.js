// All entries in global.nukelist will be removed from recipe viewers, loot
// tables, recipes, tags, ect.

global.nukelist = [
  'mininggadgets:upgrade_empty',
  'compressedcreativity:rotational_compressor',
  'mininggadgets:upgrade_fortune_1',
  'mininggadgets:upgrade_fortune_2',
  "vintageimprovements:vanadium_nugget",
  "vintageimprovements:vanadium_ingot",
  "vintageimprovements:vanadium_block",
  "vintageimprovements:vanadium_sheet",
  "vintageimprovements:vanadium_wire",
  "vintageimprovements:vanadium_rod",
  "vintageimprovements:vanadium_spring",
  "vintageimprovements:small_vanadium_spring",
  "@mcore",
  "actuallyadditions:crusher_double",
  "actuallyadditions:crusher",
  "actuallyadditions:diamond_aiot",
  "actuallyadditions:gold_aiot",
  "actuallyadditions:iron_aiot",
  "actuallyadditions:netherite_aiot",
  "actuallyadditions:stone_aiot",
  "actuallyadditions:wooden_aiot",
  "apotheosis:blazing_hellshelf",
  "apotheosis:crystal_seashelf",
  "apotheosis:dormant_deepshelf",
  "apotheosis:draconic_endshelf",
  "apotheosis:echoing_deepshelf",
  "apotheosis:echoing_sculkshelf",
  "apotheosis:endshelf",
  "apotheosis:filtering_shelf",
  "apotheosis:gem_dust",
  "apotheosis:gem",
  "apotheosis:glowing_hellshelf",
  "apotheosis:heart_seashelf",
  "apotheosis:hellshelf",
  "apotheosis:library",
  "apotheosis:pearl_endshelf",
  "apotheosis:rectifier_t2",
  "apotheosis:rectifier_t3",
  "apotheosis:rectifier",
  "apotheosis:seashelf",
  "apotheosis:sightshelf_t2",
  "apotheosis:sightshelf",
  "apotheosis:sigil_of_socketing",
  "apotheosis:sigil_of_withdrawal",
  "apotheosis:soul_touched_deepshelf",
  "apotheosis:soul_touched_sculkshelf",
  "apotheosis:treasure_shelf",
  "create:cart_assembler",
  "pneumaticcraft:air_conditioning_upgrade",
  "pneumaticcraft:coordinate_tracker_upgrade",
  "pneumaticcraft:elytra_upgrade",
  "pneumaticcraft:ender_visor_upgrade",
  "pneumaticcraft:flippers_upgrade",
  "pneumaticcraft:gilded_upgrade",
  "pneumaticcraft:gun_ammo_ap",
  "pneumaticcraft:gun_ammo_explosive",
  "pneumaticcraft:gun_ammo_freezing",
  "pneumaticcraft:gun_ammo_incendiary",
  "pneumaticcraft:gun_ammo_weighted",
  "pneumaticcraft:gun_ammo",
  "pneumaticcraft:jet_boots_upgrade_1",
  "pneumaticcraft:jet_boots_upgrade_2",
  "pneumaticcraft:jet_boots_upgrade_3",
  "pneumaticcraft:jet_boots_upgrade_4",
  "pneumaticcraft:jet_boots_upgrade_5",
  "pneumaticcraft:jumping_upgrade_1",
  "pneumaticcraft:jumping_upgrade_2",
  "pneumaticcraft:jumping_upgrade_3",
  "pneumaticcraft:jumping_upgrade_4",
  "pneumaticcraft:magnet_upgrade",
  "pneumaticcraft:minigun",
  "pneumaticcraft:night_vision_upgrade",
  "pneumaticcraft:pneumatic_boots",
  "pneumaticcraft:pneumatic_chestplate",
  "pneumaticcraft:pneumatic_helmet",
  "pneumaticcraft:pneumatic_leggings",
  "pneumaticcraft:radiation_shielding_upgrade",
  "pneumaticcraft:scuba_upgrade",
  "pneumaticcraft:search_upgrade",
  "pneumaticcraft:stomp_upgrade",
  "pneumaticcraft:thaumcraft_upgrade",
  "scguns:deep_dark_blueprint",
  "scguns:echoes_2",
  "scguns:forlorn_hope",
  "scguns:sculk_resonator",
  "scguns:whispers",
  /^(?!actuallyadditions:drill_core$)actuallyadditions:drill_.+/,
  /^securitycraft:reinforced_.+/,
];

ServerEvents.tags("item", (event) => {
  event.removeAllTagsFrom(global.nukelist);
  event.add("sl:nukelist", global.nukelist);
  event.add("c:hidden_from_recipe_viewers", global.nukelist);
});

ServerEvents.tags("block", (event) => {
  event.removeAllTagsFrom(global.nukelist);
});

ServerEvents.tags("fluid", (event) => {
  event.removeAllTagsFrom(global.nukelist);
  event.add("sl:nukelist", global.nukelist);
  event.add("c:hidden_from_recipe_viewers", global.nukelist);
});

ServerEvents.recipes((event) => {
  event.remove({ input: global.nukelist });
  event.remove({ output: global.nukelist });
});

LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(
      LootType.ENTITY,
      LootType.UNKNOWN,
      LootType.BLOCK,
      LootType.CHEST,
      LootType.FISHING,
      LootType.GIFT,
      LootType.ADVANCEMENT_ENTITY,
      LootType.ADVANCEMENT_REWARD,
      LootType.PIGLIN_BARTER
    )
    .removeLoot(global.nukelist);
});
