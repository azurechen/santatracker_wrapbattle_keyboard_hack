/**
 * left  (37) -> q(81), u(85)
 * up    (38) -> w(87), i(73)
 * downn (40) -> e(69), o(79)
 * right (39) -> r(82), p(80)
 */

var trigger = function(event, key) {
    var oEvent = document.createEvent('KeyboardEvent');
    Object.defineProperty(oEvent, 'keyCode', {
        get: function() {
            return this.keyCodeVal;
        }
    });
    Object.defineProperty(oEvent, 'which', {
        get : function() {
            return this.keyCodeVal;
        }
    });
    oEvent.initKeyboardEvent(event, true, true, document.defaultView, false, false, false, false, key, key);
    oEvent.keyCodeVal = key;
    document.dispatchEvent(oEvent);
}  

document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 81, 85: trigger("keydown", 37); break;
        case 87, 73: trigger("keydown", 38); break;
        case 69, 79: trigger("keydown", 40); break;
        case 82, 80: trigger("keydown", 39); break;
    }
});
document.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
        case 81, 85: trigger("keyup", 37); break;
        case 87, 73: trigger("keyup", 38); break;
        case 69, 79: trigger("keyup", 40); break;
        case 82, 80: trigger("keyup", 39); break;
    }
});
