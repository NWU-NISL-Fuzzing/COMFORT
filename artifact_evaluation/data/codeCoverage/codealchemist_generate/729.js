var v0 = (function (v1){
if((this._frame) && (! this.isFrameClosed())){
this._frame.redirect(v1);
}
});
(v0.prototype._onCancelCropButtonClick) = (function (){
this.cropper.success();
});
(v0.prototype.getStrideSize) = (function (){
return this._strideSize;
});
var v1 = (function (v1){
if((this.LODs.length) > (1)){
v1.matrixWorldInverse.getInverse(v1.matrixWorld);
var v2 = v1.matrixWorldInverse;
var v3 = - ((((v2.elements[2]) * (this.matrixWorld.elements[12])) + ((v2.elements[6]) * (this.matrixWorld.elements[13]))) + ((v2.elements[10]) * (this.matrixWorld.elements[14]))) + (v2.elements[14]);
(this.LODs[0].object3D.visible) = true;
for(var v4 = 1;(v4) < (this.LODs.length);v4++){
if((v3) >= (this.LODs[v4].visibleAtDistance)){
(this.LODs[(v4) - (1)].object3D.visible) = false;
(this.LODs[v4].object3D.visible) = true;
}else {
break ;
}
}
for(;(v4) < (this.LODs.length);v4++){
(this.LODs[v4].object3D.visible) = false;
}
}
});
var v2 = (function (v1, v2, v3, v4){
return ((((v3) * ((v1) /= v4)) * (v1)) * (v1)) + (v2);
});
(v0.prototype) = ((v1) === (null)) ? (Object.create(v1)) : (((v2.prototype) = v1.prototype, new v2()));
Object.defineProperties(v2.prototype, ({features : ({get : (function (){
return this._features;
})}), bbox : ({get : (function (){
return this._bbox;
})})}));
var v3 = (function (){
return ({'position' : ({"x" : - 72, "y" : - 150, "w" : 134, "h" : 141}), 'thumb' : "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM\/rhtAAAJaElEQVR42u2Ye0zTWRbHZ3eTSSbR\nuLuzs8lmR+g4oogKIhSoPMqrKMgbCsKCiAKKOKLiY0S0PAQEgTKKaIHS8iq0gFXeAqW8wScigzo+\nwFFmMnEyYU3GmH0k3733h+2IqDx0Zv\/xJt\/87v21\/f0+95xzzz23H3zwvr1v79tv1wAsqGu4ENKi\n7hD0Xb7KaGBoWPDdjz8Jui5eNPp\/guleGxoyOldbr5QUlUAmV6CisholZeWQFpciLDwcCQkJ41Kp\nVB0vEOBCY+NAaUmJukqhUIrFYkldTY3wV4O7cn1w\/PL1wdH7Y2N49Pgxbt69h8Fbt9HZ24ek5BT4\n+PjC28sLCfHx2L1rF2IPHkShWAy+ry+Sjx7FFzt2IDAgAG5ubsp3DvcfgFtWrkBTs2qSVO2dKCuX\nYxcBqlEq0a5SoaWpCTXnzqFAJIIwMxOFBQWMoiIjweFwsM7ZGcbGxtx359bvY3SHLqVK8grEaGvv\ngpy4VJSXT1SAUlkFcnLPgMfjIT8vD2ICIi0sRElREWSlpaiQyVApl+NsVRU8PTyIlX3g5+ePM2kc\ndFaa4U6HDdTlBoK5gY2f4P774TbJlSZvtJZboUriC9X5KCgkm3HymAtqK\/agvfkMas9mIMDXHAmH\nQpF+dDuOCsJxJG4\/jUUcS01FdlYWvhIKYWlpifUuLgjd6IVmmT3aZCtQeYpFNTfAsSu+6jvtHLys\nh\/3cKXrQaz1JP1xzxKOLdhhutdTqfg8Pjy6742o9hwETp7EgPf4WgCO9a9UjvTZ4l7qj5qBdvpoB\nPJXIQl4qC4pTrOg5Ad5sZavvdHBwr8tqyov66j0Y9da5o6fWDd01rhhs5b0WjD7jloqNmy2mqC\/U\nQ3HWBOCZowQwlzW7BfPsrhf36U0r5T9vrBnvrmbjZJofkgXByMnagYrieGQLU5CcnIzExEQcOnQI\nYWFh8CALgKQPZCQ4oUXuMNlqZJIU7H6HGSMKWJY9Yb2iDNbozBbEfZMFP9+yDHl6y37gtmo1rjWs\ngTDFD9HR0SSnbSUpIwVJSYdRWVmJjLS9yM+NReTWEAbqRbmQRWBnZ8csCHNzc7it50KR74UnX9vi\nYQ8bTUV6DODzxYGqHFbItHD\/Gg0U\/DxsNf7TgAXqi7lITwrB\/v37ERMTg30xUdgS6oGmEivsiHDE\nqVRr1BexERdjg7x0awbK3d0drq6ucHJygoODA7hcLtzXr0GWwBzX6s3w41ULqMqWaqE0gIqcaaz3\n37GYkKffrBt9cmMNbjRb4VJTEFqVe9BcvQtNlTvRoNiBElEUso\/vRWbaHqSnRONwbCSCgoIQQHYE\nPp8PL7JzUEBqOQrI97KDQsTDkxuWDFhvtYEWTCPZV7ozs96DPmcSG8boVxqB9l\/W2CUXki7WT9J3\n\/WZ4fM0e41+748ntjfj+Kh9d1dborLJCd20Qnt7bhEd9a9Ap158CplFxps701nsRsKdqGXPVqKlI\nn9xbiYvnDBldqzPCQP0vulJjOOn7GmmeV1+4+LVwjOVyP6eA6jkDVuUuJjGzAh0kX91U2ZGE64i+\ns4bMPapGqcEbAZukelOgFDm6kGXrQpqhgzqx3swA73bYjL4JsF+5EtcbTPGg24T0VxDLGWkh3wTY\nXjHZveUk5oqOT0ictnDmgMPNq9RvArzZthbf9lqgQbKUgaSung0gtVpp1i9wVLmJn6JUqEt3j4G3\nBuyoWIFbrcaM9e60GePSOcNZARYTd74IR5WfshCSdB3m8zkDNkqX4vL5VVq1yZYTt+hr4WoL9GcE\nWJKpOwVQfEyHAC58O8C+xnCo5Lba8f0OE61uqe0wpPJ4JeDdDuvXApaSvvwEsSrpF6ZNACpEixbM\nGvBcWRS8vV1x8ngEVMpwtFYFolvJQ2ulJ0RZfERFbcG6dQ4MxKsgqdrK9MnCoC6egCujMXeSxcQj\nda8WcLoiQQPYpXjhZd2R2PlFOGL2RDJKSjwAYVYSsjKTsDk0kFTFzkjaZ4Dq059hqMnotYAyUgwU\nEndSONqnosCStAnA08lL4O\/DVc4IUFWmN+kFXVWrUHLCAuJsF+RnezJKPMBBdoIhCtKWadNHl2LZ\nFLjhZvq8CUBqRXqlkBROSqxXkKqDsGA2s2cH+DmOjvR4684acMKqy5gd4XWiyfhq7copcDcajdFS\noj8JjLqZujY3iYUgPhv29vbwcrdFRa4pqa6tBHMCnIso3GCDMToVbO3imIg5HRyPXQw3ZzOmBNvg\nzSZnHDOyUy1Do4Q1PWDf2eUY7V7D6F6HOSnL2fimzXROgNfrjcmL2UysUXdSRYetgpWVFUxMTLAv\nihQSlTThf053GPWxA3969UoWiUQLrjeaD0x90WoGUKORbjuS31ww0uOMHwZD8eiSF9O\/28ElssRo\nL0\/73YE6Y6LVUFeYMmC5pKQP5FvC1tYWXBsLFJ3gkfBYREJgCeQndd58UAoPD+dGRESAXBG1zR9x\n+3wg+NIPiYc2ICN5CxJjPVCYvR6n03koyOSiTmqB82IzXChhay1FRYFellK0lLhUDx5utky8+fvY\noaHYmoFrkOgNtZWtNpk2SXdV2wqOHV6LkH84ISKUR3LbOuZcQQ\/WtBilCgwMZIrTkJAQ7T16\/ggO\nDmbk7+\/PFK07SG7cvm0TUuJcUSD0ROwuW7g42zNuPbLPidSKbAauXrxI2avg\/HlGZxARKde7qjgo\nyg1G4clgDHdGYOyyG5mpJRK\/JLtIuyd6qjkQZazD4QN85Gd54WisG3ZG2GH3dkc4OzvD09OTqai9\nvb2xYcMGZgL0So8BjvZWSD9sgZr8zzSWO9Ey3c6haTu3btLz9XFEQ\/lapFZsQWkOD5FbrDHcYoYr\ndeYICnBAdpI1RjrN0CLjIDXORjtWnLEE\/W3ZKXt822OOuiIuDu7lQyx0RafSA93nvSDLC4CcpBAF\nc\/5YRFLOIvqP1kczPVX+gc931dm4gZMoEdoIeoiru6qdBKtX6Us2+hv291QZPaNQHiRPFWaa4rbK\nlIEM32TPXDWQ+3faasd0AnRMJ6cZS44vJFURCw1S\/VIAv5vtmXwe0Yca4Of6WPMZeeDvycr7o5HB\nvOUHti6MK8pcIXB0tIjfttkmNfvwktoj0br9nq7LB6O2sJ9dqjFjJhGznYOocC4DST2Rl\/opcuL\/\nLpw\/f\/5ffu3\/LD96PoGX21+J\/vZ8oh+GhoZ+YmBgMG+93cfe8dE6ot2bP\/F7YdIzav8DeqSqTwnX\nR9UAAAAASUVORK5CYII="});
});
