webpackHotUpdate(0,{

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(31);\n\nvar _index = __webpack_require__(35);\n\nvar _Attributes = __webpack_require__(1422);\n\nvar _Attributes2 = _interopRequireDefault(_Attributes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar VariableTable = function VariableTable(_ref) {\n    var dispatch = _ref.dispatch,\n        variables = _ref.variables;\n    return _react2.default.createElement(\n        'div',\n        { className: 'variableTable' },\n        variables.length > 0 ? _react2.default.createElement(\n            'div',\n            { className: 'title' },\n            'Current Variables'\n        ) : _react2.default.createElement('div', null),\n        _react2.default.createElement(\n            'ul',\n            null,\n            _.map(_.sortBy(variables, function (v) {\n                return v.order;\n            }), function (x, i) {\n                var attributes = x.show === true ? _react2.default.createElement(_Attributes2.default, { variable: x }) : _react2.default.createElement('div', null);\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'li',\n                        null,\n                        _react2.default.createElement(\n                            'span',\n                            { onClick: function onClick() {\n                                    return dispatch((0, _index.toggleVariableAttributes)(i));\n                                }, className: 'three_quarter name' },\n                            x.name\n                        ),\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'quarter' },\n                            x.value\n                        )\n                    ),\n                    attributes\n                );\n            })\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        variables: state.variables\n    };\n};\n\nVariableTable = (0, _reactRedux.connect)(mapStateToProps)(VariableTable);\n\nexports.default = VariableTable;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9WYXJpYWJsZVRhYmxlLmpzPzFiMDEiXSwibmFtZXMiOlsiVmFyaWFibGVUYWJsZSIsImRpc3BhdGNoIiwidmFyaWFibGVzIiwibGVuZ3RoIiwiXyIsIm1hcCIsInNvcnRCeSIsInYiLCJvcmRlciIsIngiLCJpIiwiYXR0cmlidXRlcyIsInNob3ciLCJuYW1lIiwidmFsdWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBR0EsSUFBSUEsZ0JBQWdCO0FBQUEsUUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsUUFBWUMsU0FBWixRQUFZQSxTQUFaO0FBQUEsV0FDbEI7QUFBQTtBQUFBLFVBQUssV0FBVSxlQUFmO0FBQ01BLGtCQUFVQyxNQUFWLEdBQW1CLENBQW5CLEdBQXVCO0FBQUE7QUFBQSxjQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsU0FBdkIsR0FBd0UsMENBRDlFO0FBRUk7QUFBQTtBQUFBO0FBQ0lDLGNBQUVDLEdBQUYsQ0FBTUQsRUFBRUUsTUFBRixDQUFTSixTQUFULEVBQW9CLFVBQUNLLENBQUQsRUFBTztBQUMvQix1QkFBT0EsRUFBRUMsS0FBVDtBQUNILGFBRk8sQ0FBTixFQUdBLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ04sb0JBQU1DLGFBQWFGLEVBQUVHLElBQUYsS0FBVyxJQUFYLEdBQWtCLHNEQUFZLFVBQVVILENBQXRCLEdBQWxCLEdBQWdELDBDQUFuRTtBQUNBLHVCQUFRO0FBQUE7QUFBQTtBQUNKO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSw4QkFBTSxTQUFTO0FBQUEsMkNBQU1SLFNBQVMscUNBQXlCUyxDQUF6QixDQUFULENBQU47QUFBQSxpQ0FBZixFQUE0RCxXQUFVLG9CQUF0RTtBQUE2RkQsOEJBQUVJO0FBQS9GLHlCQURGO0FBRUU7QUFBQTtBQUFBLDhCQUFNLFdBQVUsU0FBaEI7QUFBNEJKLDhCQUFFSztBQUE5QjtBQUZGLHFCQURJO0FBS0hIO0FBTEcsaUJBQVI7QUFPSCxhQVpEO0FBREo7QUFGSixLQURrQjtBQUFBLENBQXBCOztBQW9CQSxJQUFNSSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQ2hDZCxtQkFBV2MsTUFBTWQ7QUFEZSxLQUFaO0FBQUEsQ0FBeEI7O0FBSUFGLGdCQUFnQix5QkFBUWUsZUFBUixFQUF5QmYsYUFBekIsQ0FBaEI7O2tCQUVlQSxhIiwiZmlsZSI6IjE0MjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHRvZ2dsZVZhcmlhYmxlQXR0cmlidXRlcyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IEF0dHJpYnV0ZXMgZnJvbSAnLi9BdHRyaWJ1dGVzJztcblxuXG5sZXQgVmFyaWFibGVUYWJsZSA9ICh7ZGlzcGF0Y2gsIHZhcmlhYmxlc30pID0+XG4gIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFibGVUYWJsZVwiPlxuICAgICAgeyB2YXJpYWJsZXMubGVuZ3RoID4gMCA/IDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5DdXJyZW50IFZhcmlhYmxlczwvZGl2PiA6IDxkaXY+PC9kaXY+fVxuICAgICAgPHVsPlxuICAgICAgICB7IF8ubWFwKF8uc29ydEJ5KHZhcmlhYmxlcywgKHYpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2Lm9yZGVyO1xuICAgICAgICB9KSxcbiAgICAgICAgICAoeCwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0geC5zaG93ID09PSB0cnVlID8gPEF0dHJpYnV0ZXMgdmFyaWFibGU9e3h9IC8+IDogPGRpdj48L2Rpdj47XG4gICAgICAgICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gZGlzcGF0Y2godG9nZ2xlVmFyaWFibGVBdHRyaWJ1dGVzKGkpKX0gY2xhc3NOYW1lPVwidGhyZWVfcXVhcnRlciBuYW1lXCI+eyB4Lm5hbWUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicXVhcnRlclwiPnsgeC52YWx1ZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzfVxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICA8L2Rpdj47XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHN0YXRlLnZhcmlhYmxlcyxcbn0pO1xuXG5WYXJpYWJsZVRhYmxlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFZhcmlhYmxlVGFibGUpO1xuXG5leHBvcnQgZGVmYXVsdCBWYXJpYWJsZVRhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvVmFyaWFibGVUYWJsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})