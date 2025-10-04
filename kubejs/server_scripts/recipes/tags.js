ServerEvents.tags("item", (event) => {
  event.add("sl:mg", ['mininggadgets:mininggadget_simple', 'mininggadgets:mininggadget_fancy', 'mininggadgets:mininggadget'])
  event.add("sl:mg_upgrade", ['mininggadgets:upgrade_range_1', 'mininggadgets:upgrade_range_2', 'mininggadgets:upgrade_range_3', 'mininggadgets:upgrade_battery_1', 'mininggadgets:upgrade_battery_2', 'mininggadgets:upgrade_battery_3', 'mininggadgets:upgrade_battery_creative', 'mininggadgets:upgrade_efficiency_1', 'mininggadgets:upgrade_efficiency_2', 'mininggadgets:upgrade_efficiency_3', 'mininggadgets:upgrade_efficiency_4', 'mininggadgets:upgrade_efficiency_5', 'mininggadgets:upgrade_silk', 'mininggadgets:upgrade_void_junk', 'mininggadgets:upgrade_magnet', 'mininggadgets:upgrade_size_1', 'mininggadgets:upgrade_size_2', 'mininggadgets:upgrade_size_3', 'mininggadgets:upgrade_light_placer', 'mininggadgets:upgrade_freezing', 'mininggadgets:upgrade_fortune_3'])
  event.add("sl:stone_gun", ["scguns:flintlock_pistol","scguns:saketini","scguns:flintlock_pistol","scguns:handcannon","scguns:musket","scguns:blunderbuss","scguns:repeating_musket","scguns:winnie","scguns:callwell_conversion","scguns:callwell"]);
  event.add('forge:ingots/brass', 'scguns:treated_brass_ingot')
  event.removeAllTagsFrom('createbigcannons:cast_iron_ingot', 'pneumaticcraft:ingot_iron_compressed')
  event.add('forge:ingots/compressed_iron', 'scguns:treated_iron_ingot')
  event.add('createbigcannons:ingot_cast_iron', 'scguns:treated_iron_ingot')
  event.add('forge:ingots/cast_iron', 'scguns:treated_iron_ingot')
  event.add('c:ingots/cast_iron', 'scguns:treated_iron_ingot')
  event.add('forge:storage_blocks/brass', 'scguns:treated_brass_block')
  event.add('forge:ingots/lead', 'scguns:anthralite_ingot')
  event.add('forge:storage_blocks/lead', 'scguns:anthralite_block')
  event.add('forge:ores/lead', '#forge:ores/anthralite')
  event.add('forge:storage_blocks/raw_lead', '#forge:storage_blocks/raw_anthralite')
  event.add('forge:nuggets/lead', 'scguns:anthralite_nugget')
  event.add('forge:raw_materials/lead', 'scguns:raw_anthralite')
});

ServerEvents.tags("block", (event) => {});

ServerEvents.tags("fluid", (event) => {});
