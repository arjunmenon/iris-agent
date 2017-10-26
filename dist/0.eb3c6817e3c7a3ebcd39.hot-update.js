webpackHotUpdate(0,{

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(31);\n\nvar _lodash = __webpack_require__(123);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _FunctionSearch = __webpack_require__(508);\n\nvar _FunctionSearch2 = _interopRequireDefault(_FunctionSearch);\n\nvar _FunctionInfo = __webpack_require__(507);\n\nvar _FunctionInfo2 = _interopRequireDefault(_FunctionInfo);\n\nvar _reactSplitPane = __webpack_require__(300);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nvar _index = __webpack_require__(35);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// open emmpty command editor window\n// TODO: should this be here, or in command editing file?\nvar editCode = function editCode(dispatch, ms) {\n  dispatch((0, _index.setCodeEdit)({ code_edit: !ms.code_edit }));\n  dispatch((0, _index.resetCommand)());\n};\n\n// this component defines the right sidebar view\n// TODO: many aspects of this are messy, refactor out navbar and variable table at minimum\nvar RightPane = function RightPane(_ref) {\n  var dispatch = _ref.dispatch,\n      variables = _ref.variables,\n      doc = _ref.doc,\n      minimizeState = _ref.minimizeState;\n\n  var variablePaneSize = void 0;\n  if (minimizeState.docs === true) {\n    variablePaneSize = \"100%\";\n  } else {\n    variablePaneSize = \"30%\";\n  }\n  return _react2.default.createElement(\n    _reactSplitPane2.default,\n    { split: 'horizontal', defaultSize: '70%', allowResize: false },\n    _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement('img', { className: 'minButton', width: '20px', src: 'http://0.0.0.0:8000/static/noun_974819.svg', onClick: function onClick() {\n          return dispatch((0, _index.setDocs)({ docs: !minimizeState.docs }));\n        } }),\n      _react2.default.createElement('img', { className: 'settingsButton', width: '26px', src: 'http://0.0.0.0:8000/static/noun_879834.svg' }),\n      _react2.default.createElement('img', { className: 'newCodeButton', width: '21px', src: 'http://0.0.0.0:8000/static/noun_993053.svg', onClick: function onClick() {\n          return editCode(dispatch, minimizeState);\n        } })\n    ),\n    _react2.default.createElement(\n      _reactSplitPane2.default,\n      { split: 'horizontal', defaultSize: variablePaneSize },\n      _react2.default.createElement(\n        'div',\n        { className: 'variableTable' },\n        _react2.default.createElement(\n          'div',\n          { className: 'title' },\n          'Current Variables'\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          _.map(_.sortBy(variables, function (v) {\n            return v.order;\n          }), function (x) {\n            return _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'span',\n                { className: 'three_quarter name' },\n                x.name\n              ),\n              _react2.default.createElement(\n                'span',\n                { className: 'quarter' },\n                x.value\n              )\n            );\n          })\n        )\n      ),\n      _react2.default.createElement(\n        _reactSplitPane2.default,\n        { className: 'secondSplit', split: 'horizontal', defaultSize: '50%', allowResize: true },\n        _react2.default.createElement(_FunctionSearch2.default, null),\n        _react2.default.createElement(_FunctionInfo2.default, null)\n      )\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    variables: state.variables,\n    doc: state.docs,\n    minimizeState: state.minimizeState\n  };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwiZWRpdENvZGUiLCJkaXNwYXRjaCIsIm1zIiwiY29kZV9lZGl0IiwiUmlnaHRQYW5lIiwidmFyaWFibGVzIiwiZG9jIiwibWluaW1pemVTdGF0ZSIsInZhcmlhYmxlUGFuZVNpemUiLCJkb2NzIiwibWFwIiwic29ydEJ5IiwidiIsIm9yZGVyIiwieCIsIm5hbWUiLCJ2YWx1ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztJQUFZQSxDOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0EsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBV0MsRUFBWCxFQUFrQjtBQUNqQ0QsV0FBUyx3QkFBWSxFQUFDRSxXQUFVLENBQUNELEdBQUdDLFNBQWYsRUFBWixDQUFUO0FBQ0FGLFdBQVMsMEJBQVQ7QUFDRCxDQUhEOztBQUtBO0FBQ0E7QUFDQSxJQUFJRyxZQUFZLHlCQUFpRDtBQUFBLE1BQTlDSCxRQUE4QyxRQUE5Q0EsUUFBOEM7QUFBQSxNQUFwQ0ksU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsTUFBekJDLEdBQXlCLFFBQXpCQSxHQUF5QjtBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7O0FBQy9ELE1BQUlDLHlCQUFKO0FBQ0EsTUFBSUQsY0FBY0UsSUFBZCxLQUF1QixJQUEzQixFQUFnQztBQUFFRCx1QkFBbUIsTUFBbkI7QUFBNEIsR0FBOUQsTUFDSztBQUFFQSx1QkFBbUIsS0FBbkI7QUFBMkI7QUFDbEMsU0FBUTtBQUFBO0FBQUEsTUFBVyxPQUFNLFlBQWpCLEVBQThCLGFBQVksS0FBMUMsRUFBZ0QsYUFBYSxLQUE3RDtBQUNSO0FBQUE7QUFBQTtBQUNFLDZDQUFLLFdBQVUsV0FBZixFQUEyQixPQUFNLE1BQWpDLEVBQXdDLEtBQUksNENBQTVDLEVBQXlGLFNBQVM7QUFBQSxpQkFBTVAsU0FBUyxvQkFBUSxFQUFDUSxNQUFLLENBQUNGLGNBQWNFLElBQXJCLEVBQVIsQ0FBVCxDQUFOO0FBQUEsU0FBbEcsR0FERjtBQUVFLDZDQUFLLFdBQVUsZ0JBQWYsRUFBZ0MsT0FBTSxNQUF0QyxFQUE2QyxLQUFJLDRDQUFqRCxHQUZGO0FBR0UsNkNBQUssV0FBVSxlQUFmLEVBQStCLE9BQU0sTUFBckMsRUFBNEMsS0FBSSw0Q0FBaEQsRUFBNkYsU0FBUztBQUFBLGlCQUFNVCxTQUFTQyxRQUFULEVBQW1CTSxhQUFuQixDQUFOO0FBQUEsU0FBdEc7QUFIRixLQURRO0FBTVI7QUFBQTtBQUFBLFFBQVcsT0FBTSxZQUFqQixFQUE4QixhQUFhQyxnQkFBM0M7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLFNBREo7QUFFSTtBQUFBO0FBQUE7QUFDSVQsWUFBRVcsR0FBRixDQUFNWCxFQUFFWSxNQUFGLENBQVNOLFNBQVQsRUFBb0IsVUFBQ08sQ0FBRCxFQUFPO0FBQy9CLG1CQUFPQSxFQUFFQyxLQUFUO0FBQ0gsV0FGTyxDQUFOLEVBR0EsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0gsbUJBQU87QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFNLFdBQVUsb0JBQWhCO0FBQXVDQSxrQkFBRUM7QUFBekMsZUFBSjtBQUEwRDtBQUFBO0FBQUEsa0JBQU0sV0FBVSxTQUFoQjtBQUE0QkQsa0JBQUVFO0FBQTlCO0FBQTFELGFBQVA7QUFDSCxXQUxEO0FBREo7QUFGSixPQURGO0FBWUU7QUFBQTtBQUFBLFVBQVcsV0FBVSxhQUFyQixFQUFtQyxPQUFNLFlBQXpDLEVBQXNELGFBQVksS0FBbEUsRUFBd0UsYUFBYSxJQUFyRjtBQUNFLHFFQURGO0FBRUU7QUFGRjtBQVpGO0FBTlEsR0FBUjtBQXdCRCxDQTVCRDs7QUE4QkEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQ2IsZUFBV2EsTUFBTWIsU0FEZTtBQUVoQ0MsU0FBS1ksTUFBTVQsSUFGcUI7QUFHaENGLG1CQUFlVyxNQUFNWDtBQUhXLEdBQVo7QUFBQSxDQUF4Qjs7QUFNQUgsWUFBWSx5QkFBUWEsZUFBUixFQUF5QmIsU0FBekIsQ0FBWjs7a0JBRWVBLFMiLCJmaWxlIjoiNTExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRnVuY3Rpb25TZWFyY2ggZnJvbSAnLi9GdW5jdGlvblNlYXJjaCc7XG5pbXBvcnQgRnVuY3Rpb25JbmZvIGZyb20gJy4vRnVuY3Rpb25JbmZvJztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5pbXBvcnQgeyBzZXREb2NzLCBzZXRDb2RlRWRpdCwgcmVzZXRDb21tYW5kIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5cbi8vIG9wZW4gZW1tcHR5IGNvbW1hbmQgZWRpdG9yIHdpbmRvd1xuLy8gVE9ETzogc2hvdWxkIHRoaXMgYmUgaGVyZSwgb3IgaW4gY29tbWFuZCBlZGl0aW5nIGZpbGU/XG5jb25zdCBlZGl0Q29kZSA9IChkaXNwYXRjaCwgbXMpID0+IHtcbiAgZGlzcGF0Y2goc2V0Q29kZUVkaXQoe2NvZGVfZWRpdDohbXMuY29kZV9lZGl0fSkpO1xuICBkaXNwYXRjaChyZXNldENvbW1hbmQoKSk7XG59XG5cbi8vIHRoaXMgY29tcG9uZW50IGRlZmluZXMgdGhlIHJpZ2h0IHNpZGViYXIgdmlld1xuLy8gVE9ETzogbWFueSBhc3BlY3RzIG9mIHRoaXMgYXJlIG1lc3N5LCByZWZhY3RvciBvdXQgbmF2YmFyIGFuZCB2YXJpYWJsZSB0YWJsZSBhdCBtaW5pbXVtXG5sZXQgUmlnaHRQYW5lID0gKHsgZGlzcGF0Y2gsIHZhcmlhYmxlcywgZG9jLCBtaW5pbWl6ZVN0YXRlIH0pID0+IHtcbiAgbGV0IHZhcmlhYmxlUGFuZVNpemU7XG4gIGlmIChtaW5pbWl6ZVN0YXRlLmRvY3MgPT09IHRydWUpeyB2YXJpYWJsZVBhbmVTaXplID0gXCIxMDAlXCI7IH1cbiAgZWxzZSB7IHZhcmlhYmxlUGFuZVNpemUgPSBcIjMwJVwiOyB9XG4gIHJldHVybiAoPFNwbGl0UGFuZSBzcGxpdD1cImhvcml6b250YWxcIiBkZWZhdWx0U2l6ZT1cIjcwJVwiIGFsbG93UmVzaXplPXtmYWxzZX0+XG4gIDxkaXY+XG4gICAgPGltZyBjbGFzc05hbWU9XCJtaW5CdXR0b25cIiB3aWR0aD1cIjIwcHhcIiBzcmM9XCJodHRwOi8vMC4wLjAuMDo4MDAwL3N0YXRpYy9ub3VuXzk3NDgxOS5zdmdcIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXREb2NzKHtkb2NzOiFtaW5pbWl6ZVN0YXRlLmRvY3N9KSl9PjwvaW1nPlxuICAgIDxpbWcgY2xhc3NOYW1lPVwic2V0dGluZ3NCdXR0b25cIiB3aWR0aD1cIjI2cHhcIiBzcmM9XCJodHRwOi8vMC4wLjAuMDo4MDAwL3N0YXRpYy9ub3VuXzg3OTgzNC5zdmdcIj48L2ltZz5cbiAgICA8aW1nIGNsYXNzTmFtZT1cIm5ld0NvZGVCdXR0b25cIiB3aWR0aD1cIjIxcHhcIiBzcmM9XCJodHRwOi8vMC4wLjAuMDo4MDAwL3N0YXRpYy9ub3VuXzk5MzA1My5zdmdcIiBvbkNsaWNrPXsoKSA9PiBlZGl0Q29kZShkaXNwYXRjaCwgbWluaW1pemVTdGF0ZSl9PjwvaW1nPlxuICA8L2Rpdj5cbiAgPFNwbGl0UGFuZSBzcGxpdD1cImhvcml6b250YWxcIiBkZWZhdWx0U2l6ZT17dmFyaWFibGVQYW5lU2l6ZX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYWJsZVRhYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5DdXJyZW50IFZhcmlhYmxlczwvZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgeyBfLm1hcChfLnNvcnRCeSh2YXJpYWJsZXMsICh2KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB2Lm9yZGVyO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKHgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxzcGFuIGNsYXNzTmFtZT1cInRocmVlX3F1YXJ0ZXIgbmFtZVwiPnsgeC5uYW1lIH08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwicXVhcnRlclwiPnsgeC52YWx1ZSB9PC9zcGFuPjwvbGk+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPFNwbGl0UGFuZSBjbGFzc05hbWU9XCJzZWNvbmRTcGxpdFwiIHNwbGl0PVwiaG9yaXpvbnRhbFwiIGRlZmF1bHRTaXplPVwiNTAlXCIgYWxsb3dSZXNpemU9e3RydWV9PlxuICAgICAgPEZ1bmN0aW9uU2VhcmNoIC8+XG4gICAgICA8RnVuY3Rpb25JbmZvIC8+XG4gICAgPC9TcGxpdFBhbmU+XG4gIDwvU3BsaXRQYW5lPlxuICA8L1NwbGl0UGFuZT4pO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHZhcmlhYmxlczogc3RhdGUudmFyaWFibGVzLFxuICAgIGRvYzogc3RhdGUuZG9jcyxcbiAgICBtaW5pbWl6ZVN0YXRlOiBzdGF0ZS5taW5pbWl6ZVN0YXRlXG59KTtcblxuUmlnaHRQYW5lID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFJpZ2h0UGFuZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0UGFuZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1JpZ2h0UGFuZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})