webpackHotUpdate(0,{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.input = exports.InputBox = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _index = __webpack_require__(35);\n\nvar _python = __webpack_require__(61);\n\nvar _lodash = __webpack_require__(119);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// dom reference element for main user input box\nvar input = void 0;\n\n// helper to check whether history id (tracker in list) is not null (why does this exist??)\nvar doesHistoryExist = function doesHistoryExist(inputHistory) {\n    return inputHistory.currId !== null;\n};\n// get currently selected history element\nvar getCurrentHistory = function getCurrentHistory(inputHistory) {\n    return inputHistory.history.slice()[inputHistory.currId];\n};\n\n// key binder to grab special keystrokes in main input field\nvar _onKeyDown = function _onKeyDown(dispatch, inputHistory, e, predictions) {\n    var keyCode = e.keyCode || e.which;\n    // tab autocomplete\n    if (keyCode === 9) {\n        // tab\n        if (predictions.length > 0 && predictions[0].type === \"hint\") {\n            var stripText = predictions[0].text.replace(/{/g, '').replace(/}/g, '');\n            input.value = stripText;\n            dispatch((0, _index.storeClassIndex)(predictions[0].id));\n            (0, _python.updateHint)(input.value);\n        }\n        e.preventDefault();\n    }\n    if (keyCode === 38) {\n        // up arrow\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'up' }));\n        if (doesHistoryExist(inputHistory)) {\n            input.value = getCurrentHistory(inputHistory);\n        }\n    } else if (keyCode === 40) {\n        // down arrow\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'down' }));\n        if (doesHistoryExist(inputHistory)) {\n            input.value = getCurrentHistory(inputHistory);\n        }\n    }\n};\n\n// store input value, and update hint and docs\nvar onChangeInput = function onChangeInput(dispatch) {\n    dispatch((0, _index.storeCurrentInput)(input.value));\n    (0, _python.updateHint)(input.value);\n    dispatch((0, _index.clearClassIndex)()\n    // updateDocs(input.value);\n    );\n};\n\n// this component defines main text input\nvar InputBox = function InputBox(_ref) {\n    var dispatch = _ref.dispatch,\n        inputHistory = _ref.inputHistory,\n        predictions = _ref.predictions,\n        classIndex = _ref.classIndex;\n    return _react2.default.createElement(\n        'div',\n        { className: 'input_box' },\n        _react2.default.createElement(\n            'form',\n            { onSubmit: function onSubmit(e) {\n                    if (predictions.length > 0) {\n                        dispatch((0, _index.addMessage)({ 'origin': 'user', 'text': [input.value], 'class_index': classIndex }));\n                        dispatch((0, _index.addInputHistory)({ 'message': input.value }));\n                        dispatch((0, _index.storeCurrentInput)(''));\n                        input.value = '';\n                    }\n                } },\n            _react2.default.createElement('input', { onChange: function onChange() {\n                    return onChangeInput(dispatch);\n                }, onKeyDown: function onKeyDown(e) {\n                    return _onKeyDown(dispatch, inputHistory, e, predictions);\n                }, type: 'text', placeholder: 'your message here', ref: function ref(node) {\n                    exports.input = input = node;\n                } })\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        inputHistory: state.inputHistory,\n        predictions: state.predictions,\n        classIndex: state.currentInput.classIndex\n    };\n};\n\nexports.InputBox = InputBox = (0, _reactRedux.connect)(mapStateToProps)(InputBox);\n\nexports.InputBox = InputBox;\nexports.input = input;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcz9jYzUxIl0sIm5hbWVzIjpbIl8iLCJpbnB1dCIsImRvZXNIaXN0b3J5RXhpc3QiLCJpbnB1dEhpc3RvcnkiLCJjdXJySWQiLCJnZXRDdXJyZW50SGlzdG9yeSIsImhpc3RvcnkiLCJzbGljZSIsIm9uS2V5RG93biIsImRpc3BhdGNoIiwiZSIsInByZWRpY3Rpb25zIiwia2V5Q29kZSIsIndoaWNoIiwibGVuZ3RoIiwidHlwZSIsInN0cmlwVGV4dCIsInRleHQiLCJyZXBsYWNlIiwidmFsdWUiLCJpZCIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2VJbnB1dCIsIklucHV0Qm94IiwiY2xhc3NJbmRleCIsIm5vZGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7Ozs7OztBQUVaO0FBQ0EsSUFBSUMsY0FBSjs7QUFFQTtBQUNBLElBQU1DLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLFlBQUQ7QUFBQSxXQUFrQkEsYUFBYUMsTUFBYixLQUF3QixJQUExQztBQUFBLENBQXpCO0FBQ0E7QUFDQSxJQUFNQyxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDRixZQUFEO0FBQUEsV0FBa0JBLGFBQWFHLE9BQWIsQ0FBcUJDLEtBQXJCLEdBQTZCSixhQUFhQyxNQUExQyxDQUFsQjtBQUFBLENBQTFCOztBQUVBO0FBQ0EsSUFBTUksYUFBWSxTQUFaQSxVQUFZLENBQUNDLFFBQUQsRUFBV04sWUFBWCxFQUF5Qk8sQ0FBekIsRUFBNEJDLFdBQTVCLEVBQTRDO0FBQzFELFFBQU1DLFVBQVVGLEVBQUVFLE9BQUYsSUFBYUYsRUFBRUcsS0FBL0I7QUFDQTtBQUNBLFFBQUlELFlBQVksQ0FBaEIsRUFBa0I7QUFBRTtBQUNsQixZQUFHRCxZQUFZRyxNQUFaLEdBQXFCLENB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LEsiLCJmaWxlIjoiMTMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRNZXNzYWdlLCBhZGRJbnB1dEhpc3RvcnksIG1vdmVJbnB1dEhpc3RvcnksIHN0b3JlQ3VycmVudElucHV0LCB1cGRhdGVEb2NFdmVudCwgc2V0RG9jcywgc3RvcmVDbGFzc0luZGV4LCBjbGVhckNsYXNzSW5kZXggfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IHVwZGF0ZUhpbnQsIHVwZGF0ZURvY3MgfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuLy8gZG9tIHJlZmVyZW5jZSBlbGVtZW50IGZvciBtYWluIHVzZXIgaW5wdXQgYm94XG5sZXQgaW5wdXQ7XG5cbi8vIGhlbHBlciB0byBjaGVjayB3aGV0aGVyIGhpc3RvcnkgaWQgKHRyYWNrZXIgaW4gbGlzdCkgaXMgbm90IG51bGwgKHdoeSBkb2VzIHRoaXMgZXhpc3Q/PylcbmNvbnN0IGRvZXNIaXN0b3J5RXhpc3QgPSAoaW5wdXRIaXN0b3J5KSA9PiBpbnB1dEhpc3RvcnkuY3VycklkICE9PSBudWxsO1xuLy8gZ2V0IGN1cnJlbnRseSBzZWxlY3RlZCBoaXN0b3J5IGVsZW1lbnRcbmNvbnN0IGdldEN1cnJlbnRIaXN0b3J5ID0gKGlucHV0SGlzdG9yeSkgPT4gaW5wdXRIaXN0b3J5Lmhpc3Rvcnkuc2xpY2UoKVtpbnB1dEhpc3RvcnkuY3VycklkXTtcblxuLy8ga2V5IGJpbmRlciB0byBncmFiIHNwZWNpYWwga2V5c3Ryb2tlcyBpbiBtYWluIGlucHV0IGZpZWxkXG5jb25zdCBvbktleURvd24gPSAoZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgZSwgcHJlZGljdGlvbnMpID0+IHtcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XG4gICAgLy8gdGFiIGF1dG9jb21wbGV0ZVxuICAgIGlmIChrZXlDb2RlID09PSA5KXsgLy8gdGFiXG4gICAgICBpZihwcmVkaWN0aW9ucy5sZW5ndGggPiAwICYmIHByZWRpY3Rpb25zWzBdLnR5cGUgPT09IFwiaGludFwiKXtcbiAgICAgICAgbGV0IHN0cmlwVGV4dCA9IHByZWRpY3Rpb25zWzBdLnRleHQucmVwbGFjZSgvey9nLCAnJykucmVwbGFjZSgvfS9nLCAnJyk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gc3RyaXBUZXh0O1xuICAgICAgICBkaXNwYXRjaChzdG9yZUNsYXNzSW5kZXgocHJlZGljdGlvbnNbMF0uaWQpKTtcbiAgICAgICAgdXBkYXRlSGludChpbnB1dC52YWx1ZSk7XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChrZXlDb2RlID09PSAzOCkgeyAvLyB1cCBhcnJvd1xuICAgICAgICBkaXNwYXRjaChtb3ZlSW5wdXRIaXN0b3J5KHsnZGlyZWN0aW9uJzogJ3VwJ30pKTtcbiAgICAgICAgaWYgKGRvZXNIaXN0b3J5RXhpc3QoaW5wdXRIaXN0b3J5KSkge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBnZXRDdXJyZW50SGlzdG9yeShpbnB1dEhpc3RvcnkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKGtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24gYXJyb3dcbiAgICAgICAgZGlzcGF0Y2gobW92ZUlucHV0SGlzdG9yeSh7J2RpcmVjdGlvbic6ICdkb3duJ30pKTtcbiAgICAgICAgaWYgKGRvZXNIaXN0b3J5RXhpc3QoaW5wdXRIaXN0b3J5KSkge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBnZXRDdXJyZW50SGlzdG9yeShpbnB1dEhpc3RvcnkpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gc3RvcmUgaW5wdXQgdmFsdWUsIGFuZCB1cGRhdGUgaGludCBhbmQgZG9jc1xuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHN0b3JlQ3VycmVudElucHV0KGlucHV0LnZhbHVlKSk7XG4gICAgdXBkYXRlSGludChpbnB1dC52YWx1ZSk7XG4gICAgZGlzcGF0Y2goY2xlYXJDbGFzc0luZGV4KCkpXG4gICAgLy8gdXBkYXRlRG9jcyhpbnB1dC52YWx1ZSk7XG59O1xuXG4vLyB0aGlzIGNvbXBvbmVudCBkZWZpbmVzIG1haW4gdGV4dCBpbnB1dFxubGV0IElucHV0Qm94ID0gKHsgZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgcHJlZGljdGlvbnMsIGNsYXNzSW5kZXggfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X2JveFwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlZGljdGlvbnMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKGFkZE1lc3NhZ2UoeydvcmlnaW4nOiAndXNlcicsICd0ZXh0JzogW2lucHV0LnZhbHVlXSwgJ2NsYXNzX2luZGV4JzogY2xhc3NJbmRleCB9KSk7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKGFkZElucHV0SGlzdG9yeSh7J21lc3NhZ2UnOiBpbnB1dC52YWx1ZX0pKTtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoJycpKTtcbiAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlSW5wdXQoZGlzcGF0Y2gpfSBvbktleURvd249eyhlKSA9PiBvbktleURvd24oZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgZSwgcHJlZGljdGlvbnMpfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwieW91ciBtZXNzYWdlIGhlcmVcIiByZWY9e25vZGUgPT4ge2lucHV0ID0gbm9kZTt9fT48L2lucHV0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgaW5wdXRIaXN0b3J5OiBzdGF0ZS5pbnB1dEhpc3RvcnksXG4gICAgcHJlZGljdGlvbnM6IHN0YXRlLnByZWRpY3Rpb25zLFxuICAgIGNsYXNzSW5kZXg6IHN0YXRlLmN1cnJlbnRJbnB1dC5jbGFzc0luZGV4LFxufSk7XG5cbklucHV0Qm94ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKElucHV0Qm94KTtcblxuZXhwb3J0IHtJbnB1dEJveCwgaW5wdXR9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvSW5wdXRCb3guanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})