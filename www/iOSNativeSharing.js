//
//  iOSNativeSharing.js
//
//  Cameron Lerch
//  Sponsored by Brightflock: http://brightflock.com
//

function iOSNativeSharing() {
};

iOSNativeSharing.prototype.available = function(callback) {
	cordova.exec(function(avail) {
		callback(avail ? true : false);
	}, null, "iOSNativeSharing", "available", []);
};

iOSNativeSharing.prototype.share = function(message, url, image) {
    cordova.exec(null, null, "iOSNativeSharing", "share", [message, image, url]);
};
    
iOSNativeSharing.install = function() {
    if (!window.plugins) {
        window.plugins = {};	
    }

    window.plugins.iOSNativeSharing = new iOSNativeSharing();
    return window.plugins.iOSNativeSharing;
};

cordova.addConstructor(iOSNativeSharing.install);
