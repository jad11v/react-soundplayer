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

var _SoundCloudAudio = require('soundcloud-audio');

var _SoundCloudAudio2 = _interopRequireWildcard(_SoundCloudAudio);

var _ClassNames = require('classnames');

var _ClassNames2 = _interopRequireWildcard(_ClassNames);

var PropTypes = _React2['default'].PropTypes;
var Component = _React2['default'].Component;

var Progress = (function (_Component) {
    function Progress() {
        _classCallCheck(this, Progress);

        if (_Component != null) {
            _Component.apply(this, arguments);
        }
    }

    _inherits(Progress, _Component);

    _createClass(Progress, [{
        key: 'handleSeekTrack',
        value: function handleSeekTrack(e) {
            var _props = this.props;
            var onSeekTrack = _props.onSeekTrack;
            var soundCloudAudio = _props.soundCloudAudio;

            var xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

            if (soundCloudAudio && !isNaN(soundCloudAudio.audio.duration)) {
                soundCloudAudio.audio.currentTime = xPos * soundCloudAudio.audio.duration;
            }

            onSeekTrack && onSeekTrack.call(this, xPos, e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var value = _props2.value;
            var className = _props2.className;
            var innerClassName = _props2.innerClassName;
            var style = _props2.style;
            var innerStyle = _props2.innerStyle;

            if (value < 0) {
                value = 0;
            }

            if (value > 100) {
                value = 100;
            }

            var classNames = _ClassNames2['default']('sb-soundplayer-progress-container', className);
            var innerClassNames = _ClassNames2['default']('sb-soundplayer-progress-inner', innerClassName);
            innerStyle = Object.assign(innerStyle, { width: '' + value + '%' });

            return _React2['default'].createElement(
                'div',
                { className: classNames, style: style, onClick: this.handleSeekTrack.bind(this) },
                _React2['default'].createElement('div', { className: innerClassNames, style: innerStyle })
            );
        }
    }]);

    return Progress;
})(Component);

Progress.propTypes = {
    className: PropTypes.string,
    innerClassName: _React2['default'].PropTypes.string,
    innerStyle: PropTypes.object,
    value: _React2['default'].PropTypes.number,
    onSeekTrack: PropTypes.func,
    soundCloudAudio: PropTypes.instanceOf(_SoundCloudAudio2['default'])
};

Progress.defaultProps = {
    value: 0
};

exports['default'] = Progress;
module.exports = exports['default'];