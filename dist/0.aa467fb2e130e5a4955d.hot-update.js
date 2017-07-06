webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _FunctionSearch = __webpack_require__(1256);\n\nvar _FunctionSearch2 = _interopRequireDefault(_FunctionSearch);\n\nvar _FunctionInfo = __webpack_require__(1302);\n\nvar _FunctionInfo2 = _interopRequireDefault(_FunctionInfo);\n\nvar _reactSplitPane = __webpack_require__(1296);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nvar _index = __webpack_require__(167);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar RightPane = function RightPane(_ref) {\n  var dispatch = _ref.dispatch,\n      variables = _ref.variables,\n      doc = _ref.doc,\n      minimizeState = _ref.minimizeState;\n\n  var sizeP = void 0;\n  if (minimizeState.docs === true) {\n    sizeP = \"100%\";\n  } else {\n    sizeP = \"50%\";\n  }\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactSplitPane2.default,\n      { split: 'horizontal', defaultSize: '30%' },\n      _react2.default.createElement(\n        'div',\n        { className: 'variableTable' },\n        _react2.default.createElement(\n          'div',\n          { className: 'title' },\n          'Current Variables'\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          _.map(_.sortBy(variables, function (v) {\n            return v.order;\n          }), function (x) {\n            return _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'span',\n                { className: 'three_quarter name' },\n                x.name\n              ),\n              _react2.default.createElement(\n                'span',\n                { className: 'quarter' },\n                x.value\n              )\n            );\n          })\n        )\n      ),\n      _react2.default.createElement(\n        _reactSplitPane2.default,\n        { className: 'secondSplit', split: 'horizontal', defaultSize: sizeP },\n        _react2.default.createElement(_FunctionSearch2.default, null),\n        _react2.default.createElement(_FunctionInfo2.default, null)\n      )\n    ),\n    _react2.default.createElement(\n      'button',\n      { className: 'minButton', onClick: function onClick() {\n          return dispatch((0, _index.toggleDocs)(minimizeState));\n        } },\n      'Minimize'\n    )\n  );\n};\n\nRightPane.propTypes = {\n  variables: _react.PropTypes.arrayOf(_react.PropTypes.any),\n  doc: _react.PropTypes.any,\n  minimizeState: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    variables: state.variables,\n    doc: state.docs,\n    minimizeState: state.minimizeState\n  };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwiUmlnaHRQYW5lIiwiZGlzcGF0Y2giLCJ2YXJpYWJsZXMiLCJkb2MiLCJtaW5pbWl6ZVN0YXRlIiwic2l6ZVAiLCJkb2NzIiwibWFwIiwic29ydEJ5IiwidiIsIm9yZGVyIiwieCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsQzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBSUMsWUFBWSx5QkFBaUQ7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDO0FBQUEsTUFBcENDLFNBQW9DLFFBQXBDQSxTQUFvQztBQUFBLE1BQXpCQyxHQUF5QixRQUF6QkEsR0FBeUI7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9COztBQUMvRCxNQUFJQyxjQUFKO0FBQ0EsTUFBSUQsY0FBY0UsSUFBZCxLQUF1QixJQUEzQixFQUFnQztBQUM5QkQsWUFBUSxNQUFSO0FBQ0QsR0FGRCxNQUdJO0FBQ0ZBLFlBQVEsS0FBUjtBQUNEO0FBQ0QsU0FBUTtBQUFBO0FBQUE7QUFDUjtBQUFBO0FBQUEsUUFBVyxPQUFNLFlBQWpCLEVBQThCLGFBQVksS0FBMUM7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBREo7QUFFSTtBQUFBO0FBQUE7QUFDSU4sWUFBRVEsR0FBRixDQUFNUixFQUFFUyxNQUFGLENBQVNOLFNBQVQsRUFBb0IsVUFBQ08sQ0FBRCxFQUFPO0FBQy9CLG1CQUFPQSxFQUFFQyxLQUFUO0FBQ0gsV0FGTyxDQUFOLEVBR0EsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0gsbUJBQU87QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFNLFdBQVUsb0JBQWhCO0FBQXVDQSxrQkFBRUM7QUFBekMsZUFBSjtBQUEwRDtBQUFBO0FBQUEsa0JBQU0sV0FBVSxTQUFoQjtBQUE0QkQsa0JBQUVFO0FBQTlCO0FBQTFELGFBQVA7QUFDSCxXQUxEO0FBREo7QUFGSixPQURGO0FBWUU7QUFBQTtBQUFBLFVBQVcsV0FBVSxhQUFyQixFQUFtQyxPQUFNLFlBQXpDLEVBQXNELGFBQWFSLEtBQW5FO0FBQ0UscUVBREY7QUFFRTtBQUZGO0FBWkYsS0FEUTtBQWtCUjtBQUFBO0FBQUEsUUFBUSxXQUFVLFdBQWxCLEVBQThCLFNBQVM7QUFBQSxpQkFBTUosU0FBUyx1QkFBV0csYUFBWCxDQUFULENBQU47QUFBQSxTQUF2QztBQUFBO0FBQUE7QUFsQlEsR0FBUjtBQW9CRCxDQTVCRDs7QUErQkFKLFVBQVVjLFNBQVYsR0FBc0I7QUFDbEJaLGFBQVcsaUJBQVVhLE9BQVYsQ0FBa0IsaUJBQVVDLEdBQTVCLENBRE87QUFFbEJiLE9BQUssaUJBQVVhLEdBRkc7QUFHbEJaLGlCQUFlLGlCQUFVWTtBQUhQLENBQXRCOztBQU1BLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDaENoQixlQUFXZ0IsTUFBTWhCLFNBRGU7QUFFaENDLFNBQUtlLE1BQU1aLElBRnFCO0FBR2hDRixtQkFBZWMsTUFBTWQ7QUFIVyxHQUFaO0FBQUEsQ0FBeEI7O0FBTUFKLFlBQVkseUJBQVFpQixlQUFSLEVBQXlCakIsU0FBekIsQ0FBWjs7a0JBRWVBLFMiLCJmaWxlIjoiNDI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRnVuY3Rpb25TZWFyY2ggZnJvbSAnLi9GdW5jdGlvblNlYXJjaCc7XG5pbXBvcnQgRnVuY3Rpb25JbmZvIGZyb20gJy4vRnVuY3Rpb25JbmZvJztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5pbXBvcnQgeyB0b2dnbGVEb2NzIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5cblxubGV0IFJpZ2h0UGFuZSA9ICh7IGRpc3BhdGNoLCB2YXJpYWJsZXMsIGRvYywgbWluaW1pemVTdGF0ZSB9KSA9PiB7XG4gIGxldCBzaXplUDtcbiAgaWYgKG1pbmltaXplU3RhdGUuZG9jcyA9PT0gdHJ1ZSl7XG4gICAgc2l6ZVAgPSBcIjEwMCVcIjtcbiAgfVxuICBlbHNle1xuICAgIHNpemVQID0gXCI1MCVcIjtcbiAgfVxuICByZXR1cm4gKDxkaXY+XG4gIDxTcGxpdFBhbmUgc3BsaXQ9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNpemU9XCIzMCVcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhYmxlVGFibGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkN1cnJlbnQgVmFyaWFibGVzPC9kaXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7IF8ubWFwKF8uc29ydEJ5KHZhcmlhYmxlcywgKHYpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHYub3JkZXI7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgICAoeCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PHNwYW4gY2xhc3NOYW1lPVwidGhyZWVfcXVhcnRlciBuYW1lXCI+eyB4Lm5hbWUgfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJxdWFydGVyXCI+eyB4LnZhbHVlIH08L3NwYW4+PC9saT47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8U3BsaXRQYW5lIGNsYXNzTmFtZT1cInNlY29uZFNwbGl0XCIgc3BsaXQ9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNpemU9e3NpemVQfT5cbiAgICAgIDxGdW5jdGlvblNlYXJjaCAvPlxuICAgICAgPEZ1bmN0aW9uSW5mbyAvPlxuICAgIDwvU3BsaXRQYW5lPlxuICA8L1NwbGl0UGFuZT5cbiAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtaW5CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh0b2dnbGVEb2NzKG1pbmltaXplU3RhdGUpKX0+TWluaW1pemU8L2J1dHRvbj5cbiAgPC9kaXY+KTtcbn07XG5cblxuUmlnaHRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICB2YXJpYWJsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgIGRvYzogUHJvcFR5cGVzLmFueSxcbiAgICBtaW5pbWl6ZVN0YXRlOiBQcm9wVHlwZXMuYW55XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdmFyaWFibGVzOiBzdGF0ZS52YXJpYWJsZXMsXG4gICAgZG9jOiBzdGF0ZS5kb2NzLFxuICAgIG1pbmltaXplU3RhdGU6IHN0YXRlLm1pbmltaXplU3RhdGVcbn0pO1xuXG5SaWdodFBhbmUgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmlnaHRQYW5lKTtcblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRQYW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvUmlnaHRQYW5lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})