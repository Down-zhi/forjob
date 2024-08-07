var PubSub = function() {
    this.list = {};
  };
  //给订阅者提供订阅的方法
  PubSub.prototype.subscribe = function(key, callback) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(callback);
  };
  //发布消息的功能
  PubSub.prototype.publish = function(key, args) {
    var fns = this.list[key];
    // 如果没有订阅过该消息的话，则返回
    if (!fns || fns.length === 0) {
      return;
    }
    var len = fns.length;
    while (len--) {
      fns[len].apply(this, args);
    }
  };
  // 取消订阅
  PubSub.prototype.unsubscribe = function(key, fn) {
    var fns = this.list[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      // 将fn删除
      var len = fns.length;
      while (len--) {
        if (fns[len] === fn) {
          fns.splice(len, 1);
        }
      }
    }
  };
  var pubsub = new PubSub();
  pubsub.subscribe("msg", cbFun);
  function cbFun() {
    console.log("hello word!");
  }
  function asyncFun() {
    setTimeout(() => {
      pubsub.publish("msg");
    }, 3000);
  }
  asyncFun();