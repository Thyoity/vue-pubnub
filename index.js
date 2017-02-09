/**
 * Importing PubNub javascript library
 */
var PubNub = require('pubnub');

/**
 * VuePubNub class.
 *
 * @param {Object} options
 * @param {VuePubNub.pubnubInstance} pubnubInstance
 */
function VuePubNub (options, pubnubInstance) {
    this.pubnubInstance = pubnubInstance;
    this.initialized = false;
    this.options = options;
}

VuePubNub.prototype.load = function () {
    this.pubnubInstance(new PubNub(this.options));
    this.initialized = true;
};

VuePubNub.prototype.isInitialized = function () {
    return this.initialized;
};

VuePubNub.prototype.setOptions = function (options) {
    this.options = options;
    this.load();
};

module.exports = {
    install: function (Vue, options) {
        Vue.prototype.pubnub = new VuePubNub(options, function(instance){
        	Vue.prototype.$pubnub = instance;
        });
    }
};