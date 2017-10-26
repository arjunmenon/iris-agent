webpackHotUpdate(0,{

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(402);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _types = __webpack_require__(73);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nvar _python = __webpack_require__(61);\n\nvar _InputBox = __webpack_require__(130);\n\nvar _index = __webpack_require__(43);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar selectionContains = function selectionContains(inputField, columnName) {\n  var items = inputField.split(\",\").map(function (x) {\n    return x.replace(/^\\s+|\\s+$/g, '');\n  });\n  var findIndex = items.indexOf(columnName);\n  if (findIndex > -1) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\n// this function updates the main conversation input (input) with a column selection\nvar setInput = function setInput(dispatch, active, text) {\n  var onlyOne = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n  return function () {\n    // if component is not active, this will do nothing\n    if (active === true) {\n      var stripText = text.replace(/{/g, '').replace(/}/g, '');\n      // if this is a selectOne component, the job is easy\n      if (onlyOne === true) {\n        _InputBox.input.value = text;\n      }\n      // otherwise, if input already includes text, we are going to remove/deselect it\n      else if (_InputBox.input.value.includes(text)) {\n          var items = _InputBox.input.value.split(\",\").map(function (x) {\n            return x.replace(/^\\s+|\\s+$/g, '');\n          });\n          var findIndex = items.indexOf(text);\n          if (findIndex > -1) {\n            items.splice(findIndex, 1);\n          }\n          _InputBox.input.value = items.join(\", \"); // input.value.replace(RegExp(test+\",|\"test), '');\n        }\n        // otherwise, we are going to append it\n        else {\n            if (_InputBox.input.value !== \"\") _InputBox.input.value = _InputBox.input.value + \", \" + stripText;else _InputBox.input.value = stripText;\n          }\n      dispatch((0, _index.storeCurrentInput)(_InputBox.input.value));\n      (0, _python.updateHint)(_InputBox.input.value);\n    }\n  };\n};\n\n// this component defines tables that have allow users to dynamically select columns\n// TODO: this shares a lot with CollectionMessage, factor out as much as possible. Also, rename\n\nvar TableSelectMessage = function (_Component) {\n  _inherits(TableSelectMessage, _Component);\n\n  function TableSelectMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, TableSelectMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableSelectMessage.__proto__ || Object.getPrototypeOf(TableSelectMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      _this.testColumns = data[\"column_data\"];\n      _this.colMap = {};\n      for (var i = 0; i < _this.testColumns.length; i++) {\n        _this.colMap[i] = _this.testColumns[i].name;\n      }\n      _this.testRows = data[\"row_data\"].slice(0, 3);\n      var containsText = false;\n      var singleColumn = _this.testColumns.length === 1;\n      console.log(_this.props.currentInput);\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (350 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column, i) {\n                var newColStyle = {};\n                if (column.type === \"Text\") {\n                  newColStyle['width'] = 350;\n                  containsText = true;\n                }\n                if (singleColumn || i == 0) {\n                  newColStyle['border-left'] = 'none';\n                };\n                if (i < 50) {\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', onClick: setInput(_this.props.dispatch, _this.props.active, column.name, _this.props.onlyOne), style: newColStyle },\n                    column.name\n                  );\n                }\n              })\n            ),\n            _this.testRows.map(function (row, i) {\n              var newRowStyle = {};\n              if (containsText) {\n                newRowStyle['height'] = '4em';\n              };\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row', style: newRowStyle },\n                _this.testColumns.map(function (column, i) {\n                  var newColStyle = {};\n                  if (column.type === \"Text\") {\n                    newColStyle['width'] = 350;\n                  }\n                  if (containsText) {\n                    newColStyle['height'] = '4em';\n                  }\n                  if (_this.props.active && _this.props.currentInput.includes(_this.colMap[i])) {\n                    newColStyle['background-color'] = '#eee';\n                  }\n                  if (singleColumn || i == 0) {\n                    newColStyle['border-left'] = 'none';\n                  };\n                  if (i < 50) {\n                    return _react2.default.createElement(\n                      'span',\n                      { className: 'data_column', style: newColStyle },\n                      row[column.name]\n                    );\n                  }\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return TableSelectMessage;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    currentInput: state.currentInput.input\n  };\n};\n\nTableSelectMessage = (0, _reactRedux.connect)(mapStateToProps)(TableSelectMessage);\n\nexports.default = TableSelectMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZVNlbGVjdE1lc3NhZ2UuanM/MzgwMSJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJzZWxlY3Rpb25Db250YWlucyIsImlucHV0RmllbGQiLCJjb2x1bW5OYW1lIiwiaXRlbXMiLCJzcGxpdCIsIm1hcCIsIngiLCJyZXBsYWNlIiwiZmluZEluZGV4IiwiaW5kZXhPZiIsInNldElucHV0IiwiZGlzcGF0Y2giLCJhY3RpdmUiLCJ0ZXh0Iiwib25seU9uZSIsInN0cmlwVGV4dCIsInZhbHVlIiwiaW5jbHVkZXMiLCJzcGxpY2UiLCJqb2luIiwiVGFibGVTZWxlY3RNZXNzYWdlIiwicmVuZGVyIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInByb3BzIiwidGVzdENvbHVtbnMiLCJjb2xNYXAiLCJpIiwibGVuZ3RoIiwibmFtZSIsInRlc3RSb3dzIiwic2xpY2UiLCJjb250YWluc1RleHQiLCJzaW5nbGVDb2x1bW4iLCJjb25zb2xlIiwibG9nIiwiY3VycmVudElucHV0Iiwib3JpZ2luIiwiaGlkZGVuIiwiZGlzcGxheSIsIndpZHRoIiwiY29sdW1uIiwibmV3Q29sU3R5bGUiLCJ0eXBlIiwicm93IiwibmV3Um93U3R5bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLFM7O0FBQ1o7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNDLFVBQUQsRUFBYUMsVUFBYixFQUE0QjtBQUNwRCxNQUFJQyxRQUFRRixXQUFXRyxLQUFYLENBQWlCLEdBQWpCLEVBQXNCQyxHQUF0QixDQUEwQjtBQUFBLFdBQUtDLEVBQUVDLE9BQUYsQ0FBVSxZQUFWLEVBQXdCLEVBQXhCLENBQUw7QUFBQSxHQUExQixDQUFaO0FBQ0EsTUFBSUMsWUFBWUwsTUFBTU0sT0FB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LEVBQVNkLENBQVQsRUFBZTtBQUNuQyxzQkFBSWUsY0FBYyxFQUFsQjtBQUNBLHNCQUFHRCxPQUFPRSxJQUFQLEtBQWdCLE1BQW5CLEVBQTBCO0FBQ3hCRCxnQ0FBWSxPQUFaLElBQXVCLEdBQXZCO0FBQ0Q7QUFDRCxzQkFBR1YsWUFBSCxFQUFnQjtBQUNkVSxnQ0FBWSxRQUFaLElBQXdCLEtBQXhCO0FBQ0Q7QUFDRCxzQkFBRyxNQUFLbEIsS0FBTCxDQUFXYixNQUFYLElBQXFCLE1BQUthLEtBQUwsQ0FBV1ksWUFBWCxDQUF3QnBCLFFBQXhCLENBQWlDLE1BQUtVLE1BQUwsQ0FBWUMsQ0FBWixDQUFqQyxDQUF4QixFQUF5RTtBQUN2RWUsZ0NBQVksa0JBQVosSUFBa0MsTUFBbEM7QUFDRDtBQUNELHNCQUFJVCxnQkFBZ0JOLEtBQUssQ0FBekIsRUFBMkI7QUFBRWUsZ0NBQVksYUFBWixJQUE2QixNQUE3QjtBQUFxQztBQUNsRSxzQkFBSWYsSUFBSSxFQUFSLEVBQVc7QUFDVCwyQkFBTztBQUFBO0FBQUEsd0JBQU0sV0FBVSxhQUFoQixFQUE4QixPQUFPZSxXQUFyQztBQUFtREUsMEJBQUlILE9BQU9aLElBQVg7QUFBbkQscUJBQVA7QUFDRDtBQUNGLGlCQWZBO0FBREssZUFBUjtBQWtCRCxhQXJCQTtBQWRIO0FBREE7QUFESSxPQUFSO0FBeUNELEs7Ozs7OztBQUdILElBQU1pQixrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2hDWCxrQkFBY1csTUFBTVgsWUFBTixDQUFtQlk7QUFERCxHQUFaO0FBQUEsQ0FBeEI7O0FBSUE3QixxQkFBcUIseUJBQVEyQixlQUFSLEVBQXlCM0Isa0JBQXpCLENBQXJCOztrQkFFZUEsa0IiLCJmaWxlIjoiNTAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RGF0YUdyaWQgZnJvbSAncmVhY3QtZGF0YS1ncmlkJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIHByb3B0eXBlcyBmcm9tICcuLi9wcm9wdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgdXBkYXRlSGludCB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuLi9jb250YWluZXJzL0lucHV0Qm94JztcbmltcG9ydCB7IHN0b3JlQ3VycmVudElucHV0IH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5cbmNvbnN0IHNlbGVjdGlvbkNvbnRhaW5zID0gKGlucHV0RmllbGQsIGNvbHVtbk5hbWUpID0+IHtcbiAgbGV0IGl0ZW1zID0gaW5wdXRGaWVsZC5zcGxpdChcIixcIikubWFwKHggPT4geC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykpO1xuICBsZXQgZmluZEluZGV4ID0gaXRlbXMuaW5kZXhPZihjb2x1bW5OYW1lKTtcbiAgaWYoZmluZEluZGV4ID4gLTEpe1xuICAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbi8vIHRoaXMgZnVuY3Rpb24gdXBkYXRlcyB0aGUgbWFpbiBjb252ZXJzYXRpb24gaW5wdXQgKGlucHV0KSB3aXRoIGEgY29sdW1uIHNlbGVjdGlvblxuY29uc3Qgc2V0SW5wdXQgPSAoZGlzcGF0Y2gsIGFjdGl2ZSwgdGV4dCwgb25seU9uZSA9IGZhbHNlKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgLy8gaWYgY29tcG9uZW50IGlzIG5vdCBhY3RpdmUsIHRoaXMgd2lsbCBkbyBub3RoaW5nXG4gICAgICAgIGlmKGFjdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgbGV0IHN0cmlwVGV4dCA9IHRleHQucmVwbGFjZSgvey9nLCAnJykucmVwbGFjZSgvfS9nLCAnJyk7XG4gICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHNlbGVjdE9uZSBjb21wb25lbnQsIHRoZSBqb2IgaXMgZWFzeVxuICAgICAgICAgIGlmKG9ubHlPbmUgPT09IHRydWUpe1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB0ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBvdGhlcndpc2UsIGlmIGlucHV0IGFscmVhZHkgaW5jbHVkZXMgdGV4dCwgd2UgYXJlIGdvaW5nIHRvIHJlbW92ZS9kZXNlbGVjdCBpdFxuICAgICAgICAgIGVsc2UgaWYoaW5wdXQudmFsdWUuaW5jbHVkZXModGV4dCkpe1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gaW5wdXQudmFsdWUuc3BsaXQoXCIsXCIpLm1hcCh4ID0+IHgucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpKTtcbiAgICAgICAgICAgIGxldCBmaW5kSW5kZXggPSBpdGVtcy5pbmRleE9mKHRleHQpO1xuICAgICAgICAgICAgaWYoZmluZEluZGV4ID4gLTEpe1xuICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGZpbmRJbmRleCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaXRlbXMuam9pbihcIiwgXCIpOy8vIGlucHV0LnZhbHVlLnJlcGxhY2UoUmVnRXhwKHRlc3QrXCIsfFwidGVzdCksICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlLCB3ZSBhcmUgZ29pbmcgdG8gYXBwZW5kIGl0XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlICE9PSBcIlwiKSBpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlICsgXCIsIFwiICsgc3RyaXBUZXh0O1xuICAgICAgICAgICAgZWxzZSBpbnB1dC52YWx1ZSA9IHN0cmlwVGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQudmFsdWUpKTtcbiAgICAgICAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG4vLyB0aGlzIGNvbXBvbmVudCBkZWZpbmVzIHRhYmxlcyB0aGF0IGhhdmUgYWxsb3cgdXNlcnMgdG8gZHluYW1pY2FsbHkgc2VsZWN0IGNvbHVtbnNcbi8vIFRPRE86IHRoaXMgc2hhcmVzIGEgbG90IHdpdGggQ29sbGVjdGlvbk1lc3NhZ2UsIGZhY3RvciBvdXQgYXMgbXVjaCBhcyBwb3NzaWJsZS4gQWxzbywgcmVuYW1lXG5jbGFzcyBUYWJsZVNlbGVjdE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5wcm9wcy50ZXh0KTtcbiAgICB0aGlzLnRlc3RDb2x1bW5zID0gZGF0YVtcImNvbHVtbl9kYXRhXCJdO1xuICAgIHRoaXMuY29sTWFwID0ge307XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudGVzdENvbHVtbnMubGVuZ3RoOyBpKyspe1xuICAgICAgdGhpcy5jb2xNYXBbaV0gPSB0aGlzLnRlc3RDb2x1bW5zW2ldLm5hbWU7XG4gICAgfVxuICAgIHRoaXMudGVzdFJvd3MgPSBkYXRhW1wicm93X2RhdGFcIl0uc2xpY2UoMCwzKTtcbiAgICBsZXQgY29udGFpbnNUZXh0ID0gZmFsc2U7XG4gICAgbGV0IHNpbmdsZUNvbHVtbiA9IHRoaXMudGVzdENvbHVtbnMubGVuZ3RoID09PSAxO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY3VycmVudElucHV0KTtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lID0ge3RoaXMucHJvcHMub3JpZ2luID09PSAnaXJpcycgPyAnbWVzc2FnZSBsZWZ0JyA6ICdtZXNzYWdlIHJpZ2h0J30gc3R5bGU9e3RoaXMucHJvcHMuaGlkZGVuID09PSB0cnVlID8ge2Rpc3BsYXk6ICdub25lJ30gOiB7fX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlIHRhYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YV90YWJsZVwiIHN0eWxlPXt7d2lkdGg6IHRoaXMudGVzdENvbHVtbnMubGVuZ3RoICogKDM1MCsxMCsxKX19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAge3RoaXMudGVzdENvbHVtbnMubWFwKChjb2x1bW4saSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0NvbFN0eWxlID0ge307XG4gICAgICAgICAgICBpZihjb2x1bW4udHlwZSA9PT0gXCJUZXh0XCIpe1xuICAgICAgICAgICAgICBuZXdDb2xTdHlsZVsnd2lkdGgnXSA9IDM1MDtcbiAgICAgICAgICAgICAgY29udGFpbnNUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaW5nbGVDb2x1bW4gfHwgaSA9PSAwKXsgbmV3Q29sU3R5bGVbJ2JvcmRlci1sZWZ0J10gPSAnbm9uZScgfTtcbiAgICAgICAgICAgIGlmIChpIDwgNTApe1xuICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiZGF0YV9jb2x1bW5cIiBvbkNsaWNrPXtzZXRJbnB1dCh0aGlzLnByb3BzLmRpc3BhdGNoLCB0aGlzLnByb3BzLmFjdGl2ZSwgY29sdW1uLm5hbWUsIHRoaXMucHJvcHMub25seU9uZSl9IHN0eWxlPXtuZXdDb2xTdHlsZX0+e2NvbHVtbi5uYW1lfTwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMudGVzdFJvd3MubWFwKChyb3csaSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1Jvd1N0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoY29udGFpbnNUZXh0KXsgbmV3Um93U3R5bGVbJ2hlaWdodCddID0gJzRlbSd9O1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImRhdGFfcm93XCIgc3R5bGU9e25ld1Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAge3RoaXMudGVzdENvbHVtbnMubWFwKChjb2x1bW4sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q29sU3R5bGUgPSB7fTtcbiAgICAgICAgICAgICAgICBpZihjb2x1bW4udHlwZSA9PT0gXCJUZXh0XCIpe1xuICAgICAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ3dpZHRoJ10gPSAzNTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGNvbnRhaW5zVGV4dCl7XG4gICAgICAgICAgICAgICAgICBuZXdDb2xTdHlsZVsnaGVpZ2h0J10gPSAnNGVtJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5jdXJyZW50SW5wdXQuaW5jbHVkZXModGhpcy5jb2xNYXBbaV0pKXtcbiAgICAgICAgICAgICAgICAgIG5ld0NvbFN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSAnI2VlZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaW5nbGVDb2x1bW4gfHwgaSA9PSAwKXsgbmV3Q29sU3R5bGVbJ2JvcmRlci1sZWZ0J10gPSAnbm9uZScgfTtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDUwKXtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJkYXRhX2NvbHVtblwiIHN0eWxlPXtuZXdDb2xTdHlsZX0+e3Jvd1tjb2x1bW4ubmFtZV19PC9zcGFuPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgY3VycmVudElucHV0OiBzdGF0ZS5jdXJyZW50SW5wdXQuaW5wdXRcbn0pO1xuXG5UYWJsZVNlbGVjdE1lc3NhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVGFibGVTZWxlY3RNZXNzYWdlKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVTZWxlY3RNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvVGFibGVTZWxlY3RNZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})