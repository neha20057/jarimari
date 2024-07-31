var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_jarimarisql_pub_built_1 = new ol.format.GeoJSON();
var features_jarimarisql_pub_built_1 = format_jarimarisql_pub_built_1.readFeatures(json_jarimarisql_pub_built_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jarimarisql_pub_built_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jarimarisql_pub_built_1.addFeatures(features_jarimarisql_pub_built_1);
var lyr_jarimarisql_pub_built_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jarimarisql_pub_built_1, 
                style: style_jarimarisql_pub_built_1,
                popuplayertitle: "jarimarisql_pub_built",
                interactive: true,
                title: '<img src="styles/legend/jarimarisql_pub_built_1.png" /> jarimarisql_pub_built'
            });
var format_road_2 = new ol.format.GeoJSON();
var features_road_2 = format_road_2.readFeatures(json_road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_2.addFeatures(features_road_2);
var lyr_road_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_2, 
                style: style_road_2,
                popuplayertitle: "road",
                interactive: true,
                title: '<img src="styles/legend/road_2.png" /> road'
            });
var format_query_no_lab_upstream_3 = new ol.format.GeoJSON();
var features_query_no_lab_upstream_3 = format_query_no_lab_upstream_3.readFeatures(json_query_no_lab_upstream_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_query_no_lab_upstream_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_query_no_lab_upstream_3.addFeatures(features_query_no_lab_upstream_3);
var lyr_query_no_lab_upstream_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_query_no_lab_upstream_3, 
                style: style_query_no_lab_upstream_3,
                popuplayertitle: "query_no_lab_upstream",
                interactive: true,
    title: 'query_no_lab_upstream<br />\
    <img src="styles/legend/query_no_lab_upstream_3_0.png" /> 5<br />\
    <img src="styles/legend/query_no_lab_upstream_3_1.png" /> 6<br />\
    <img src="styles/legend/query_no_lab_upstream_3_2.png" /> 7<br />\
    <img src="styles/legend/query_no_lab_upstream_3_3.png" /> 8<br />\
    <img src="styles/legend/query_no_lab_upstream_3_4.png" /> 9<br />\
    <img src="styles/legend/query_no_lab_upstream_3_5.png" /> 10<br />\
    <img src="styles/legend/query_no_lab_upstream_3_6.png" /> 11<br />\
    <img src="styles/legend/query_no_lab_upstream_3_7.png" /> 12<br />\
    <img src="styles/legend/query_no_lab_upstream_3_8.png" /> 55<br />\
    <img src="styles/legend/query_no_lab_upstream_3_9.png" /> <br />'
        });
var format_no_lab_upstream_sql_4 = new ol.format.GeoJSON();
var features_no_lab_upstream_sql_4 = format_no_lab_upstream_sql_4.readFeatures(json_no_lab_upstream_sql_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_no_lab_upstream_sql_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_no_lab_upstream_sql_4.addFeatures(features_no_lab_upstream_sql_4);
var lyr_no_lab_upstream_sql_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_no_lab_upstream_sql_4, 
                style: style_no_lab_upstream_sql_4,
                popuplayertitle: "no_lab_upstream_sql",
                interactive: true,
    title: 'no_lab_upstream_sql<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_0.png" /> 2<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_1.png" /> 3<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_2.png" /> 4<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_3.png" /> 5<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_4.png" /> 6<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_5.png" /> 7<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_6.png" /> 8<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_7.png" /> 9<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_8.png" /> 10<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_9.png" /> 11<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_10.png" /> 12<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_11.png" /> 55<br />\
    <img src="styles/legend/no_lab_upstream_sql_4_12.png" /> <br />'
        });
var format_scrap_upstream_5 = new ol.format.GeoJSON();
var features_scrap_upstream_5 = format_scrap_upstream_5.readFeatures(json_scrap_upstream_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_scrap_upstream_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_scrap_upstream_5.addFeatures(features_scrap_upstream_5);
var lyr_scrap_upstream_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_scrap_upstream_5, 
                style: style_scrap_upstream_5,
                popuplayertitle: "scrap_upstream",
                interactive: true,
                title: '<img src="styles/legend/scrap_upstream_5.png" /> scrap_upstream'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_jarimarisql_pub_built_1.setVisible(true);lyr_road_2.setVisible(true);lyr_query_no_lab_upstream_3.setVisible(true);lyr_no_lab_upstream_sql_4.setVisible(true);lyr_scrap_upstream_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_jarimarisql_pub_built_1,lyr_road_2,lyr_query_no_lab_upstream_3,lyr_no_lab_upstream_sql_4,lyr_scrap_upstream_5];
lyr_jarimarisql_pub_built_1.set('fieldAliases', {'id': 'id', 'build_hght': 'build_hght', 'build_area': 'build_area', 'build_grnd': 'build_grnd', 'build_flr': 'build_flr', 'build_type': 'build_type', 'build_use': 'build_use', 'no_labour': 'no_labour', 'no_res': 'no_res', 'layer': 'layer', 'path': 'path', });
lyr_road_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'motor_vehi': 'motor_vehi', 'oneway': 'oneway', 'access': 'access', 'name_etymo': 'name_etymo', 'name': 'name', });
lyr_query_no_lab_upstream_3.set('fieldAliases', {'_uid_': '_uid_', 'no_labour': 'no_labour', });
lyr_no_lab_upstream_sql_4.set('fieldAliases', {'id': 'id', 'build_hght': 'build_hght', 'build_area': 'build_area', 'build_grnd': 'build_grnd', 'build_flr': 'build_flr', 'build_type': 'build_type', 'build_use': 'build_use', 'no_labour': 'no_labour', 'no_res': 'no_res', 'layer': 'layer', 'path': 'path', });
lyr_scrap_upstream_5.set('fieldAliases', {'_uid_': '_uid_', 'build_hght': 'build_hght', 'build_type': 'build_type', });
lyr_jarimarisql_pub_built_1.set('fieldImages', {'id': '', 'build_hght': '', 'build_area': '', 'build_grnd': '', 'build_flr': '', 'build_type': '', 'build_use': '', 'no_labour': '', 'no_res': '', 'layer': '', 'path': '', });
lyr_road_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'motor_vehi': '', 'oneway': '', 'access': '', 'name_etymo': '', 'name': '', });
lyr_query_no_lab_upstream_3.set('fieldImages', {'_uid_': 'TextEdit', 'no_labour': 'TextEdit', });
lyr_no_lab_upstream_sql_4.set('fieldImages', {'id': 'TextEdit', 'build_hght': 'TextEdit', 'build_area': 'TextEdit', 'build_grnd': 'TextEdit', 'build_flr': 'TextEdit', 'build_type': 'TextEdit', 'build_use': 'TextEdit', 'no_labour': 'TextEdit', 'no_res': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_scrap_upstream_5.set('fieldImages', {'_uid_': '', 'build_hght': '', 'build_type': '', });
lyr_jarimarisql_pub_built_1.set('fieldLabels', {'id': 'no label', 'build_hght': 'no label', 'build_area': 'no label', 'build_grnd': 'no label', 'build_flr': 'no label', 'build_type': 'no label', 'build_use': 'no label', 'no_labour': 'no label', 'no_res': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_road_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'motor_vehi': 'no label', 'oneway': 'no label', 'access': 'no label', 'name_etymo': 'no label', 'name': 'no label', });
lyr_query_no_lab_upstream_3.set('fieldLabels', {'_uid_': 'no label', 'no_labour': 'no label', });
lyr_no_lab_upstream_sql_4.set('fieldLabels', {'id': 'no label', 'build_hght': 'no label', 'build_area': 'no label', 'build_grnd': 'no label', 'build_flr': 'no label', 'build_type': 'no label', 'build_use': 'no label', 'no_labour': 'no label', 'no_res': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_scrap_upstream_5.set('fieldLabels', {'_uid_': 'no label', 'build_hght': 'no label', 'build_type': 'no label', });
lyr_scrap_upstream_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});