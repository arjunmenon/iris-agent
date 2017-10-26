webpackHotUpdate(0,{

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _index = __webpack_require__(43);\n\nvar _python = __webpack_require__(61);\n\nvar _InputBox = __webpack_require__(130);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// reference to input search dom element\nvar search_input = void 0;\n\n// this governs state change in function search box, update state value and pass to backend to match with function\nvar onChangeInput = function onChangeInput(dispatch) {\n  if (search_input.value !== \"\") {\n    dispatch((0, _index.updateFunc)({ search: search_input.value }));\n    (0, _python.doSearch)(search_input.value);\n  } else {\n    // if nothing in field, clear results\n    dispatch((0, _index.updateResults)([]));\n  }\n};\n\n// on click, we want to load the clicked upon function into the docs view\n// TODO: as with the hints, may not be one-to-one mapping here if classifier is weird?\nvar _onClick = function _onClick(dispatch, func_text) {\n  (0, _python.updateDocs)(func_text);\n  dispatch((0, _index.setDocs)({ docs: false })); // open docs pane\n};\n\n// component that defines function search field\n\nvar FunctionSearch = function (_Component) {\n  _inherits(FunctionSearch, _Component);\n\n  function FunctionSearch() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, FunctionSearch);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FunctionSearch.__proto__ || Object.getPrototypeOf(FunctionSearch)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'func_search' },\n        _react2.default.createElement(\n          'div',\n          { className: 'search_box' },\n          _react2.default.createElement('input', { type: 'text', placeholder: 'search iris commands', onChange: function onChange() {\n              return onChangeInput(_this.props.dispatch);\n            }, ref: function ref(node) {\n              search_input = node;\n            } })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'results' },\n          _this.props.results.map(function (func) {\n            return _react2.default.createElement(\n              'div',\n              { className: 'result', onClick: function onClick() {\n                  return _onClick(_this.props.dispatch, func.id);\n                } },\n              func.title\n            );\n          })\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return FunctionSearch;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    search: state.functionSearch.search,\n    results: state.functionSearch.results\n  };\n};\n\nFunctionSearch = (0, _reactRedux.connect)(mapStateToProps)(FunctionSearch);\n\nexports.default = FunctionSearch;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9GdW5jdGlvblNlYXJjaC5qcz8yYTMzIl0sIm5hbWVzIjpbInNlYXJjaF9pbnB1dCIsIm9uQ2hhbmdlSW5wdXQiLCJkaXNwYXRjaCIsInZhbHVlIiwic2VhcmNoIiwib25DbGljayIsImZ1bmNfdGV4dCIsImRvY3MiLCJGdW5jdGlvblNlYXJjaCIsInJlbmRlciIsInByb3BzIiwibm9kZSIsInJlc3VsdHMiLCJtYXAiLCJmdW5jIiwiaWQiLCJ0aXRsZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZnVuY3Rpb25TZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBLElBQUlBLHFCQUFKOztBQUVBO0FBQ0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxRQUFELEVBQWM7QUFDbEMsTUFBSUYsYUFBYUcsS0FBYixLQUF1QixFQUEzQixFQUE4QjtBQUM1QkQsYUFBUyx1QkFBVyxFQUFDRSxRQUFRSixhQUFhRyxLQUF0QixFQUFYLENBQVQ7QUFDQSwwQkFBU0gsYUFBYUcsS0FBdEI7QUFDRCxHQUhELE1BSUk7QUFDRjtBQUNBRCxhQUFTLDBCQUFjLEVBQWQsQ0FBVDtBQUNEO0FBQ0YsQ0FURDs7QUFXQTtBQUNBO0FBQ0EsSUFBTUcsV0FBVSxTQUFWQSxRQUFVLENBQUNILFFBQUQsRUFBV0ksU0FBWCxFQUF5QjtBQUN2QywwQkFBV0EsU0FBWDtBQUNBSixXQUFTLG9CQUFRLEVBQUNLLE1BQU0sS0FBUCxFQUFSLENBQVQsRUFGdUMsQ0FFTDtBQUNuQyxDQUhEOztBQUtBOztJQUNNQyxjOzs7Ozs7Ozs7Ozs7OztzTUFDRkMsTSxHQUFTO0FBQUEsYUFDUDtBQUFBO0FBQUEsVUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFBNEIsbURBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksc0JBQS9CLEVBQXNELFVBQVU7QUFBQSxxQkFBTVIsY0FBYyxNQUFLUyxLQUFMLENBQVdSLFFBQXpCLENBQU47QUFBQSxhQUFoRSxFQUEwRyxLQUFLLG1CQUFRO0FBQUNGLDZCQUFlVyxJQUFmO0FBQXFCLGFBQTdJO0FBQTVCLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFDRyxnQkFBS0QsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxHQUFuQixDQUF1QjtBQUFBLG1CQUFRO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFFBQWYsRUFBd0IsU0FBUztBQUFBLHlCQUFNUixTQUFRLE1BQUtLLEtBQUwsQ0FBV1IsUUFBbkIsRUFBNkJZLEtBQUtDLEVBQWxDLENBQU47QUFBQSxpQkFBakM7QUFBK0VELG1CQUFLRTtBQUFwRixhQUFSO0FBQUEsV0FBdkI7QUFESDtBQUZGLE9BRE87QUFBQSxLOzs7Ozs7QUFTYixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2hDZCxZQUFRYyxNQUFNQyxjQUFOLENBQXFCZixNQURHO0FBRWhDUSxhQUFTTSxNQUFNQyxjQUFOLENBQXFCUDtBQUZFLEdBQVo7QUFBQSxDQUF4Qjs7QUFLQUosaUJBQWlCLHlCQUFRUyxlQUFSLEVBQXlCVCxjQUF6QixDQUFqQjs7a0JBRWVBLGMiLCJmaWxlIjoiNDk5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVwZGF0ZUZ1bmMsIHVwZGF0ZVJlc3VsdHMsIHN0b3JlQ3VycmVudElucHV0LCBzZXREb2NzIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgeyBkb1NlYXJjaCwgdXBkYXRlSGludCwgdXBkYXRlRG9jcywgdXBkYXRlQ29tbWFuZEFQSSB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuLi9jb250YWluZXJzL0lucHV0Qm94JztcblxuLy8gcmVmZXJlbmNlIHRvIGlucHV0IHNlYXJjaCBkb20gZWxlbWVudFxubGV0IHNlYXJjaF9pbnB1dDtcblxuLy8gdGhpcyBnb3Zlcm5zIHN0YXRlIGNoYW5nZSBpbiBmdW5jdGlvbiBzZWFyY2ggYm94LCB1cGRhdGUgc3RhdGUgdmFsdWUgYW5kIHBhc3MgdG8gYmFja2VuZCB0byBtYXRjaCB3aXRoIGZ1bmN0aW9uXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKGRpc3BhdGNoKSA9PiB7XG4gIGlmIChzZWFyY2hfaW5wdXQudmFsdWUgIT09IFwiXCIpe1xuICAgIGRpc3BhdGNoKHVwZGF0ZUZ1bmMoe3NlYXJjaDogc2VhcmNoX2lucHV0LnZhbHVlfSkpO1xuICAgIGRvU2VhcmNoKHNlYXJjaF9pbnB1dC52YWx1ZSk7XG4gIH1cbiAgZWxzZXtcbiAgICAvLyBpZiBub3RoaW5nIGluIGZpZWxkLCBjbGVhciByZXN1bHRzXG4gICAgZGlzcGF0Y2godXBkYXRlUmVzdWx0cyhbXSkpO1xuICB9XG59O1xuXG4vLyBvbiBjbGljaywgd2Ugd2FudCB0byBsb2FkIHRoZSBjbGlja2VkIHVwb24gZnVuY3Rpb24gaW50byB0aGUgZG9jcyB2aWV3XG4vLyBUT0RPOiBhcyB3aXRoIHRoZSBoaW50cywgbWF5IG5vdCBiZSBvbmUtdG8tb25lIG1hcHBpbmcgaGVyZSBpZiBjbGFzc2lmaWVyIGlzIHdlaXJkP1xuY29uc3Qgb25DbGljayA9IChkaXNwYXRjaCwgZnVuY190ZXh0KSA9PiB7XG4gIHVwZGF0ZURvY3MoZnVuY190ZXh0KTtcbiAgZGlzcGF0Y2goc2V0RG9jcyh7ZG9jczogZmFsc2V9KSk7IC8vIG9wZW4gZG9jcyBwYW5lXG59O1xuXG4vLyBjb21wb25lbnQgdGhhdCBkZWZpbmVzIGZ1bmN0aW9uIHNlYXJjaCBmaWVsZFxuY2xhc3MgRnVuY3Rpb25TZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmNfc2VhcmNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2JveFwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwic2VhcmNoIGlyaXMgY29tbWFuZHNcIiBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VJbnB1dCh0aGlzLnByb3BzLmRpc3BhdGNoKX0gcmVmPXtub2RlID0+IHtzZWFyY2hfaW5wdXQgPSBub2RlO319PjwvaW5wdXQ+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnJlc3VsdHMubWFwKGZ1bmMgPT4gPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHRoaXMucHJvcHMuZGlzcGF0Y2gsIGZ1bmMuaWQpfT57ZnVuYy50aXRsZX08L2Rpdj4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgc2VhcmNoOiBzdGF0ZS5mdW5jdGlvblNlYXJjaC5zZWFyY2gsXG4gICAgcmVzdWx0czogc3RhdGUuZnVuY3Rpb25TZWFyY2gucmVzdWx0c1xufSk7XG5cbkZ1bmN0aW9uU2VhcmNoID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEZ1bmN0aW9uU2VhcmNoKTtcblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25TZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9GdW5jdGlvblNlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})