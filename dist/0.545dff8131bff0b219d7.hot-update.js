webpackHotUpdate(0,{

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setInput = exports.PredictionStrip = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _InputBox = __webpack_require__(130);\n\nvar _python = __webpack_require__(61);\n\nvar _index = __webpack_require__(35);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// set main input text and update hint\nvar setInput = function setInput(dispatch, text, id) {\n  return function () {\n    var stripText = text.replace(/{/g, '').replace(/}/g, '');\n    _InputBox.input.value = stripText;\n    (0, _python.updateHint)(stripText);\n    dispatch((0, _index.storeClassIndex)(id));\n  };\n};\n\nvar normalStyle = function normalStyle(lst) {\n  return _.map(lst, function (p) {\n    return { id: p.id, text: p.text, style: \"normal\" };\n  });\n};\n\nvar selectedStyle = function selectedStyle(lst) {\n  return _.map(lst, function (p) {\n    return { id: p.id, text: p.text, style: \"c0\" };\n  });\n};\n\nvar reorder = function reorder(currIndex, predictions) {\n  console.log(currIndex, predictions);\n  console.log(normalStyle(predictions));\n  if (currIndex == null) {} else {\n    return [].concat(_toConsumableArray(selectedStyle(_.filter(predictions, function (p) {\n      return p.id === currIndex;\n    }))), _toConsumableArray(normalStyle(_.filter(predictions, function (p) {\n      return p.id !== currIndex;\n    }))));\n  }\n};\n\n// TODO: should logic that binds to tab-key press be here as well?\n\n// defines component for prediction strip above main input text\nvar PredictionStrip = function PredictionStrip(_ref) {\n  var dispatch = _ref.dispatch,\n      predictions = _ref.predictions,\n      currIndex = _ref.currIndex;\n\n  // TODO: optimize width\n  var charLength = predictions.map(function (p) {\n    return p.text.length;\n  }).reduce(function (x, y) {\n    return x + y;\n  }, 0);\n  return _react2.default.createElement(\n    'div',\n    { className: 'prediction_strip' },\n    _react2.default.createElement(\n      'div',\n      { className: 'predictions', style: { width: charLength * 9 + \"px\" } },\n      reorder(currIndex, predictions).map(function (obj, i) {\n        return _react2.default.createElement(\n          'span',\n          { onClick: setInput(dispatch, obj.text, obj.id), className: \"prediction \" + obj.style },\n          obj.text\n        );\n      })\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    predictions: state.predictions,\n    currIndex: state.currentInput.classIndex // for selected prediction\n  };\n};\n\nexports.PredictionStrip = PredictionStrip = (0, _reactRedux.connect)(mapStateToProps)(PredictionStrip);\n\nexports.PredictionStrip = PredictionStrip;\nexports.setInput = setInput;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QcmVkaWN0aW9uU3RyaXAuanM/ZDFhMiJdLCJuYW1lcyI6WyJfIiwic2V0SW5wdXQiLCJkaXNwYXRjaCIsInRleHQiLCJpZCIsInN0cmlwVGV4dCIsInJlcGxhY2UiLCJ2YWx1ZSIsIm5vcm1hbFN0eWxlIiwibHN0IiwibWFwIiwicCIsInN0eWxlIiwic2VsZWN0ZWRTdHlsZSIsInJlb3JkZXIiLCJjdXJySW5kZXgiLCJwcmVkaWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJQcmVkaWN0aW9uU3RyaXAiLCJjaGFyTGVuZ3RoIiwibGVuZ3RoIiwicmVkdWNlIiwieCIsInkiLCJ3aWR0aCIsIm9iaiIsImkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRJbnB1dCIsImNsYXNzSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztJQUFZQSxDOzs7Ozs7OztBQUVaO0FBQ0EsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBV0MsSUFBWCxFQUFpQkMsRUFBakIsRUFBd0I7QUFDckMsU0FBTyxZQUFNO0FBQ1QsUUFBSUMsWUFBWUYsS0FBS0csT0FBTCxDQUFhLElBQWIsRUFBbUIsRUFBbkIsRUFBdUJBLE9BQXZCLENBQStCLElBQS9CLEVBQXFDLEVBQXJDLENBQWhCO0FBQ0Esb0JBQU1DLEtBQU4sR0FBY0YsU0FBZDtBQUNBLDRCQUFXQSxTQUFYO0FBQ0FILGFBQVMsNEJBQWdCRSxFQUFoQixDQUFUO0FBQ0gsR0FMRDtBQU1ILENBUEQ7O0FBU0EsSUFBTUksY0FBYyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBUztBQUMzQixTQUFPVCxFQUFFVSxHQUFGLENBQU1ELEdBQU4sRUFBVyxVQUFDRSxDQUFELEVBQU87QUFBRSxXQUFPLEVBQUNQLElBQUdPLEVBQUVQLEVBQU4sRUFBVUQsTUFBS1EsRUFBRVIsSUFBakIsRUFBdUJTLE9BQU8sUUFBOUIsRUFBUDtBQUFpRCxHQUFyRSxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNKLEdBQUQsRUFBUztBQUM3QixTQUFPVCxFQUFFVSxHQUFGLENBQU1ELEdBQU4sRUFBVyxVQUFDRSxDQUFELEVBQU87QUFBRSxXQUFPLEVBQUNQLElBQUdPLEVBQUVQLEVBQU4sRUFBVUQsTUFBS1EsRUFBRVIsSUFBakIsRUFBdUJTLE9BQU8sSUFBOUIsRUFBUDtBQUE2QyxHQUFqRSxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNRSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsU0FBRCxFQUFZQyxXQUFaLEVBQTRCO0FBQzFDQyxVQUFRQyxHQUFSLENBQVlILFNBQVosRUFBdUJDLFdBQXZCO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWVYsWUFBWVEsV0FBWixDQUFaO0FBQ0EsTUFBSUQsYUFBYSxJQUFqQixFQUFzQixDQUVyQixDQUZELE1BRU87QUFDTCx3Q0FBWUYsY0FBY2IsRUFBRW1CLE1BQUYsQ0FBU0gsV0FBVCxFQUFzQixVQUFDTCxDQUFEO0FBQUEsYUFBT0EsRUFBRVAsRUFBRixLQUFTVyxTQUFoQjtBQUFBLEtBQXRCLENBQWQsQ0FBWixzQkFDWVAsWUFBWVIsRUFBRW1CLE1BQUYsQ0FBU0gsV0FBVCxFQUFzQixVQUFDTCxDQUFEO0FBQUEsYUFBT0EsRUFBRVAsRUFBRixLQUFTVyxTQUFoQjtBQUFBLEtBQXRCLENBQVosQ0FEWjtBQUVEO0FBQ0YsQ0FURDs7QUFXQTs7QUFFQTtBQUNBLElBQUlLLGtCQUFrQiwrQkFBd0M7QUFBQSxNQUF0Q2xCLFFBQXNDLFFBQXRDQSxRQUFzQztBQUFBLE1BQTVCYyxXQUE0QixRQUE1QkEsV0FBNEI7QUFBQSxNQUFmRCxTQUFlLFFBQWZBLFNBQWU7O0FBQzVEO0FBQ0EsTUFBTU0sYUFBYUwsWUFBWU4sR0FBWixDQUFnQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsRUFBRVIsSUFBRixDQUFPbUIsTUFBZDtBQUFBLEdBQWhCLEVBQXNDQyxNQUF0QyxDQUE2QyxVQUFDQyxDQUFELEVBQUdDLENBQUg7QUFBQSxXQUFTRCxJQUFJQyxDQUFiO0FBQUEsR0FBN0MsRUFBNkQsQ0FBN0QsQ0FBbkI7QUFDQSxTQUFRO0FBQUE7QUFBQSxNQUFLLFdBQVUsa0JBQWY7QUFDRjtBQUFBO0FBQUEsUUFBSyxXQUFVLGFBQWYsRUFBNkIsT0FBTyxFQUFDQyxPQUFRTCxhQUFhLENBQWQsR0FBbUIsSUFBM0IsRUFBcEM7QUFDR1AsY0FBUUMsU0FBUixFQUFtQkMsV0FBbkIsRUFBZ0NOLEdBQWhDLENBQW9DLFVBQUNpQixHQUFELEVBQUtDLENBQUw7QUFBQSxlQUFXO0FBQUE7QUFBQSxZQUFNLFNBQVMzQixTQUFTQyxRQUFULEVBQW1CeUIsSUFBSXhCLElBQXZCLEVBQTZCd0IsSUFBSXZCLEVBQWpDLENBQWYsRUFBcUQsV0FBVyxnQkFBZ0J1QixJQUFJZixLQUFwRjtBQUE2RmUsY0FBSXhCO0FBQWpHLFNBQVg7QUFBQSxPQUFwQztBQURIO0FBREUsR0FBUjtBQUtELENBUkQ7O0FBWUEsSUFBTTBCLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDaENkLGlCQUFhYyxNQUFNZCxXQURhO0FBRWhDRCxlQUFXZSxNQUFNQyxZQUFOLENBQW1CQyxVQUZFLENBRVM7QUFGVCxHQUFaO0FBQUEsQ0FBeEI7O0FBS0EsUUFFUVosZUFGUixxQkFBa0IseUJBQVFTLGVBQVIsRUFBeUJULGVBQXpCLENBQWxCOztRQUVRQSxlLEdBQUFBLGU7UUFBaUJuQixRLEdBQUFBLFEiLCJmaWxlIjoiNTAxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlucHV0IH0gZnJvbSAnLi4vY29udGFpbmVycy9JbnB1dEJveCc7XG5pbXBvcnQgeyB1cGRhdGVIaW50IH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5pbXBvcnQgeyBzdG9yZUNsYXNzSW5kZXgsIGNsZWFyQ2xhc3NJbmRleCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuLy8gc2V0IG1haW4gaW5wdXQgdGV4dCBhbmQgdXBkYXRlIGhpbnRcbmNvbnN0IHNldElucHV0ID0gKGRpc3BhdGNoLCB0ZXh0ICxpZCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGxldCBzdHJpcFRleHQgPSB0ZXh0LnJlcGxhY2UoL3svZywgJycpLnJlcGxhY2UoL30vZywgJycpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHN0cmlwVGV4dDtcbiAgICAgICAgdXBkYXRlSGludChzdHJpcFRleHQpO1xuICAgICAgICBkaXNwYXRjaChzdG9yZUNsYXNzSW5kZXgoaWQpKTtcbiAgICB9O1xufTtcblxuY29uc3Qgbm9ybWFsU3R5bGUgPSAobHN0KSA9PiB7XG4gIHJldHVybiBfLm1hcChsc3QsIChwKSA9PiB7IHJldHVybiB7aWQ6cC5pZCwgdGV4dDpwLnRleHQsIHN0eWxlOiBcIm5vcm1hbFwifTsgfSk7XG59O1xuXG5jb25zdCBzZWxlY3RlZFN0eWxlID0gKGxzdCkgPT4ge1xuICByZXR1cm4gXy5tYXAobHN0LCAocCkgPT4geyByZXR1cm4ge2lkOnAuaWQsIHRleHQ6cC50ZXh0LCBzdHlsZTogXCJjMFwifTsgfSk7XG59O1xuXG5jb25zdCByZW9yZGVyID0gKGN1cnJJbmRleCwgcHJlZGljdGlvbnMpID0+IHtcbiAgY29uc29sZS5sb2coY3VyckluZGV4LCBwcmVkaWN0aW9ucyk7XG4gIGNvbnNvbGUubG9nKG5vcm1hbFN0eWxlKHByZWRpY3Rpb25zKSk7XG4gIGlmIChjdXJySW5kZXggPT0gbnVsbCl7XG5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gWy4uLihzZWxlY3RlZFN0eWxlKF8uZmlsdGVyKHByZWRpY3Rpb25zLCAocCkgPT4gcC5pZCA9PT0gY3VyckluZGV4KSkpLFxuICAgICAgICAgICAgLi4uKG5vcm1hbFN0eWxlKF8uZmlsdGVyKHByZWRpY3Rpb25zLCAocCkgPT4gcC5pZCAhPT0gY3VyckluZGV4KSkpXVxuICB9XG59O1xuXG4vLyBUT0RPOiBzaG91bGQgbG9naWMgdGhhdCBiaW5kcyB0byB0YWIta2V5IHByZXNzIGJlIGhlcmUgYXMgd2VsbD9cblxuLy8gZGVmaW5lcyBjb21wb25lbnQgZm9yIHByZWRpY3Rpb24gc3RyaXAgYWJvdmUgbWFpbiBpbnB1dCB0ZXh0XG5sZXQgUHJlZGljdGlvblN0cmlwID0gKHtkaXNwYXRjaCwgcHJlZGljdGlvbnMsIGN1cnJJbmRleH0pID0+IHtcbiAgLy8gVE9ETzogb3B0aW1pemUgd2lkdGhcbiAgY29uc3QgY2hhckxlbmd0aCA9IHByZWRpY3Rpb25zLm1hcCgocCkgPT4gcC50ZXh0Lmxlbmd0aCkucmVkdWNlKCh4LHkpID0+IHggKyB5LCAwKTtcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInByZWRpY3Rpb25fc3RyaXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVkaWN0aW9uc1wiIHN0eWxlPXt7d2lkdGg6IChjaGFyTGVuZ3RoICogOSkgKyBcInB4XCJ9fT5cbiAgICAgICAgICB7cmVvcmRlcihjdXJySW5kZXgsIHByZWRpY3Rpb25zKS5tYXAoKG9iaixpKSA9PiA8c3BhbiBvbkNsaWNrPXtzZXRJbnB1dChkaXNwYXRjaCwgb2JqLnRleHQsIG9iai5pZCl9IGNsYXNzTmFtZT17XCJwcmVkaWN0aW9uIFwiICsgb2JqLnN0eWxlfT57IG9iai50ZXh0IH08L3NwYW4+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xufTtcblxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBwcmVkaWN0aW9uczogc3RhdGUucHJlZGljdGlvbnMsXG4gICAgY3VyckluZGV4OiBzdGF0ZS5jdXJyZW50SW5wdXQuY2xhc3NJbmRleCAvLyBmb3Igc2VsZWN0ZWQgcHJlZGljdGlvblxufSk7XG5cblByZWRpY3Rpb25TdHJpcCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcmVkaWN0aW9uU3RyaXApO1xuXG5leHBvcnQge1ByZWRpY3Rpb25TdHJpcCwgc2V0SW5wdXR9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvUHJlZGljdGlvblN0cmlwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})