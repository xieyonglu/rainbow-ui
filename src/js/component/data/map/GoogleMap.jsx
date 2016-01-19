//import Util from "../../util/Util";
//import config from "../../component-config";

//import "http://maps.google.com/maps/api/js?sensor=true"
//import "http://maps.googleapis.com/maps/api/js?sensor=false";
//import "https://maps.googleapis.com/maps/api/js";

//import "../../../../../node_modules/googlemaps/lib/index";

//window.google = window.google || {};
//google.maps = google.maps || {};


    

//import googlemaps from "../../../../../googlemaps";

//require(["../../../../../googlemaps"], function(googleMaps) {
//  google.maps === googleMaps;   // true
//});

//import "../../../../../plugin/GoogleMapsAPIv3_OfflinePack/mapfiles/api-3/16/2/main.js";
//import "../../../../../plugin/GoogleMapsAPIv3_OfflinePack/mapfiles/mapapi";
//import "../../../../../node_modules/gmap3/dist/gmap3";

//import "googlemaps";
//import GMaps from "gmaps";

//-----------------------------------------------------------------------------------------------
//	date:		2015/09/23
//	
//	author: yonglu.xie
//	
//	description: GoogleMap Component Class
//-----------------------------------------------------------------------------------------------
export default class GoogleMap extends React.Component {

	/*static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  }*/
	
	//constructor(props){
  //  super(props);
  //}
	
	render() {
		return (<div id="test" className="ui-gmap" />);
	}
	
	componentDidMount122(){
		new GMaps({
		  div: '#test',
		  lat: -12.043333,
		  lng: -77.028333
		});
	}
	
	componentDidMount2() {
		$("#test").gmap3({
          marker:{
            latLng: [46.578498,2.457275],
            options:{
              draggable:true
            },
            events:{
              dragend: function(marker){
                $(this).gmap3({
                  getaddress:{
                    latLng:marker.getPosition(),
                    callback:function(results){
                      var map = $(this).gmap3("get"),
                        infowindow = $(this).gmap3({get:"infowindow"}),
                        content = results && results[1] ? results && results[1].formatted_address : "no address";
                      if (infowindow){
                        infowindow.open(map, marker);
                        infowindow.setContent(content);
                      } else {
                        $(this).gmap3({
                          infowindow:{
                            anchor:marker, 
                            options:{content: content}
                          }
                        });
                      }
                    }
                  }
                });
              }
            }
          },
          map:{
            options:{
              zoom: 5
            }
          }
        });
	}
	
};

/**
 * GoogleMap component prop types
 */
GoogleMap.propTypes = {
	id: React.PropTypes.string
	//center="41.381542, 2.122893"
	//zoom="15"
	//type="HYBRID"
	//style="width:100%;height:400px"
};

/**
 * Get GoogleMap component default props
 */
GoogleMap.defaultProps = {
	
};
