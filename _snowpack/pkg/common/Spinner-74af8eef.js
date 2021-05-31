import { r as react } from './index-09a9c4ff.js';
import { p as propTypes } from './index-8de1816d.js';
import { c as classnames } from './index-5100710e.js';

var _excluded = ["className", "large"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Spinner = function Spinner(_ref) {
  var className = _ref.className,
      large = _ref.large,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react.createElement("span", _extends({
    className: classnames('ffe-loading-spinner', {
      'ffe-loading-spinner--large': large
    }, className)
  }, rest));
};

Spinner.propTypes = {
  className: propTypes.string,
  large: propTypes.bool
};
Spinner.defaultProps = {
  large: false
};

export { Spinner as S };
