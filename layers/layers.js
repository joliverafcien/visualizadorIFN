ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-6877606.116376, -4195276.775088, -5539554.419443, -3490347.707004]);
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
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DatosGeneralesIFNnativo_2 = new ol.format.GeoJSON();
var features_DatosGeneralesIFNnativo_2 = format_DatosGeneralesIFNnativo_2.readFeatures(json_DatosGeneralesIFNnativo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DatosGeneralesIFNnativo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DatosGeneralesIFNnativo_2.addFeatures(features_DatosGeneralesIFNnativo_2);
cluster_DatosGeneralesIFNnativo_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_DatosGeneralesIFNnativo_2
});
var lyr_DatosGeneralesIFNnativo_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_DatosGeneralesIFNnativo_2, 
                style: style_DatosGeneralesIFNnativo_2,
                popuplayertitle: 'Datos Generales IFN nativo',
                interactive: true,
    title: 'Datos Generales IFN nativo<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_0.png" /> 0 - 18<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_1.png" /> 18 - 39<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_2.png" /> 39 - 61<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_3.png" /> 61 - 82<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_4.png" /> 82 - 106<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_5.png" /> 106 - 133<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_6.png" /> 133 - 161<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_7.png" /> 161 - 192<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_8.png" /> 192 - 235<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_9.png" /> 235 - 286<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_10.png" /> 286 - 339<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_11.png" /> 339 - 392<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_12.png" /> 392 - 466<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_13.png" /> 466 - 674<br />\
    <img src="styles/legend/DatosGeneralesIFNnativo_2_14.png" /> 674 - 1131<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_DatosGeneralesIFNnativo_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_DatosGeneralesIFNnativo_2];
lyr_DatosGeneralesIFNnativo_2.set('fieldAliases', {'nombre_pm': 'Código de parcela', 'tipoDeBosq': 'Tipo de bosque', 'subbosque': 'subbosque', 'año_muest': 'año_muest', 'facilidadP': 'facilidadP', 'fecha': 'Fecha de muestreo', 'departamen': 'Departamento', 'sur': 'sur', 'oeste': 'oeste', 'altitud': 'altitud', 'ubicación': 'ubicación', 'exposicion': 'exposicion', 'pendiente': 'pendiente', 'formaPendi': 'formaPendi', 'grupoConea': 'grupoConea', 'usoTierra': 'usoTierra', 'usoPrevio': 'usoPrevio', 'tipoLabran': 'tipoLabran', 'gradoErosi': 'gradoErosi', 'tipoErosio': 'tipoErosio', 'profundida': 'profundida', 'Profundi_1': 'Profundi_1', 'Profundi_2': 'Profundi_2', 'color': 'color', 'textura': 'textura', 'estructura': 'estructura', 'drenaje': 'drenaje', 'infiltraci': 'infiltraci', 'impediment': 'impediment', 'olor': 'olor', 'humedad': 'humedad', 'pedregosid': 'pedregosid', 'rocosidad': 'rocosidad', 'micorrizas': 'micorrizas', 'faunaSuelo': 'faunaSuelo', 'raices': 'raices', 'CoberCopa': 'Cobertura de copa (%)', 'CoberSotob': 'CoberSotob', 'CoberHerb': 'CoberHerb', 'CoberResPl': 'CoberResPl', 'CoberResCu': 'CoberResCu', 'tipoGanado': 'tipoGanado', 'intensidad': 'intensidad', 'sistemasPr': 'sistemasPr', 'produccion': 'produccion', 'sombra': 'sombra', 'rompeVient': 'rompeVient', 'recoleccio': 'recoleccio', 'aceitesEse': 'aceitesEse', 'obtencionS': 'obtencionS', 'actividade': 'actividade', 'Activida_1': 'Activida_1', 'estudiosCi': 'estudiosCi', 'fijacionCa': 'fijacionCa', 'flora_soto': 'flora_soto', 'tipoSotobo': 'tipoSotobo', 'AlturaSo_1': 'AlturaSo_1', 'pobreCalid': 'pobreCalid', 'polucionAi': 'polucionAi', 'perdidaFer': 'perdidaFer', 'presenciaP': 'presenciaP', 'invasionEs': 'Presencia de EEI', 'Cantidad_E': 'Cantidad_E', 'Categoria': 'Categoria', 'NombreCi_1': 'NombreCi_1', 'NombreCo_1': 'NombreCo_1', 'severidad_': 'severidad_', 'Otras_EEI': 'Otras_EEI', 'evidenciaF': 'evidenciaF', 'tipoFuego': 'tipoFuego', 'propositoF': 'propositoF', 'ECO_REGION': 'Eco-región', 'SumVol_var': 'Suma Volumen parcela (m3)', 'SumDens_ar': 'Densidad', 'C_ha': 'Carbono en biomasa (ton/ha)', 'NDVI_L8': 'NDVI_L8', 'GI_L8': 'GI_L8', 'EVI_L8': 'EVI_L8', 'RVI_L8': 'RVI_L8', 'C_pixel': 'C_pixel', });
lyr_DatosGeneralesIFNnativo_2.set('fieldImages', {'nombre_pm': 'TextEdit', 'tipoDeBosq': 'TextEdit', 'subbosque': 'TextEdit', 'año_muest': 'TextEdit', 'facilidadP': 'TextEdit', 'fecha': 'TextEdit', 'departamen': 'TextEdit', 'sur': 'TextEdit', 'oeste': 'TextEdit', 'altitud': 'TextEdit', 'ubicación': 'TextEdit', 'exposicion': 'TextEdit', 'pendiente': 'TextEdit', 'formaPendi': 'TextEdit', 'grupoConea': 'TextEdit', 'usoTierra': 'TextEdit', 'usoPrevio': 'TextEdit', 'tipoLabran': 'TextEdit', 'gradoErosi': 'TextEdit', 'tipoErosio': 'TextEdit', 'profundida': 'TextEdit', 'Profundi_1': 'TextEdit', 'Profundi_2': 'TextEdit', 'color': 'TextEdit', 'textura': 'TextEdit', 'estructura': 'TextEdit', 'drenaje': 'TextEdit', 'infiltraci': 'TextEdit', 'impediment': 'TextEdit', 'olor': 'TextEdit', 'humedad': 'TextEdit', 'pedregosid': 'TextEdit', 'rocosidad': 'TextEdit', 'micorrizas': 'TextEdit', 'faunaSuelo': 'TextEdit', 'raices': 'TextEdit', 'CoberCopa': 'TextEdit', 'CoberSotob': 'TextEdit', 'CoberHerb': 'TextEdit', 'CoberResPl': 'TextEdit', 'CoberResCu': 'TextEdit', 'tipoGanado': 'TextEdit', 'intensidad': 'TextEdit', 'sistemasPr': 'TextEdit', 'produccion': 'TextEdit', 'sombra': 'TextEdit', 'rompeVient': 'TextEdit', 'recoleccio': 'TextEdit', 'aceitesEse': 'TextEdit', 'obtencionS': 'TextEdit', 'actividade': 'TextEdit', 'Activida_1': 'TextEdit', 'estudiosCi': 'TextEdit', 'fijacionCa': 'TextEdit', 'flora_soto': 'TextEdit', 'tipoSotobo': 'TextEdit', 'AlturaSo_1': 'TextEdit', 'pobreCalid': 'TextEdit', 'polucionAi': 'TextEdit', 'perdidaFer': 'TextEdit', 'presenciaP': 'TextEdit', 'invasionEs': 'TextEdit', 'Cantidad_E': 'TextEdit', 'Categoria': 'TextEdit', 'NombreCi_1': 'TextEdit', 'NombreCo_1': 'TextEdit', 'severidad_': 'TextEdit', 'Otras_EEI': 'TextEdit', 'evidenciaF': 'TextEdit', 'tipoFuego': 'TextEdit', 'propositoF': 'TextEdit', 'ECO_REGION': 'TextEdit', 'SumVol_var': 'TextEdit', 'SumDens_ar': 'TextEdit', 'C_ha': 'TextEdit', 'NDVI_L8': 'TextEdit', 'GI_L8': 'TextEdit', 'EVI_L8': 'TextEdit', 'RVI_L8': 'TextEdit', 'C_pixel': 'TextEdit', });
lyr_DatosGeneralesIFNnativo_2.set('fieldLabels', {'nombre_pm': 'inline label - always visible', 'tipoDeBosq': 'inline label - visible with data', 'subbosque': 'inline label - visible with data', 'año_muest': 'hidden field', 'facilidadP': 'hidden field', 'fecha': 'inline label - visible with data', 'departamen': 'inline label - visible with data', 'sur': 'hidden field', 'oeste': 'hidden field', 'altitud': 'hidden field', 'ubicación': 'hidden field', 'exposicion': 'hidden field', 'pendiente': 'hidden field', 'formaPendi': 'hidden field', 'grupoConea': 'hidden field', 'usoTierra': 'hidden field', 'usoPrevio': 'hidden field', 'tipoLabran': 'hidden field', 'gradoErosi': 'hidden field', 'tipoErosio': 'hidden field', 'profundida': 'hidden field', 'Profundi_1': 'hidden field', 'Profundi_2': 'hidden field', 'color': 'hidden field', 'textura': 'hidden field', 'estructura': 'hidden field', 'drenaje': 'hidden field', 'infiltraci': 'hidden field', 'impediment': 'hidden field', 'olor': 'hidden field', 'humedad': 'hidden field', 'pedregosid': 'hidden field', 'rocosidad': 'hidden field', 'micorrizas': 'hidden field', 'faunaSuelo': 'hidden field', 'raices': 'hidden field', 'CoberCopa': 'inline label - visible with data', 'CoberSotob': 'hidden field', 'CoberHerb': 'hidden field', 'CoberResPl': 'hidden field', 'CoberResCu': 'hidden field', 'tipoGanado': 'hidden field', 'intensidad': 'hidden field', 'sistemasPr': 'hidden field', 'produccion': 'hidden field', 'sombra': 'hidden field', 'rompeVient': 'hidden field', 'recoleccio': 'hidden field', 'aceitesEse': 'hidden field', 'obtencionS': 'hidden field', 'actividade': 'hidden field', 'Activida_1': 'hidden field', 'estudiosCi': 'hidden field', 'fijacionCa': 'hidden field', 'flora_soto': 'hidden field', 'tipoSotobo': 'hidden field', 'AlturaSo_1': 'hidden field', 'pobreCalid': 'hidden field', 'polucionAi': 'hidden field', 'perdidaFer': 'hidden field', 'presenciaP': 'hidden field', 'invasionEs': 'inline label - visible with data', 'Cantidad_E': 'hidden field', 'Categoria': 'hidden field', 'NombreCi_1': 'hidden field', 'NombreCo_1': 'hidden field', 'severidad_': 'hidden field', 'Otras_EEI': 'hidden field', 'evidenciaF': 'hidden field', 'tipoFuego': 'hidden field', 'propositoF': 'hidden field', 'ECO_REGION': 'inline label - visible with data', 'SumVol_var': 'inline label - visible with data', 'SumDens_ar': 'inline label - visible with data', 'C_ha': 'inline label - visible with data', 'NDVI_L8': 'hidden field', 'GI_L8': 'hidden field', 'EVI_L8': 'hidden field', 'RVI_L8': 'hidden field', 'C_pixel': 'hidden field', });
lyr_DatosGeneralesIFNnativo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});