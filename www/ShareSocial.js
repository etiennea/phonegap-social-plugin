// Updated by Etienne Adriaenssen on 2013-09-07
//
// All rights reserved.
// MIT Licensed


var exec = require('cordova/exec');

var ShareSocial = function(){}

ShareSocial.prototype.available = function(callback) {
	cordova.exec(function(avail) {
		callback(avail ? true : false);
	}, null, "ShareSocial", "available", []);
};

ShareSocial.prototype.share = function(message, image, url, title, successCallback, failCallback) {

	function success(args) {
		console.log(args);
		successCallback && successCallback(args);
	}

	function fail(args) {
		failCallback && failCallback(args);
	}

	return cordova.exec(function(args) {
		success(args);
	}, function(args) {
		fail(args);
	}, 'ShareSocial', 'share', [message, image || "", url]);
};

module.exports = new ShareSocial();
