var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_EvolucionIndicedeHumedad_1 = new ol.format.GeoJSON();
var features_EvolucionIndicedeHumedad_1 = format_EvolucionIndicedeHumedad_1.readFeatures(json_EvolucionIndicedeHumedad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucionIndicedeHumedad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucionIndicedeHumedad_1.addFeatures(features_EvolucionIndicedeHumedad_1);
var lyr_EvolucionIndicedeHumedad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucionIndicedeHumedad_1, 
                style: style_EvolucionIndicedeHumedad_1,
                interactive: false,
    title: 'Evolucion Indice de Humedad<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_0.png" /> -0,06 - 0,00<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_1.png" /> 0,00 - 0,07<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_2.png" /> 0,07 - 0,13<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_3.png" /> 0,13 - 0,19<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_4.png" /> 0,19 - 0,26<br />'
        });
var format_IndicedeHumedad_2 = new ol.format.GeoJSON();
var features_IndicedeHumedad_2 = format_IndicedeHumedad_2.readFeatures(json_IndicedeHumedad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedad_2.addFeatures(features_IndicedeHumedad_2);
var lyr_IndicedeHumedad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedad_2, 
                style: style_IndicedeHumedad_2,
                interactive: false,
    title: 'Indice de Humedad<br />\
    <img src="styles/legend/IndicedeHumedad_2_0.png" /> -0,01 - 0,10<br />\
    <img src="styles/legend/IndicedeHumedad_2_1.png" /> 0,10 - 0,21<br />\
    <img src="styles/legend/IndicedeHumedad_2_2.png" /> 0,21 - 0,33<br />\
    <img src="styles/legend/IndicedeHumedad_2_3.png" /> 0,33 - 0,44<br />\
    <img src="styles/legend/IndicedeHumedad_2_4.png" /> 0,44 - 0,55<br />'
        });
var format_EvolucionIndicedeVegetacion_3 = new ol.format.GeoJSON();
var features_EvolucionIndicedeVegetacion_3 = format_EvolucionIndicedeVegetacion_3.readFeatures(json_EvolucionIndicedeVegetacion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucionIndicedeVegetacion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucionIndicedeVegetacion_3.addFeatures(features_EvolucionIndicedeVegetacion_3);
var lyr_EvolucionIndicedeVegetacion_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucionIndicedeVegetacion_3, 
                style: style_EvolucionIndicedeVegetacion_3,
                interactive: false,
    title: 'Evolucion Indice de Vegetacion<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion_3_0.png" /> -0,07 - 0,00<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion_3_1.png" /> 0,00 - 0,08<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion_3_2.png" /> 0,08 - 0,16<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion_3_3.png" /> 0,16 - 0,23<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion_3_4.png" /> 0,23 - 0,31<br />'
        });
var format_IndicedeVegetacion_4 = new ol.format.GeoJSON();
var features_IndicedeVegetacion_4 = format_IndicedeVegetacion_4.readFeatures(json_IndicedeVegetacion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacion_4.addFeatures(features_IndicedeVegetacion_4);
var lyr_IndicedeVegetacion_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacion_4, 
                style: style_IndicedeVegetacion_4,
                interactive: false,
    title: 'Indice de Vegetacion<br />\
    <img src="styles/legend/IndicedeVegetacion_4_0.png" /> 0,24 - 0,37<br />\
    <img src="styles/legend/IndicedeVegetacion_4_1.png" /> 0,37 - 0,50<br />\
    <img src="styles/legend/IndicedeVegetacion_4_2.png" /> 0,50 - 0,63<br />\
    <img src="styles/legend/IndicedeVegetacion_4_3.png" /> 0,63 - 0,76<br />\
    <img src="styles/legend/IndicedeVegetacion_4_4.png" /> 0,76 - 0,90<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_EvolucionIndicedeHumedad_1.setVisible(true);lyr_IndicedeHumedad_2.setVisible(true);lyr_EvolucionIndicedeVegetacion_3.setVisible(true);lyr_IndicedeVegetacion_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_EvolucionIndicedeHumedad_1,lyr_IndicedeHumedad_2,lyr_EvolucionIndicedeVegetacion_3,lyr_IndicedeVegetacion_4];
lyr_EvolucionIndicedeHumedad_1.set('fieldAliases', {'E_NDMI': 'E_NDMI', });
lyr_IndicedeHumedad_2.set('fieldAliases', {'NDMI': 'NDMI', });
lyr_EvolucionIndicedeVegetacion_3.set('fieldAliases', {'E_NDVI': 'E_NDVI', });
lyr_IndicedeVegetacion_4.set('fieldAliases', {'NDVI': 'NDVI', });
lyr_EvolucionIndicedeHumedad_1.set('fieldImages', {'E_NDMI': 'TextEdit', });
lyr_IndicedeHumedad_2.set('fieldImages', {'NDMI': 'TextEdit', });
lyr_EvolucionIndicedeVegetacion_3.set('fieldImages', {'E_NDVI': '', });
lyr_IndicedeVegetacion_4.set('fieldImages', {'NDVI': 'TextEdit', });
lyr_EvolucionIndicedeHumedad_1.set('fieldLabels', {'E_NDMI': 'no label', });
lyr_IndicedeHumedad_2.set('fieldLabels', {'NDMI': 'no label', });
lyr_EvolucionIndicedeVegetacion_3.set('fieldLabels', {'E_NDVI': 'no label', });
lyr_IndicedeVegetacion_4.set('fieldLabels', {'NDVI': 'no label', });
lyr_IndicedeVegetacion_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});