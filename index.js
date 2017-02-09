/**
 * Importing pusher
 */
var PubNub = require('pubnub');

/**
 * VuePubNub class.
 *
 * @param {String} subscribeKey
 * @param {Object} options
 */
function VuePubNub (options) {
    this.pubnubInstance;
    this.initialized = false;
    this.options = options;
}

VuePubNub.prototype.load = function () {
    this.pubnubInstance = new PubNub(this.options);
    this.initialized = true;
}

VuePubNub.prototype.isInitialized = function () {
    return this.initialized;
}

VuePubNub.prototype.setOptions = function (options) {
    this.options = options;
    this.load();
}

module.exports = {
    install: function (Vue, options) {
        var pluginInstance = new VuePubNub(options);
        Vue.prototype.pubnub = pluginInstance;
        Vue.prototype.$pubnub = pluginInstance.pubnubInstance;
    }
};