//import url from "url"
//import axios from "axios";

const authorize_url ="/oauth2.0/authorize?client_id=key&response_type=code&";
const accessToken_url = "/oauth2.0/accessToken";
const key = "Authorization";

// LoginUtil.login(urlConfig.casUrl, urlConfig.callbackUrl);

var LoginUtil = {

	/**
	 * Re login again
	 */
	reLogin: function(){
		console.log("==reLogin==");
	},
	
	login: function(casUrl, callbackUrl){
		/*var currentUrl = window.location.href;
		var callbackUrlParam = `&redirect_uri=${callbackUrl}`
		var login_url = casUrl + authorize_url + callbackUrlParam
		
		var result = url.parse(currentUrl, ["code"]);
		var code = result.query.code;
		
		var token = localStorage.getItem(key);
		console.log("==============token=======");
		console.log(token);
		
		if(_.isEmpty(token)&&_.isEmpty(code)){
			console.log("go to login url ");
			window.location.href =login_url;
		} else if(!_.isEmpty(code)){
			axios.get(casUrl + accessToken_url, {
				params: {
					client_id: "key",
					client_secret: "secret",
					grant_type: "authorization_code",
					redirect_uri: callbackUrl,
					code: code
				}
			}).then(function (response) {
				console.log(response);
				localStorage.setItem(key, response.data)
			}).catch(function (response) {
				console.err(response);
			});
			
	   }*/
	},
	
	getAccessToken: function(){
		return localStorage.getItem(key);
	}
};


module.exports = LoginUtil;
