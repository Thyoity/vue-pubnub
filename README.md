# VueJS 2 PubNub

A PubNub plugin for VueJS 2

## Why use it

To make PubNub instance available inside your components.

## How to use it

### Install using NPM using root privileges

sudo npm install --save vue-pubnub

### Set your VueJS 2 to use vue-pubnub plugin

~~~js
var Vue = require('vue');

Vue.use(require('vue-pubnub'), {
  subscribeKey: "mySubscribeKey", // Only the subscribeKey option is mandatory.
  publishKey: "myPublishKey",
  logVerbosity: true,
  ssl: true,
  presenceTimeout: 130
});
~~~

You can see all instance options in the [oficial documentation](https://www.pubnub.com/docs/web-javascript/api-reference#init).

### Initialize the PubNub instance

Once you set your VueJS 2 to use the vue-pubnub plugin, now you need to initialize it using the .load() method inside your main component.

~~~js
export default {
  created () {
    this.pubnub.load();
  }
}
~~~

### Subscribe to channels

Now you need to subscribe to those channels you want to listen.
Please make sure that you already initialized the PubNub instance using this.pubnub.load(). 

~~~js
export default {
  mounted () {
    this.$pubnub.subscribe({
      channels: ['hello_world'] 
    });
  }
}
~~~

### Add listeners

~~~js
export default {
  mounted () {
    
    // ... Subscribed to channels in the previous step
    
    this.$pubnub.addListener({
      status: function(statusEvent) {
        if (statusEvent.category === "PNConnectedCategory") {
          // handle status
        }
      },
      message: function(message) {
        console.log("New Message!", message);
      },
      presence: function(presenceEvent) {
        // handle presence
      }
    })   
  }
}
~~~

## Additional informations

Note that inside components, this.pubnub references the vue-pubnub plugin instance, and this.$pubnub references the PubNub instance. You can see all PubNub instance available methods and options in the [oficial documentation](https://www.pubnub.com/docs/web-javascript/data-streams-publish-and-subscribe).

### Support

Contact me if you need any help: thyoity@gmail.com
