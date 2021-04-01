var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(0), v5 = v3(23), v6 = v3(19), v7 = v3(8), v8 = [].sort, v9 = [];
v4((v4.P) + ((v4.F) * (((v7((function (){
v9.sort(void 0);
}))) || (! v7((function (){
v9.sort(null);
})))) || (! v3(36)(v8)))), "Array", ({sort : (function (v1){
return ((void 0) === (v1)) ? (v8.call(v6(this))) : (v8.call(v6(this), v5(v1)));
})}));
});
(v0.prototype.contains) = (function (v1){
return (this._data[v1]) !== (undefined);
});
(v0.prototype.create) = (function (v1){
if((! v1) && (this._buffer)){
return;
}
(v1) = (v1) || (this._data);
if(! this._buffer){
if(this._updatable){
(this._buffer) = this._engine.createDynamicVertexBuffer(v1);
(this._data) = v1;
}else {
(this._buffer) = this._engine.createVertexBuffer(v1);
}
}else {
if(this._updatable){
this._engine.updateDynamicVertexBuffer(this._buffer, v1);
(this._data) = v1;
}
}
});
var v1 = (function (){
'use strict';
var v1 = ({lang : 'da', dir : 'ltr', common : ({ok : 'Gemme', cancel : 'Annuller', key_backspace : 'backspace', key_del : 'delete', key_down : 'down', key_up : 'up', more_opts : 'More Options', url : 'URL', width : 'Width', height : 'Height'}), misc : ({powered_by : 'Powered by'}), ui : ({toggle_stroke_tools : 'Show/hide more stroke tools', palette_info : 'Klik for at ændre fyldfarve, shift-klik for at ændre stregfarve', zoom_level : 'Skift zoomniveau', panel_drag : 'Drag left/right to resize side panel', quality : 'Quality:', pathNodeTooltip : 'Drag node to move it. Double-click node to change segment type', pathCtrlPtTooltip : 'Drag control point to adjust curve properties', pick_stroke_paint_opacity : 'Pick a Stroke Paint and Opacity', pick_fill_paint_opacity : 'Pick a Fill Paint and Opacity'}), properties : ({id : 'Identify the element', fill_color : 'Skift fyldfarve', stroke_color : 'Skift stregfarve', stroke_style : 'Skift slagtilfælde Dash stil', stroke_width : 'Skift slagtilfælde bredde', pos_x : 'Change X coordinate', pos_y : 'Change Y coordinate', linecap_butt : 'Linecap: Butt', linecap_round : 'Linecap: Round', linecap_square : 'Linecap: Square', linejoin_bevel : 'Linejoin: Bevel', linejoin_miter : 'Linejoin: Miter', linejoin_round : 'Linejoin: Round', angle : 'Skift rotationsvinkel', blur : 'Change gaussian blur value', opacity : 'Skift valgte element opacitet', circle_cx : 'Skift cirklens cx koordinere', circle_cy : 'Skift cirklens cy koordinere', circle_r : 'Skift cirklens radius', ellipse_cx : 'Skift ellipse&#39;s cx koordinere', ellipse_cy : 'Skift ellipse&#39;s cy koordinere', ellipse_rx : 'Skift ellipse&#39;s x radius', ellipse_ry : 'Skift ellipse&#39;s y radius', line_x1 : 'Skift linie&#39;s start x-koordinat', line_x2 : 'Skift Line&#39;s slutter x-koordinat', line_y1 : 'Skift linjens start y-koordinat', line_y2 : 'Skift Line&#39;s slutter y-koordinat', rect_height : 'Skift rektangel højde', rect_width : 'Skift rektanglets bredde', corner_radius : 'Skift Rektangel Corner Radius', image_width : 'Skift billede bredde', image_height : 'Skift billede højde', image_url : 'Skift webadresse', node_x : "Change node's x coordinate", node_y : "Change node's y coordinate", seg_type : 'Change Segment type', straight_segments : 'Straight', curve_segments : 'Curve', text_contents : 'Skift tekst indhold', font_family : 'Skift Font Family', font_size : 'Skift skriftstørrelse', bold : 'Fed tekst', italic : 'Italic Text'}), tools : ({main_menu : 'Main Menu', bkgnd_color_opac : 'Skift baggrundsfarve / uigennemsigtighed', connector_no_arrow : 'No arrow', fitToContent : 'Tilpas til indhold', fit_to_all : 'Passer til alt indhold', fit_to_canvas : 'Tilpas til lærred', fit_to_layer_content : 'Tilpas til lag indhold', fit_to_sel : 'Tilpas til udvælgelse', align_relative_to : 'Juster i forhold til ...', relativeTo : 'i forhold til:', page : 'side', largest_object : 'største objekt', selected_objects : 'valgte objekter', smallest_object : 'mindste objekt', new_doc : 'Nyt billede', open_doc : 'Open SVG', export_img : 'Export', save_doc : 'Gem billede', import_doc : 'Import Image', align_to_page : 'Align Element to Page', align_bottom : 'Juster Bottom', align_center : 'Centrer', align_left : 'Venstrejusteret', align_middle : 'Juster Mellemøsten', align_right : 'Højrejusteret', align_top : 'Juster Top', mode_select : 'Select Tool', mode_fhpath : 'Pencil Tool', mode_line : 'Line Tool', mode_rect : 'Rectangle Tool', mode_square : 'Square Tool', mode_fhrect : 'Free-Hand Rektangel', mode_ellipse : 'Ellipse', mode_circle : 'Cirkel', mode_fhellipse : 'Free-Hand Ellipse', mode_path : 'Path Tool', mode_text : 'Tekstværktøj', mode_image : 'Image Tool', mode_zoom : 'Zoom Tool', no_embed : 'NOTE: This image cannot be embedded. It will depend on this path to be displayed', undo : 'Fortryd', redo : 'Redo', tool_source : 'Edit Source', wireframe_mode : 'Wireframe Mode', clone : 'Clone Element(s)', del : 'Delete Element(s)', group_elements : 'Gruppe Elements', make_link : 'Make (hyper)link', set_link_url : 'Set link URL (leave empty to remove)', to_path : 'Convert to Path', reorient_path : 'Reorient path', ungroup : 'Opdel Elements', docprops : 'Document Properties', move_bottom : 'Flyt til bund', move_top : 'Flyt til toppen', node_clone : 'Clone Node', node_delete : 'Delete Node', node_link : 'Link Control Points', add_subpath : 'Add sub-path', openclose_path : 'Open/close sub-path', source_save : 'Gemme', cut : 'Cut', copy : 'Copy', paste : 'Paste', paste_in_place : 'Paste in Place', "delete" : 'Delete', group : 'Group', move_front : 'Bring to Front', move_up : 'Bring Forward', move_down : 'Send Backward', move_back : 'Send to Back'}), layers : ({layer : 'Layer', layers : 'Layers', del : 'Slet Layer', move_down : 'Flyt lag ned', "new" : 'New Layer', rename : 'Omdøb Layer', move_up : 'Flyt Layer Up', dupe : 'Duplicate Layer', merge_down : 'Merge Down', merge_all : 'Merge All', move_elems_to : 'Move elements to:', move_selected : 'Move selected elements to a different layer'}), config : ({image_props : 'Image Properties', doc_title : 'Title', doc_dims : 'Canvas Dimensions', included_images : 'Included Images', image_opt_embed : 'Embed data (local files)', image_opt_ref : 'Use file reference', editor_prefs : 'Editor Preferences', icon_size : 'Icon size', language : 'Language', background : 'Editor Background', editor_img_url : 'Image URL', editor_bg_note : 'Note: Background will not be saved with image.', icon_large : 'Large', icon_medium : 'Medium', icon_small : 'Small', icon_xlarge : 'Extra Large', select_predefined : 'Vælg foruddefinerede:', units_and_rulers : 'Units & Rulers', show_rulers : 'Show rulers', base_unit : 'Base Unit:', grid : 'Grid', snapping_onoff : 'Snapping on/off', snapping_stepsize : 'Snapping Step-Size:', grid_color : 'Grid color'}), notification : ({invalidAttrValGiven : 'Invalid value given', noContentToFitTo : 'No content to fit to', dupeLayerName : 'There is already a layer named that!', enterUniqueLayerName : 'Please enter a unique layer name', enterNewLayerName : 'Please enter the new layer name', layerHasThatName : 'Layer already has that name', QmoveElemsToLayer : "Move selected elements to layer '%s'?", QwantToClear : 'Do you want to clear the drawing?\nThis will also erase your undo history!', QwantToOpen : 'Do you want to open a new file?\nThis will also erase your undo history!', QerrorsRevertToSource : 'There were parsing errors in your SVG source.\nRevert back to original SVG source?', QignoreSourceChanges : 'Ignore changes made to SVG source?', featNotSupported : 'Feature not supported', enterNewImgURL : 'Enter the new image URL', defsFailOnSave : 'NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.', loadingImage : 'Loading image, please wait...', saveFromBrowser : "Select 'Save As...' in your browser (possibly via file menu or right-click context-menu) to save this image as a %s file.", noteTheseIssues : 'Also note the following issues: ', unsavedChanges : 'There are unsaved changes.', enterNewLinkURL : 'Enter the new hyperlink URL', errorLoadingSVG : 'Error: Unable to load SVG data', URLLoadFail : 'Unable to load from URL', retrieving : "Retrieving '%s' ...", popupWindowBlocked : 'Popup window may be blocked by browser', exportNoBlur : 'Blurred elements will appear as un-blurred', exportNoforeignObject : 'foreignObject elements will not appear', exportNoDashArray : 'Strokes will appear filled', exportNoText : 'Text may not appear as expected'})});
return v1;
});
(v1.prototype.centerOn) = (function (v1, v2){
(this.minimum) = v1.subtract(v2);
(this.maximum) = v1.add(v2);
(this.boundingBox) = new v3.BoundingBox(this.minimum, this.maximum);
(this.boundingSphere) = new v3.BoundingSphere(this.minimum, this.maximum);
return this;
});
var v2 = (function (v1, v2){
if(((v1.delayLoadState) === (v3.Engine.DELAYLOADSTATE_LOADED)) || ((v1.delayLoadState) === (v3.Engine.DELAYLOADSTATE_NONE))){
if(v1.material){
if((v1.material) instanceof (v3.StandardMaterial)){
(v2.materials) = (v2.materials) || ([]);
if(! v2.materials.some((function (v4){
return (v4.id) === (v1.material.id);
}))){
v2.materials.push(v1.material.serialize());
}
}else {
if((v1.material) instanceof (v3.MultiMaterial)){
(v2.multiMaterials) = (v2.multiMaterials) || ([]);
if(! v2.multiMaterials.some((function (v4){
return (v4.id) === (v1.material.id);
}))){
v2.multiMaterials.push(v1.material.serialize());
}
}
}
}
var v5 = v1._geometry;
if(v5){
if(! v2.geometries){
(v2.geometries) = ({});
(v2.geometries.boxes) = [];
(v2.geometries.spheres) = [];
(v2.geometries.cylinders) = [];
(v2.geometries.toruses) = [];
(v2.geometries.grounds) = [];
(v2.geometries.planes) = [];
(v2.geometries.torusKnots) = [];
(v2.geometries.vertexData) = [];
}
v0(v5, v2.geometries);
}
if(v1.skeleton){
(v2.skeletons) = (v2.skeletons) || ([]);
v2.skeletons.push(v1.skeleton.serialize());
}
(v2.meshes) = (v2.meshes) || ([]);
v2.meshes.push(v1(v1, v2));
}
});
(v1.ALPHA) = "alpha";
var v3 = (function (v1, v2, v3){
"use strict";
(v2.exports) = [];
});
