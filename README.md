# Cordova / PhoneGap iOS Native Sharing Plugin #

---
### [This plugin is hosted by the author](https://github.com/bfcam/phonegap-ios-social-plugin)
---

## DESCRIPTION ##

This plugin integrates with the iOS6+ social framework to provide social sharing. Features are only available on devices with iOS6+.
It relies on iOS's social native sharing framework. The plugin can be seen as a lightweight alternative to the very heavy ShareKit.


## REQUIREMENTS ##

* iOS6+
* Social.framework
* PhoneGap / Cordova 3

## AUTOMATIC INSTALLATION VIA CORDOVA CLI ##

1. cordova platform add ios
2. cordova plugin add https://github.com/bfcam/phonegap-ios-social-plugin
3. cordova build


## MANUAL INSTALLATION ##

* In Xcode, drag the *.m and *.h files into your project under the Cordova "Plugins" directory.
* Ensure that Xcode is set to copy the files if required.

* Open the "Resources/Cordova.plist" file and under "Plugins" add a key with the plugin name "Social" and a string value of "Social".

* Add Social.framework to your Xcode project as "Optional". To do this (Tested in Xcode 4.6), click on your project in the project navigator
  then select you app build target in the main window. Select the "Build Phases" tab. Expand "Link Binary With Libraries". Click the "+" and
  add "Social.framework" (under the iOS 6.x+ section). Mark the framework as being "Optional" (It will default to "Required"). Drag the
  "Social.framework" resource to sit under "Frameworks" in your project navigator.

* Copy social.js to your www directory and include it in your index.html.


## TUTORIAL ##

* Check first if "iOSNativeSharing" can be used, it required iOS6+.

```
window.plugins.iOSNativeSharing.available(function(avail) {
  if (avail) {
    // Show sharing endpoints
  } else {
    // Sharing not not supported
  }
});
```

* Once you have checked that Social is available you can allow for sharing.
* To do this setup a button within your Cordova app that when triggered does something like this:

```
window.plugins.iOSNativeSharing.share('$MESSAGE', '$URL', '$IMAGE');
```

$MESSAGE and $URL are arbitrary strings.
URLs are tested for validity, if they do not contain any protocol, "http://" will be prepended.
The image is a file on the device itself.
Sharing Image URLs ist untested, but should work.

The share services that are available are dictated by what has been setup in the iOS device settings by the user.
Here is what the share screen looks like:

![ScreenShot](https://raw.github.com/bfcam/phonegap-ios-social-plugin/master/screenshot.png)


## CREDITS ##

Contributors :

* [Cameron Lerch](http://brightflock.com), author. Sponsored by Brightflock.

* [Sidney Bofah](http://neofonie-mobile.de)
