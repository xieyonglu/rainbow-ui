//-----------------------------------------------------------------------------------------------
//	date: 2015/12/27
//	
//	author: yonglu.xie
//	
//	description: BaiduMap Component Class
//-----------------------------------------------------------------------------------------------
export default class BaiduMap extends React.Component {
	
	/**
   * @constructor
   * @id {String} the id to create DOM id
   */
  constructor(props) {
  	super(props);
    this.id = props.id || "allmap";
  }
  
  /**
   * @method componentDidMount
   */
  componentDidMount() {
    this.initBodyMapCallBack();
    this.loadBodyMap();
  }
  
  /**
   * @method render
   */
  render() {
    return <div id={this.id} {...this.props} />;
  }
  
  /**
   * @description: Asynchronous loading baidu maps
   */
  loadBodyMap() {
  	let script = document.createElement("script");
  	script.type = "text/javascript";
  	script.src = "http://api.map.baidu.com/api?ak=" + BaiduMap.AK + "&callback=MapCallback";
  	document.body.appendChild(script);
  }
  
  /**
   * @description: Set map callback function
   */
  initBodyMapCallBack() {
  	var _self = this;
  	
  	window.MapCallback = function(){
  		_self._map = new BMap.Map(_self.id);
  		_self._map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
  		
  		_self._local = new BMap.LocalSearch(_self._map, {
  			renderOptions: {map: _self._map},
  			onInfoHtmlSet: poi => {
  				if(typeof _self.props.onSelect === "function"){
  					_self.props.onSelect(poi.marker.getPosition());
  				}
  			}
  		});
  	}
  }
  
  /**
   * @method search
   * @param {String} text - the search keyword
   */
  search(text) {
    this._local.search(text);
  }
}

BaiduMap.MapAPI = "http://api.map.baidu.com/api";
BaiduMap.AK = "gd0GyxGUxSCoAbmdyQBhyhrZ";

/**
 * Camera component prop types
 */
//BaiduMap.propTypes = {
  /**
   * the id to create DOM id
   */
   
//  id: React.PropTypes.string,
  /**
   * this function will be fired when user click a marker and the info bubble is shown
   */
//  onSelect: React.PropTypes.func
//};

/**
 * Get BaiduMap component default props
 */
//BaiduMap.defaultProps = {
	
//};
