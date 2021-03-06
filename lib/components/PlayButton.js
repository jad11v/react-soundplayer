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

var _SoundCloudAudio = require('soundcloud-audio');

var _SoundCloudAudio2 = _interopRequireWildcard(_SoundCloudAudio);

var _PlayIconSVG$PauseIconSVG = require('./Icons');

var PropTypes = _React2['default'].PropTypes;
var Component = _React2['default'].Component;

var PlayButton = (function (_Component) {
    function PlayButton() {
        _classCallCheck(this, PlayButton);

        if (_Component != null) {
            _Component.apply(this, arguments);
        }
    }

    _inherits(PlayButton, _Component);

    _createClass(PlayButton, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            var _props = this.props;
            var playing = _props.playing;
            var seeking = _props.seeking;

            return playing !== nextProps.playing || seeking !== nextProps.seeking;
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            var _props2 = this.props;
            var playing = _props2.playing;
            var soundCloudAudio = _props2.soundCloudAudio;
            var onTogglePlay = _props2.onTogglePlay;

            if (!playing) {
                soundCloudAudio && soundCloudAudio.play();
            } else {
                soundCloudAudio && soundCloudAudio.pause();
            }

            onTogglePlay && onTogglePlay(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props;
            var playing = _props3.playing;
            var seekingIcon = _props3.seekingIcon;
            var seeking = _props3.seeking;
            var className = _props3.className;
            var style = _props3.style;

            var iconNode = undefined;
            if (seeking && seekingIcon) {
                iconNode = _React2['default'].cloneElement(seekingIcon);
            } else if (playing) {
                iconNode = _React2['default'].createElement(_PlayIconSVG$PauseIconSVG.PauseIconSVG, null);
            } else {
                iconNode = _React2['default'].createElement(_PlayIconSVG$PauseIconSVG.PlayIconSVG, null);
            }

            var classNames = _ClassNames2['default']('sb-soundplayer-play-btn', className);

            return _React2['default'].createElement(
                'button',
                { type: 'button', className: classNames, style: style, onClick: this.handleClick.bind(this) },
                iconNode
            );
        }
    }]);

    return PlayButton;
})(Component);

PlayButton.propTypes = {
    className: PropTypes.string,
    seeking: PropTypes.bool,
    playing: PropTypes.bool,
    onTogglePlay: PropTypes.func,
    seekingIcon: PropTypes.node,
    soundCloudAudio: PropTypes.instanceOf(_SoundCloudAudio2['default'])
};

PlayButton.defaultProps = {
    playing: false,
    seeking: false
};

exports['default'] = PlayButton;
module.exports = exports['default'];