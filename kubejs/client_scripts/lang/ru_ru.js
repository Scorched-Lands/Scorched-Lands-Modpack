// /**
//  * @template {(...args: any[]) => any} T
//  * @param {T} fn
//  * @returns {(...args: Parameters<T>) => ReturnType<typeof template<T>>}
//  */
// let template = (fn) => function self () {
//   fn.apply(null, [].slice.call(arguments));
//   return template(fn);
// }

// ClientEvents.lang('en_us', event => {
//   template((a, b) => event.renameItem(a, b))

//   ('create:andesite_alloy', 'Gunmetal')
//   ('vintageimprovements:andesite_sheet', 'Gunmetal Sheet')
//   ('create:andesite_ladder', 'Gunmetal Ladder')
//   ('vintageimprovements:andesite_rod', 'Gunmetal Rod')
//   ('vintageimprovements:andesite_wire', 'Gunmetal Wire')
//   ('vintageimprovements:andesite_spring', 'Gunmetal Spring')
//   ('railways:track_switch_andesite', 'Track Switch')
//   ('create:andesite_casing', 'Gunmetal Casing')
//   ('create:andesite_funnel', 'Gunmetal Funnel')
//   ('create:andesite_tunnel', 'Gunmetal Tunnel')
//   ('create:andesite_table_cloth', 'Gunmetal Table Cloth')
//   ('create:andesite_bars', 'Gunmetal Bars')
//   ('create:andesite_scaffolding', 'Gunmetal Scaffolding')
//   ('create:andesite_door', 'Gunmetal Door')
//   ('create:andesite_alloy_block', 'Block of Gunmetal')
//   ('create:brass_hand', 'Mechanical Hand')
//   ('embers:lead_plate', 'Anthralite Plate')
//   ('embers:plate_stamp', 'Plate Mold')
//   ('embers:ingot_stamp', 'Ingot Mold')
//   ('embers:nugget_stamp', 'Nugget Mold')
//   ('embers:gear_stamp', 'Gear Mold')
//   ('vintageimprovements:lead_sheet', 'Anthralite Sheet')
//   ('vintageimprovements:lead_rod', 'Anthralite Rod')
//   ('vintageimprovements:lead_wire', 'Anthralite Wire')
//   ('vintageimprovements:lead_spring', 'Anthralite Spring')
//   ('embers:lead_aspectus', 'Anthralite Aspectus')
//   ('embers:molten_lead_bucket', 'Molten Anthralite Bucket')

// })