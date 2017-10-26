webpackHotUpdate(0,{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.input = exports.InputBox = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _index = __webpack_require__(43);\n\nvar _python = __webpack_require__(61);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// dom reference element for main user input box\nvar input = void 0;\n\n// helper to check whether history id (tracker in list) is not null (why does this exist??)\nvar doesHistoryExist = function doesHistoryExist(inputHistory) {\n    return inputHistory.currId !== null;\n};\n// get currently selected history element\nvar getCurrentHistory = function getCurrentHistory(inputHistory) {\n    return inputHistory.history.slice()[inputHistory.currId];\n};\n\n// key binder to grab special keystrokes in main input field\nvar _onKeyDown = function _onKeyDown(dispatch, inputHistory, e, predictions) {\n    var keyCode = e.keyCode || e.which;\n    // tab autocomplete\n    if (keyCode === 9) {\n        // tab\n        if (predictions.length > 0) {\n            var stripText = predictions[0].text.replace(/{/g, '').replace(/}/g, '');\n            input.value = stripText;\n            dispatch((0, _index.storeClassIndex)(predictions[0].class_index));\n            (0, _python.updateHint)(input.value);\n        }\n        e.preventDefault();\n    }\n    if (keyCode === 38) {\n        // up arrow\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'up' }));\n        if (doesHistoryExist(inputHistory)) {\n            input.value = getCurrentHistory(inputHistory);\n        }\n    } else if (keyCode === 40) {\n        // down arrow\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'down' }));\n        if (doesHistoryExist(inputHistory)) {\n            input.value = getCurrentHistory(inputHistory);\n        }\n    }\n};\n\n// store input value, and update hint and docs\nvar onChangeInput = function onChangeInput(dispatch) {\n    dispatch((0, _index.storeCurrentInput)(input.value));\n    (0, _python.updateHint)(input.value);\n    dispatch(clearClassIndex()\n    // updateDocs(input.value);\n    );\n};\n\n// this component defines main text input\nvar InputBox = function InputBox(_ref) {\n    var dispatch = _ref.dispatch,\n        inputHistory = _ref.inputHistory,\n        predictions = _ref.predictions,\n        classIndex = _ref.classIndex;\n    return _react2.default.createElement(\n        'div',\n        { className: 'input_box' },\n        _react2.default.createElement(\n            'form',\n            { onSubmit: function onSubmit(e) {\n                    console.log(classIndex);\n                    e.preventDefault();\n                    dispatch((0, _index.addMessage)({ 'origin': 'user', 'text': [input.value], 'class_index': classIndex }));\n                    dispatch((0, _index.addInputHistory)({ 'message': input.value }));\n                    dispatch((0, _index.storeCurrentInput)(''));\n                    input.value = '';\n                } },\n            _react2.default.createElement('input', { onChange: function onChange() {\n                    return onChangeInput(dispatch);\n                }, onKeyDown: function onKeyDown(e) {\n                    return _onKeyDown(dispatch, inputHistory, e, predictions);\n                }, type: 'text', placeholder: 'your message here', ref: function ref(node) {\n                    exports.input = input = node;\n                } })\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        inputHistory: state.inputHistory,\n        predictions: state.predictions,\n        classIndex: state.currentInput.class_index\n    };\n};\n\nexports.InputBox = InputBox = (0, _reactRedux.connect)(mapStateToProps)(InputBox);\n\nexports.InputBox = InputBox;\nexports.input = input;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcz9jYzUxIl0sIm5hbWVzIjpbIl8iLCJpbnB1dCIsImRvZXNIaXN0b3J5RXhpc3QiLCJpbnB1dEhpc3RvcnkiLCJjdXJySWQiLCJnZXRDdXJyZW50SGlzdG9yeSIsImhpc3RvcnkiLCJzbGljZSIsIm9uS2V5RG93biIsImRpc3BhdGNoIiwiZSIsInByZWRpY3Rpb25zIiwia2V5Q29kZSIsIndoaWNoIiwibGVuZ3RoIiwic3RyaXBUZXh0IiwidGV4dCIsInJlcGxhY2UiLCJ2YWx1ZSIsImNsYXNzX2luZGV4IiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZUlucHV0IiwiY2xlYXJDbGFzc0luZGV4IiwiSW5wdXRCb3giLCJjbGFzc0luZGV4IiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7Ozs7OztBQUVaO0FBQ0EsSUFBSUMsY0FBSjs7QUFFQTtBQUNBLElBQU1DLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLFlBQUQ7QUFBQSxXQUFrQkEsYUFBYUMsTUFBYixLQUF3QixJQUExQztBQUFBLENBQXpCO0FBQ0E7QUFDQSxJQUFNQyxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDRixZQUFEO0FBQUEsV0FBa0JBLGFBQWFHLE9BQWIsQ0FBcUJDLEtBQXJCLEdBQTZCSixhQUFhQyxNQUExQyxDQUFsQjtBQUFBLENBQTFCOztBQUVBO0FBQ0EsSUFBTUksYUFBWSxTQUFaQSxVQUFZLENBQUNDLFFBQUQsRUFBV04sWUFBWCxFQUF5Qk8sQ0FBekIsRUFBNEJDLFdBQTVCLEVBQTRDO0FBQzFELFFBQU1DLFVBQVVGLEVBQUVFLE9BQUYsSUFBYUYsRUFBRUcsS0FBL0I7QUFDQTtBQUNBLFFBQUlELFlBQVksQ0FBaEIsRUFBa0I7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LCJmaWxlIjoiMTMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRNZXNzYWdlLCBhZGRJbnB1dEhpc3RvcnksIG1vdmVJbnB1dEhpc3RvcnksIHN0b3JlQ3VycmVudElucHV0LCB1cGRhdGVEb2NFdmVudCwgc2V0RG9jcywgc3RvcmVDbGFzc0luZGV4IH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgeyB1cGRhdGVIaW50LCB1cGRhdGVEb2NzIH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vIGRvbSByZWZlcmVuY2UgZWxlbWVudCBmb3IgbWFpbiB1c2VyIGlucHV0IGJveFxubGV0IGlucHV0O1xuXG4vLyBoZWxwZXIgdG8gY2hlY2sgd2hldGhlciBoaXN0b3J5IGlkICh0cmFja2VyIGluIGxpc3QpIGlzIG5vdCBudWxsICh3aHkgZG9lcyB0aGlzIGV4aXN0Pz8pXG5jb25zdCBkb2VzSGlzdG9yeUV4aXN0ID0gKGlucHV0SGlzdG9yeSkgPT4gaW5wdXRIaXN0b3J5LmN1cnJJZCAhPT0gbnVsbDtcbi8vIGdldCBjdXJyZW50bHkgc2VsZWN0ZWQgaGlzdG9yeSBlbGVtZW50XG5jb25zdCBnZXRDdXJyZW50SGlzdG9yeSA9IChpbnB1dEhpc3RvcnkpID0+IGlucHV0SGlzdG9yeS5oaXN0b3J5LnNsaWNlKClbaW5wdXRIaXN0b3J5LmN1cnJJZF07XG5cbi8vIGtleSBiaW5kZXIgdG8gZ3JhYiBzcGVjaWFsIGtleXN0cm9rZXMgaW4gbWFpbiBpbnB1dCBmaWVsZFxuY29uc3Qgb25LZXlEb3duID0gKGRpc3BhdGNoLCBpbnB1dEhpc3RvcnksIGUsIHByZWRpY3Rpb25zKSA9PiB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZSB8fCBlLndoaWNoO1xuICAgIC8vIHRhYiBhdXRvY29tcGxldGVcbiAgICBpZiAoa2V5Q29kZSA9PT0gOSl7IC8vIHRhYlxuICAgICAgaWYocHJlZGljdGlvbnMubGVuZ3RoID4gMCl7XG4gICAgICAgIGxldCBzdHJpcFRleHQgPSBwcmVkaWN0aW9uc1swXS50ZXh0LnJlcGxhY2UoL3svZywgJycpLnJlcGxhY2UoL30vZywgJycpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHN0cmlwVGV4dDtcbiAgICAgICAgZGlzcGF0Y2goc3RvcmVDbGFzc0luZGV4KHByZWRpY3Rpb25zWzBdLmNsYXNzX2luZGV4KSk7XG4gICAgICAgIHVwZGF0ZUhpbnQoaW5wdXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoa2V5Q29kZSA9PT0gMzgpIHsgLy8gdXAgYXJyb3dcbiAgICAgICAgZGlzcGF0Y2gobW92ZUlucHV0SGlzdG9yeSh7J2RpcmVjdGlvbic6ICd1cCd9KSk7XG4gICAgICAgIGlmIChkb2VzSGlzdG9yeUV4aXN0KGlucHV0SGlzdG9yeSkpIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZ2V0Q3VycmVudEhpc3RvcnkoaW5wdXRIaXN0b3J5KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZihrZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGFycm93XG4gICAgICAgIGRpc3BhdGNoKG1vdmVJbnB1dEhpc3RvcnkoeydkaXJlY3Rpb24nOiAnZG93bid9KSk7XG4gICAgICAgIGlmIChkb2VzSGlzdG9yeUV4aXN0KGlucHV0SGlzdG9yeSkpIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZ2V0Q3VycmVudEhpc3RvcnkoaW5wdXRIaXN0b3J5KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIHN0b3JlIGlucHV0IHZhbHVlLCBhbmQgdXBkYXRlIGhpbnQgYW5kIGRvY3NcbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzdG9yZUN1cnJlbnRJbnB1dChpbnB1dC52YWx1ZSkpO1xuICAgIHVwZGF0ZUhpbnQoaW5wdXQudmFsdWUpO1xuICAgIGRpc3BhdGNoKGNsZWFyQ2xhc3NJbmRleCgpKVxuICAgIC8vIHVwZGF0ZURvY3MoaW5wdXQudmFsdWUpO1xufTtcblxuLy8gdGhpcyBjb21wb25lbnQgZGVmaW5lcyBtYWluIHRleHQgaW5wdXRcbmxldCBJbnB1dEJveCA9ICh7IGRpc3BhdGNoLCBpbnB1dEhpc3RvcnksIHByZWRpY3Rpb25zLCBjbGFzc0luZGV4IH0pID0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dF9ib3hcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2xhc3NJbmRleCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaXNwYXRjaChhZGRNZXNzYWdlKHsnb3JpZ2luJzogJ3VzZXInLCAndGV4dCc6IFtpbnB1dC52YWx1ZV0sICdjbGFzc19pbmRleCc6IGNsYXNzSW5kZXggfSkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goYWRkSW5wdXRIaXN0b3J5KHsnbWVzc2FnZSc6IGlucHV0LnZhbHVlfSkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoJycpKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoKX0gb25LZXlEb3duPXsoZSkgPT4gb25LZXlEb3duKGRpc3BhdGNoLCBpbnB1dEhpc3RvcnksIGUsIHByZWRpY3Rpb25zKX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInlvdXIgbWVzc2FnZSBoZXJlXCIgcmVmPXtub2RlID0+IHtpbnB1dCA9IG5vZGU7fX0+PC9pbnB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIGlucHV0SGlzdG9yeTogc3RhdGUuaW5wdXRIaXN0b3J5LFxuICAgIHByZWRpY3Rpb25zOiBzdGF0ZS5wcmVkaWN0aW9ucyxcbiAgICBjbGFzc0luZGV4OiBzdGF0ZS5jdXJyZW50SW5wdXQuY2xhc3NfaW5kZXgsXG59KTtcblxuSW5wdXRCb3ggPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5wdXRCb3gpO1xuXG5leHBvcnQge0lucHV0Qm94LCBpbnB1dH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})