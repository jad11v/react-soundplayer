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

var _SoundCloudLogoSVG = require('./Icons');

var PropTypes = _React2['default'].PropTypes;
var Component = _React2['default'].Component;

var Cover = (function (_Component) {
    function Cover() {
        _classCallCheck(this, Cover);

        if (_Component != null) {
            _Component.apply(this, arguments);
        }
    }

    _inherits(Cover, _Component);

    _createClass(Cover, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var backgroundUrl = _props.backgroundUrl;
            var trackName = _props.trackName;
            var artistName = _props.artistName;
            var className = _props.className;
            var style = _props.style;
            var children = _props.children;

            var classNames = _ClassNames2['default']('sb-soundplayer-cover', className);

            return _React2['default'].createElement(
                'div',
                { className: classNames, style: Object.assign(style, { backgroundImage: 'url(' + backgroundUrl + ')' }) },
                _React2['default'].createElement(
                    'div',
                    null,
                    _React2['default'].createElement(_SoundCloudLogoSVG.SoundCloudLogoSVG, null)
                ),
                _React2['default'].createElement(
                    'div',
                    null,
                    _React2['default'].createElement(
                        'span',
                        { className: 'sb-soundplayer-track sb-soundplayer-info-box' },
                        trackName
                    )
                ),
                _React2['default'].createElement(
                    'div',
                    null,
                    _React2['default'].createElement(
                        'span',
                        { className: 'sb-soundplayer-artist sb-soundplayer-info-box' },
                        'by ',
                        artistName
                    )
                ),
                _React2['default'].Children.map(children, _React2['default'].cloneElement)
            );
        }
    }]);

    return Cover;
})(Component);

Cover.propTypes = {
    className: PropTypes.string,
    backgroundUrl: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired
};

exports['default'] = Cover;
module.exports = exports['default'];