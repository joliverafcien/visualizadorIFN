ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-6517208.978165, -3981137.190101, -5868397.360440, -3639322.168982]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2 = new ol.format.GeoJSON();
var features_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2 = format_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2.readFeatures(json_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2.addFeatures(features_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2);
cluster_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2
});
var lyr_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2, 
                style: style_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2,
                popuplayertitle: 'DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp',
                interactive: true,
                title: '<img src="styles/legend/DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2.png" /> DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2];
lyr_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2.set('fieldAliases', {'nombre_pm': 'nombre_pm', 'subbosque': 'subbosque', 'departamen': 'departamen', 'usoTierra': 'usoTierra', 'tipoGanado': 'tipoGanado', 'sombra': 'sombra', 'ECO_REGION': 'ECO_REGION', 'tipobosq': 'tipobosq', });
lyr_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2.set('fieldImages', {'nombre_pm': 'TextEdit', 'subbosque': 'TextEdit', 'departamen': 'TextEdit', 'usoTierra': 'TextEdit', 'tipoGanado': 'TextEdit', 'sombra': 'TextEdit', 'ECO_REGION': 'TextEdit', 'tipobosq': 'Range', });
lyr_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2.set('fieldLabels', {'nombre_pm': 'inline label - visible with data', 'subbosque': 'inline label - visible with data', 'departamen': 'inline label - visible with data', 'usoTierra': 'no label', 'tipoGanado': 'hidden field', 'sombra': 'hidden field', 'ECO_REGION': 'inline label - visible with data', 'tipobosq': 'inline label - visible with data', });
lyr_DatosGeneralesIFN_BN_TOTAL_ecoReg_sinCosteroshp_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});