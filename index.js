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
function VuePubNub (subscribeKey, options) {
    this.pubnubInstance;
    this.initialized = false;
    this.configs = {
        subscribeKey: subscribeKey
    };
    for (var attribute in options) {
        if(options.hasOwnProperty(attribute)) this.configs[attribute] = options[attribute];
    }
}

VuePubNub.prototype.load = function () {
    this.pubnubInstance = new PubNub(this.configs);
    this.initialized = true;
}

VuePubNub.prototype.isInitialized = function () {
    return this.initialized;
}

VuePubNub.prototype.setOptions = function (options) {
    for (var attribute in options) {
        if(options.hasOwnProperty(attribute)) this.configs[attribute] = options[attribute];
    }
    this.load();
}

module.exports = {
    install: function (Vue, options) {
        var pluginInstance = new VuePubNub(options.subscribeKey, options.options);
        Vue.prototype.pubnub = pluginInstance;
        Vue.prototype.$pubnub = pluginInstance.pubnubInstance;
    }
};