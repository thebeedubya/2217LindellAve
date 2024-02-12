var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_odm_orthophoto_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "odm_orthophoto_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/odm_orthophoto_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9659748.855716, 4318472.419108, -9659635.695779, 4318561.974939]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_odm_orthophoto_modified_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_odm_orthophoto_modified_1];
