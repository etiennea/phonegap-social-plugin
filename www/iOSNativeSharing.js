//
//  iOSNativeSharing.js
//
//  Cameron Lerch
//  Sponsored by Brightflock: http://brightflock.com
//

function iOSNativeSharing() {
};

function validUrl(s) {
	var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
	return regexp.test(s);
}

iOSNativeSharing.prototype.available = function(callback) {
	cordova.exec(function(avail) {
		callback(avail ? true : false);
	}, null, "iOSNativeSharing", "available", []);
};

iOSNativeSharing.prototype.share = function(message, url, image) {
	if validUrl(url) {
    		cordova.exec(null, null, "iOSNativeSharing", "share", [message, image, url]);
	} else {
		url = "http://" + url;
		cordova.exec(null, null, "iOSNativeSharing", "share", [message, image, url]);
	}
};
    
iOSNativeSharing.install = function() {
    if (!window.plugins) {
        window.plugins = {};	
    }

    window.plugins.iOSNativeSharing = new iOSNativeSharing();
    return window.plugins.iOSNativeSharing;
};

cordova.addConstructor(iOSNativeSharing.install);
