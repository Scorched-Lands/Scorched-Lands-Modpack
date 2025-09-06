ServerEvents.tags("item", (event) => {
  event.add("sl:mg", ['mininggadgets:mininggadget_simple', 'mininggadgets:mininggadget_fancy', 'mininggadgets:mininggadget'])
  event.add("sl:mg_upgrade", ['mininggadgets:upgrade_range_1', 'mininggadgets:upgrade_range_2', 'mininggadgets:upgrade_range_3', 'mininggadgets:upgrade_battery_1', 'mininggadgets:upgrade_battery_2', 'mininggadgets:upgrade_battery_3', 'mininggadgets:upgrade_battery_creative', 'mininggadgets:upgrade_efficiency_1', 'mininggadgets:upgrade_efficiency_2', 'mininggadgets:upgrade_efficiency_3', 'mininggadgets:upgrade_efficiency_4', 'mininggadgets:upgrade_efficiency_5', 'mininggadgets:upgrade_silk', 'mininggadgets:upgrade_void_junk', 'mininggadgets:upgrade_magnet', 'mininggadgets:upgrade_size_1', 'mininggadgets:upgrade_size_2', 'mininggadgets:upgrade_size_3', 'mininggadgets:upgrade_light_placer', 'mininggadgets:upgrade_freezing', 'mininggadgets:upgrade_fortune_3'])
  event.add("sl:stone_gun", ["scguns:flintlock_pistol","scguns:saketini","scguns:flintlock_pistol","scguns:handcannon","scguns:musket","scguns:blunderbuss","scguns:repeating_musket","scguns:winnie","scguns:callwell_conversion","scguns:callwell"]);
  event.add('forge:ingots/brass', 'scguns:treated_brass_ingot')
});

ServerEvents.tags("block", (event) => {});
