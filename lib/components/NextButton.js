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

var _NextIconSVG = require('./Icons');

var PropTypes = _React2['default'].PropTypes;
var Component = _React2['default'].Component;

var NextButton = (function (_Component) {
    function NextButton() {
        _classCallCheck(this, NextButton);

        if (_Component != null) {
            _Component.apply(this, arguments);
        }
    }

    _inherits(NextButton, _Component);

    _createClass(NextButton, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            var _props = this.props;
            var soundCloudAudio = _props.soundCloudAudio;
            var onNextClick = _props.onNextClick;

            soundCloudAudio && soundCloudAudio.next();
            onNextClick && onNextClick(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var className = _props2.className;
            var style = _props2.style;

            var classNames = _ClassNames2['default']('sb-soundplayer-play-btn', className);

            return _React2['default'].createElement(
                'button',
                { type: 'button', className: classNames, style: style, onClick: this.handleClick.bind(this) },
                _React2['default'].createElement(_NextIconSVG.NextIconSVG, null)
            );
        }
    }]);

    return NextButton;
})(Component);

NextButton.propTypes = {
    className: PropTypes.string,
    onNextClick: PropTypes.func,
    soundCloudAudio: PropTypes.instanceOf(_SoundCloudAudio2['default'])
};

exports['default'] = NextButton;
module.exports = exports['default'];