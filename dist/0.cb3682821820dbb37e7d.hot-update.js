webpackHotUpdate(0,{

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setInput = exports.PredictionStrip = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _InputBox = __webpack_require__(130);\n\nvar _python = __webpack_require__(61);\n\nvar _index = __webpack_require__(35);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// set main input text and update hint\nvar setInput = function setInput(dispatch, text, id) {\n  return function () {\n    var stripText = text.replace(/{/g, '').replace(/}/g, '');\n    _InputBox.input.value = stripText;\n    (0, _python.updateHint)(stripText);\n    dispatch((0, _index.storeClassIndex)(id));\n  };\n};\n\nvar normalStyle = function normalStyle(lst) {\n  return _.map(lst, function (p) {\n    return { id: p.id, text: p.text, style: \"normal\" };\n  });\n};\n\nvar selectedStyle = function selectedStyle(lst) {\n  return _.map(lst, function (p) {\n    return { id: p.id, text: p.text, style: \"c0\" };\n  });\n};\n\nvar reorder = function reorder(currIndex, predictions) {\n  console.log(currIndex, predictions);\n  console.log(normalStyle(predictions));\n  return [].concat(_toConsumableArray(selectedStyle(_.filter(predictions, function (p) {\n    return p.id === currIndex;\n  }))), _toConsumableArray(normalStyle(_.filter(predictions, function (p) {\n    return p.id !== currIndex;\n  }))));\n};\n\n// TODO: should logic that binds to tab-key press be here as well?\n\n// defines component for prediction strip above main input text\nvar PredictionStrip = function PredictionStrip(_ref) {\n  var dispatch = _ref.dispatch,\n      predictions = _ref.predictions,\n      currIndex = _ref.currIndex;\n\n  // TODO: optimize width\n  var charLength = predictions.map(function (p) {\n    return p.text.length;\n  }).reduce(function (x, y) {\n    return x + y;\n  }, 0);\n  return _react2.default.createElement(\n    'div',\n    { className: 'prediction_strip' },\n    _react2.default.createElement(\n      'div',\n      { className: 'predictions', style: { width: charLength * 9 + \"px\" } },\n      reorder(currIndex, predictions).map(function (obj, i) {\n        return _react2.default.createElement(\n          'span',\n          { onClick: setInput(dispatch, obj.text, obj.id), className: \"prediction \" + obj.style },\n          obj.text\n        );\n      })\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    predictions: state.predictions,\n    currIndex: state.currentInput.classIndex // for selected prediction\n  };\n};\n\nexports.PredictionStrip = PredictionStrip = (0, _reactRedux.connect)(mapStateToProps)(PredictionStrip);\n\nexports.PredictionStrip = PredictionStrip;\nexports.setInput = setInput;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QcmVkaWN0aW9uU3RyaXAuanM/ZDFhMiJdLCJuYW1lcyI6WyJfIiwic2V0SW5wdXQiLCJkaXNwYXRjaCIsInRleHQiLCJpZCIsInN0cmlwVGV4dCIsInJlcGxhY2UiLCJ2YWx1ZSIsIm5vcm1hbFN0eWxlIiwibHN0IiwibWFwIiwicCIsInN0eWxlIiwic2VsZWN0ZWRTdHlsZSIsInJlb3JkZXIiLCJjdXJySW5kZXgiLCJwcmVkaWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJQcmVkaWN0aW9uU3RyaXAiLCJjaGFyTGVuZ3RoIiwibGVuZ3RoIiwicmVkdWNlIiwieCIsInkiLCJ3aWR0aCIsIm9iaiIsImkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRJbnB1dCIsImNsYXNzSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztJQUFZQSxDOzs7Ozs7OztBQUVaO0FBQ0EsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBV0MsSUFBWCxFQUFpQkMsRUFBakIsRUFBd0I7QUFDckMsU0FBTyxZQUFNO0FBQ1QsUUFBSUMsWUFBWUYsS0FBS0csT0FBTCxDQUFhLElBQWIsRUFBbUIsRUFBbkIsRUFBdUJBLE9BQXZCLENBQStCLElBQS9CLEVBQXFDLEVBQXJDLENBQWhCO0FBQ0Esb0JBQU1DLEtBQU4sR0FBY0YsU0FBZDtBQUNBLDRCQUFXQSxTQUFYO0FBQ0FILGFBQVMsNEJBQWdCRSxFQUFoQixDQUFUO0FBQ0gsR0FMRDtBQU1ILENBUEQ7O0FBU0EsSUFBTUksY0FBYyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBUztBQUMzQixTQUFPVCxFQUFFVSxHQUFGLENBQU1ELEdBQU4sRUFBVyxVQUFDRSxDQUFELEVBQU87QUFBRSxXQUFPLEVBQUNQLElBQUdPLEVBQUVQLEVBQU4sRUFBVUQsTUFBS1EsRUFBRVIsSUFBakIsRUFBdUJTLE9BQU8sUUFBOUIsRUFBUDtBQUFpRCxHQUFyRSxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNKLEdBQUQsRUFBUztBQUM3QixTQUFPVCxFQUFFVSxHQUFGLENBQU1ELEdBQU4sRUFBVyxVQUFDRSxDQUFELEVBQU87QUFBRSxXQUFPLEVBQUNQLElBQUdPLEVBQUVQLEVBQU4sRUFBVUQsTUFBS1EsRUFBRVIsSUFBakIsRUFBdUJTLE9BQU8sSUFBOUIsRUFBUDtBQUE2QyxHQUFqRSxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNRSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsU0FBRCxFQUFZQyxXQUFaLEVBQTRCO0FBQzFDQyxVQUFRQyxHQUFSLENBQVlILFNBQVosRUFBdUJDLFdBQXZCO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWVYsWUFBWVEsV0FBWixDQUFaO0FBQ0Esc0NBQVlILGNBQWNiLEVBQUVtQixNQUFGLENBQVNILFdBQVQsRUFBc0IsVUFBQ0wsQ0FBRDtBQUFBLFdBQU9BLEVBQUVQLEVBQUYsS0FBU1csU0FBaEI7QUFBQSxHQUF0QixDQUFkLENBQVosc0JBQ1lQLFlBQVlSLEVBQUVtQixNQUFGLENBQVNILFdBQVQsRUFBc0IsVUFBQ0wsQ0FBRDtBQUFBLFdBQU9BLEVBQUVQLEVBQUYsS0FBU1csU0FBaEI7QUFBQSxHQUF0QixDQUFaLENBRFo7QUFFRCxDQUxEOztBQU9BOztBQUVBO0FBQ0EsSUFBSUssa0JBQWtCLCtCQUF3QztBQUFBLE1BQXRDbEIsUUFBc0MsUUFBdENBLFFBQXNDO0FBQUEsTUFBNUJjLFdBQTRCLFFBQTVCQSxXQUE0QjtBQUFBLE1BQWZELFNBQWUsUUFBZkEsU0FBZTs7QUFDNUQ7QUFDQSxNQUFNTSxhQUFhTCxZQUFZTixHQUFaLENBQWdCLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxFQUFFUixJQUFGLENBQU9tQixNQUFkO0FBQUEsR0FBaEIsRUFBc0NDLE1BQXRDLENBQTZDLFVBQUNDLENBQUQsRUFBR0MsQ0FBSDtBQUFBLFdBQVNELElBQUlDLENBQWI7QUFBQSxHQUE3QyxFQUE2RCxDQUE3RCxDQUFuQjtBQUNBLFNBQVE7QUFBQTtBQUFBLE1BQUssV0FBVSxrQkFBZjtBQUNGO0FBQUE7QUFBQSxRQUFLLFdBQVUsYUFBZixFQUE2QixPQUFPLEVBQUNDLE9BQVFMLGFBQWEsQ0FBZCxHQUFtQixJQUEzQixFQUFwQztBQUNHUCxjQUFRQyxTQUFSLEVBQW1CQyxXQUFuQixFQUFnQ04sR0FBaEMsQ0FBb0MsVUFBQ2lCLEdBQUQsRUFBS0MsQ0FBTDtBQUFBLGVBQVc7QUFBQTtBQUFBLFlBQU0sU0FBUzNCLFNBQVNDLFFBQVQsRUFBbUJ5QixJQUFJeEIsSUFBdkIsRUFBNkJ3QixJQUFJdkIsRUFBakMsQ0FBZixFQUFxRCxXQUFXLGdCQUFnQnVCLElBQUlmLEtBQXBGO0FBQTZGZSxjQUFJeEI7QUFBakcsU0FBWDtBQUFBLE9BQXBDO0FBREg7QUFERSxHQUFSO0FBS0QsQ0FSRDs7QUFZQSxJQUFNMEIsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQ2QsaUJBQWFjLE1BQU1kLFdBRGE7QUFFaENELGVBQVdlLE1BQU1DLFlBQU4sQ0FBbUJDLFVBRkUsQ0FFUztBQUZULEdBQVo7QUFBQSxDQUF4Qjs7QUFLQSxRQUVRWixlQUZSLHFCQUFrQix5QkFBUVMsZUFBUixFQUF5QlQsZUFBekIsQ0FBbEI7O1FBRVFBLGUsR0FBQUEsZTtRQUFpQm5CLFEsR0FBQUEsUSIsImZpbGUiOiI1MDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuLi9jb250YWluZXJzL0lucHV0Qm94JztcbmltcG9ydCB7IHVwZGF0ZUhpbnQgfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcbmltcG9ydCB7IHN0b3JlQ2xhc3NJbmRleCwgY2xlYXJDbGFzc0luZGV4IH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG4vLyBzZXQgbWFpbiBpbnB1dCB0ZXh0IGFuZCB1cGRhdGUgaGludFxuY29uc3Qgc2V0SW5wdXQgPSAoZGlzcGF0Y2gsIHRleHQgLGlkKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgbGV0IHN0cmlwVGV4dCA9IHRleHQucmVwbGFjZSgvey9nLCAnJykucmVwbGFjZSgvfS9nLCAnJyk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gc3RyaXBUZXh0O1xuICAgICAgICB1cGRhdGVIaW50KHN0cmlwVGV4dCk7XG4gICAgICAgIGRpc3BhdGNoKHN0b3JlQ2xhc3NJbmRleChpZCkpO1xuICAgIH07XG59O1xuXG5jb25zdCBub3JtYWxTdHlsZSA9IChsc3QpID0+IHtcbiAgcmV0dXJuIF8ubWFwKGxzdCwgKHApID0+IHsgcmV0dXJuIHtpZDpwLmlkLCB0ZXh0OnAudGV4dCwgc3R5bGU6IFwibm9ybWFsXCJ9OyB9KTtcbn07XG5cbmNvbnN0IHNlbGVjdGVkU3R5bGUgPSAobHN0KSA9PiB7XG4gIHJldHVybiBfLm1hcChsc3QsIChwKSA9PiB7IHJldHVybiB7aWQ6cC5pZCwgdGV4dDpwLnRleHQsIHN0eWxlOiBcImMwXCJ9OyB9KTtcbn07XG5cbmNvbnN0IHJlb3JkZXIgPSAoY3VyckluZGV4LCBwcmVkaWN0aW9ucykgPT4ge1xuICBjb25zb2xlLmxvZyhjdXJySW5kZXgsIHByZWRpY3Rpb25zKTtcbiAgY29uc29sZS5sb2cobm9ybWFsU3R5bGUocHJlZGljdGlvbnMpKTtcbiAgcmV0dXJuIFsuLi4oc2VsZWN0ZWRTdHlsZShfLmZpbHRlcihwcmVkaWN0aW9ucywgKHApID0+IHAuaWQgPT09IGN1cnJJbmRleCkpKSxcbiAgICAgICAgICAuLi4obm9ybWFsU3R5bGUoXy5maWx0ZXIocHJlZGljdGlvbnMsIChwKSA9PiBwLmlkICE9PSBjdXJySW5kZXgpKSldXG59O1xuXG4vLyBUT0RPOiBzaG91bGQgbG9naWMgdGhhdCBiaW5kcyB0byB0YWIta2V5IHByZXNzIGJlIGhlcmUgYXMgd2VsbD9cblxuLy8gZGVmaW5lcyBjb21wb25lbnQgZm9yIHByZWRpY3Rpb24gc3RyaXAgYWJvdmUgbWFpbiBpbnB1dCB0ZXh0XG5sZXQgUHJlZGljdGlvblN0cmlwID0gKHtkaXNwYXRjaCwgcHJlZGljdGlvbnMsIGN1cnJJbmRleH0pID0+IHtcbiAgLy8gVE9ETzogb3B0aW1pemUgd2lkdGhcbiAgY29uc3QgY2hhckxlbmd0aCA9IHByZWRpY3Rpb25zLm1hcCgocCkgPT4gcC50ZXh0Lmxlbmd0aCkucmVkdWNlKCh4LHkpID0+IHggKyB5LCAwKTtcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInByZWRpY3Rpb25fc3RyaXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVkaWN0aW9uc1wiIHN0eWxlPXt7d2lkdGg6IChjaGFyTGVuZ3RoICogOSkgKyBcInB4XCJ9fT5cbiAgICAgICAgICB7cmVvcmRlcihjdXJySW5kZXgsIHByZWRpY3Rpb25zKS5tYXAoKG9iaixpKSA9PiA8c3BhbiBvbkNsaWNrPXtzZXRJbnB1dChkaXNwYXRjaCwgb2JqLnRleHQsIG9iai5pZCl9IGNsYXNzTmFtZT17XCJwcmVkaWN0aW9uIFwiICsgb2JqLnN0eWxlfT57IG9iai50ZXh0IH08L3NwYW4+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xufTtcblxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBwcmVkaWN0aW9uczogc3RhdGUucHJlZGljdGlvbnMsXG4gICAgY3VyckluZGV4OiBzdGF0ZS5jdXJyZW50SW5wdXQuY2xhc3NJbmRleCAvLyBmb3Igc2VsZWN0ZWQgcHJlZGljdGlvblxufSk7XG5cblByZWRpY3Rpb25TdHJpcCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcmVkaWN0aW9uU3RyaXApO1xuXG5leHBvcnQge1ByZWRpY3Rpb25TdHJpcCwgc2V0SW5wdXR9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvUHJlZGljdGlvblN0cmlwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})