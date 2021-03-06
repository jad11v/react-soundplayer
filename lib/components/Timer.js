'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _ClassNames = require('classnames');

var _ClassNames2 = _interopRequireWildcard(_ClassNames);

var PropTypes = _React2['default'].PropTypes;
var Component = _React2['default'].Component;

var Timer = (function (_Component) {
    function Timer() {
        _classCallCheck(this, Timer);

        if (_Component != null) {
            _Component.apply(this, arguments);
        }
    }

    _inherits(Timer, _Component);

    _createClass(Timer, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var duration = _props.duration;
            var currentTime = _props.currentTime;
            var className = _props.className;
            var style = _props.style;

            var classNames = _ClassNames2['default']('sb-soundplayer-timer', className);

            return _React2['default'].createElement(
                'div',
                { className: classNames, style: style },
                Timer.prettyTime(currentTime),
                ' / ',
                Timer.prettyTime(duration)
            );
        }
    }], [{
        key: 'prettyTime',
        value: function prettyTime(time) {
            var hours = Math.floor(time / 3600);
            var mins = '0' + Math.floor(time % 3600 / 60);
            var secs = '0' + Math.floor(time % 60);

            mins = mins.substr(mins.length - 2);
            secs = secs.substr(secs.length - 2);

            if (!isNaN(secs)) {
                if (hours) {
                    return '' + hours + ':' + mins + ':' + secs;
                } else {
                    return '' + mins + ':' + secs;
                }
            } else {
                return '00:00';
            }
        }
    }]);

    return Timer;
})(Component);

Timer.propTypes = {
    className: PropTypes.string,
    duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currentTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Timer.defaultProps = {
    duration: 0,
    currentTime: 0
};

exports['default'] = Timer;
module.exports = exports['default'];