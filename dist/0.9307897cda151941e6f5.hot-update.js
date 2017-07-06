webpackHotUpdate(0,{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.input = exports.InputBox = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(30);\n\nvar _index = __webpack_require__(54);\n\nvar _python = __webpack_require__(80);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar input = void 0;\n\nvar notNull = function notNull(inputHistory) {\n    return inputHistory.currId !== null;\n};\nvar getCurrentHistory = function getCurrentHistory(inputHistory) {\n    return _.reverse(inputHistory.history.slice())[inputHistory.currId];\n};\n\nvar _onKeyDown = function _onKeyDown(dispatch, inputHistory, e, predictions) {\n    var keyCode = e.keyCode || e.which;\n    console.log(keyCode);\n    if (keyCode === 9) {\n        // tab\n        if (predictions.length > 0) {\n            var stripText = predictions[0].text.replace(/{/g, '').replace(/}/g, '');\n            input.value = stripText;\n            (0, _python.updateHint)(input.value);\n        }\n        e.preventDefault();\n    }\n    if (keyCode === 38) {\n        // up arrow\n        console.log('up arrow');\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'up' }));\n        console.log(inputHistory);\n        if (notNull(inputHistory)) {\n            console.log('diplay', getCurrentHistory(inputHistory));\n            input.value = getCurrentHistory(inputHistory);\n        }\n    } else if (keyCode === 40) {\n        // down arrow\n        console.log('down arrow');\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'down' }));\n        console.log(inputHistory);\n        if (notNull(inputHistory)) {\n            console.log('display', getCurrentHistory(inputHistory));\n            input.value = getCurrentHistory(inputHistory);\n        }\n    }\n};\n// canal artefact wood angle coffee february media aunt tail load weapon jazz\nvar onChangeInput = function onChangeInput(dispatch) {\n    dispatch((0, _index.storeCurrentInput)(input.value));\n    (0, _python.updateHint)(input.value);\n    // updateDocs(input.value);\n};\n\nvar lookup_func = function lookup_func(dispatch, minimizeState, currMessages) {\n    dispatch((0, _index.setDocs)({ docs: !minimizeState.docs }));\n    if (currMessages.length > 0) {\n        // console.log(currMessages);\n        (0, _python.updateDocs)(currMessages[0].text);\n    } else {\n        (0, _python.updateDocs)(input.value);\n    }\n};\n\n// input goes here\nvar InputBox = function InputBox(_ref) {\n    var dispatch = _ref.dispatch,\n        inputHistory = _ref.inputHistory,\n        predictions = _ref.predictions,\n        minimizeState = _ref.minimizeState,\n        currMessages = _ref.currMessages;\n    return _react2.default.createElement(\n        'div',\n        { className: 'input_box' },\n        _react2.default.createElement(\n            'form',\n            { onSubmit: function onSubmit(e) {\n                    e.preventDefault();\n                    dispatch((0, _index.addMessage)({ 'origin': 'user', 'text': [input.value] }));\n                    dispatch((0, _index.addInputHistory)({ 'message': input.value }));\n                    dispatch((0, _index.storeCurrentInput)(''));\n                    // dispatch(updateDocEvent({'doc':{'title':''}}));\n                    input.value = '';\n                } },\n            _react2.default.createElement('input', { onChange: function onChange() {\n                    return onChangeInput(dispatch);\n                }, onKeyDown: function onKeyDown(e) {\n                    return _onKeyDown(dispatch, inputHistory, e, predictions);\n                }, type: 'text', placeholder: 'your message here', ref: function ref(node) {\n                    exports.input = input = node;\n                } }),\n            _react2.default.createElement('img', { className: 'hintButton', width: '21px', src: 'http://0.0.0.0:8000/static/noun_89606.svg', onClick: function onClick() {\n                    return lookup_func(dispatch, minimizeState, currMessages);\n                } })\n        )\n    );\n};\n\nInputBox.propTypes = {\n    dispatch: _react.PropTypes.func,\n    inputHistory: _react.PropTypes.any,\n    predictions: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        inputHistory: state.inputHistory,\n        predictions: state.predictions,\n        minimizeState: state.minimizeState,\n        currMessages: state.conversation.currentConvo.messages\n    };\n};\n\nexports.InputBox = InputBox = (0, _reactRedux.connect)(mapStateToProps)(InputBox);\n\nexports.InputBox = InputBox;\nexports.input = input;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcz9jYzUxIl0sIm5hbWVzIjpbIl8iLCJpbnB1dCIsIm5vdE51bGwiLCJpbnB1dEhpc3RvcnkiLCJjdXJySWQiLCJnZXRDdXJyZW50SGlzdG9yeSIsInJldmVyc2UiLCJoaXN0b3J5Iiwic2xpY2UiLCJvbktleURvd24iLCJkaXNwYXRjaCIsImUiLCJwcmVkaWN0aW9ucyIsImtleUNvZGUiLCJ3aGljaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJzdHJpcFRleHQiLCJ0ZXh0IiwicmVwbGFjZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZUlucHV0IiwibG9va3VwX2Z1bmMiLCJtaW5pbWl6ZVN0YXRlIiwiY3Vyck1lc3NhZ2VzIiwiZG9jcyIsIklucHV0Qm94Iiwibm9kZSIsInByb3BUeXBlcyIsImZ1bmMiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbnZlcnNhdGlvbiIsImN1cnJlbnRDb252byIsIm1lc3NhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7SUFBWUEsQzs7Ozs7O0FBR1osSUFBSUMsY0FBSjs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsWUFBRDtBQUFBLFdBQWtCQSxhQUFhQyxNQUFiLEtBQXdCLElBQTFDO0FBQUEsQ0FBaEI7QUFDQSxJQUFNQyxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDRixZQUFEO0FBQUEsV0FBa0JILEVBQUVNLE9BQUYsQ0FBVUgsYUFBYUksT0FBYixDQUFxQkMsS0FBckIsRUFBVixFQUF3Q0wsYUFBYUMsTUFBckQsQ0FBbEI7QUFBQSxDQUExQjs7QUFFQSxJQUFNSyxhQUFZLFNBQVpBLFVBQVksQ0FBQ0MsUUFBRCxFQUFXUCxZQUFYLEVBQXlCUSxDQUF6QixFQUE0QkMsV0FBNUIsRUFBNEM7QUFDMUQsUUFBTUMsVUFBVUYsRUFBRUUs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QWQsQ0FBTjtBQUFBLGlCQUFqQixFQUFnRCxXQUFXLG1CQUFDQyxDQUFEO0FBQUEsMkJBQU9GLFdBQVVDLFFBQVYsRUFBb0JQLFlBQXBCLEVBQWtDUSxDQUFsQyxFQUFxQ0MsV0FBckMsQ0FBUDtBQUFBLGlCQUEzRCxFQUFxSCxNQUFLLE1BQTFILEVBQWlJLGFBQVksbUJBQTdJLEVBQWlLLEtBQUssbUJBQVE7QUFBQyw0QkFvQnpLWCxLQXBCeUssV0FBUTRCLElBQVI7QUFBYyxpQkFBN0wsR0FSSjtBQVNJLG1EQUFLLFdBQVUsWUFBZixFQUE0QixPQUFNLE1BQWxDLEVBQXlDLEtBQUksMkNBQTdDLEVBQXlGLFNBQVM7QUFBQSwyQkFBTUwsWUFBWWQsUUFBWixFQUFzQmUsYUFBdEIsRUFBcUNDLFlBQXJDLENBQU47QUFBQSxpQkFBbEc7QUFUSjtBQURKLEtBRFc7QUFBQSxDQUFmOztBQWVBRSxTQUFTRSxTQUFULEdBQXFCO0FBQ2pCcEIsY0FBVSxpQkFBVXFCLElBREg7QUFFakI1QixrQkFBYyxpQkFBVTZCLEdBRlA7QUFHakJwQixpQkFBYSxpQkFBVW9CO0FBSE4sQ0FBckI7O0FBTUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUNoQy9CLHNCQUFjK0IsTUFBTS9CLFlBRFk7QUFFaENTLHFCQUFhc0IsTUFBTXRCLFdBRmE7QUFHaENhLHVCQUFlUyxNQUFNVCxhQUhXO0FBSWhDQyxzQkFBY1EsTUFBTUMsWUFBTixDQUFtQkMsWUFBbkIsQ0FBZ0NDO0FBSmQsS0FBWjtBQUFBLENBQXhCOztBQU9BLFFBRVFULFFBRlIsY0FBVyx5QkFBUUssZUFBUixFQUF5QkwsUUFBekIsQ0FBWDs7UUFFUUEsUSxHQUFBQSxRO1FBQVUzQixLLEdBQUFBLEsiLCJmaWxlIjoiMTMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRNZXNzYWdlLCBhZGRJbnB1dEhpc3RvcnksIG1vdmVJbnB1dEhpc3RvcnksIHN0b3JlQ3VycmVudElucHV0LCB1cGRhdGVEb2NFdmVudCwgc2V0RG9jcyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgdXBkYXRlSGludCwgdXBkYXRlRG9jcyB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cblxubGV0IGlucHV0O1xuXG5jb25zdCBub3ROdWxsID0gKGlucHV0SGlzdG9yeSkgPT4gaW5wdXRIaXN0b3J5LmN1cnJJZCAhPT0gbnVsbDtcbmNvbnN0IGdldEN1cnJlbnRIaXN0b3J5ID0gKGlucHV0SGlzdG9yeSkgPT4gXy5yZXZlcnNlKGlucHV0SGlzdG9yeS5oaXN0b3J5LnNsaWNlKCkpW2lucHV0SGlzdG9yeS5jdXJySWRdO1xuXG5jb25zdCBvbktleURvd24gPSAoZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgZSwgcHJlZGljdGlvbnMpID0+IHtcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XG4gICAgY29uc29sZS5sb2coa2V5Q29kZSk7XG4gICAgaWYgKGtleUNvZGUgPT09IDkpeyAvLyB0YWJcbiAgICAgIGlmKHByZWRpY3Rpb25zLmxlbmd0aCA+IDApe1xuICAgICAgICBsZXQgc3RyaXBUZXh0ID0gcHJlZGljdGlvbnNbMF0udGV4dC5yZXBsYWNlKC97L2csICcnKS5yZXBsYWNlKC99L2csICcnKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBzdHJpcFRleHQ7XG4gICAgICAgIHVwZGF0ZUhpbnQoaW5wdXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoa2V5Q29kZSA9PT0gMzgpIHsgLy8gdXAgYXJyb3dcbiAgICAgICAgY29uc29sZS5sb2coJ3VwIGFycm93Jyk7XG4gICAgICAgIGRpc3BhdGNoKG1vdmVJbnB1dEhpc3RvcnkoeydkaXJlY3Rpb24nOiAndXAnfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEhpc3RvcnkpO1xuICAgICAgICBpZiAobm90TnVsbChpbnB1dEhpc3RvcnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGlwbGF5JywgZ2V0Q3VycmVudEhpc3RvcnkoaW5wdXRIaXN0b3J5KSk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYoa2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBhcnJvd1xuICAgICAgICBjb25zb2xlLmxvZygnZG93biBhcnJvdycpO1xuICAgICAgICBkaXNwYXRjaChtb3ZlSW5wdXRIaXN0b3J5KHsnZGlyZWN0aW9uJzogJ2Rvd24nfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEhpc3RvcnkpO1xuICAgICAgICBpZiAobm90TnVsbChpbnB1dEhpc3RvcnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGlzcGxheScsIGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSkpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBnZXRDdXJyZW50SGlzdG9yeShpbnB1dEhpc3RvcnkpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIGNhbmFsIGFydGVmYWN0IHdvb2QgYW5nbGUgY29mZmVlIGZlYnJ1YXJ5IG1lZGlhIGF1bnQgdGFpbCBsb2FkIHdlYXBvbiBqYXp6XG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQudmFsdWUpKTtcbiAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICAvLyB1cGRhdGVEb2NzKGlucHV0LnZhbHVlKTtcbn07XG5cbmNvbnN0IGxvb2t1cF9mdW5jID0gKGRpc3BhdGNoLCBtaW5pbWl6ZVN0YXRlLCBjdXJyTWVzc2FnZXMpID0+IHtcbiAgZGlzcGF0Y2goc2V0RG9jcyh7ZG9jczohbWluaW1pemVTdGF0ZS5kb2NzfSkpXG4gIGlmIChjdXJyTWVzc2FnZXMubGVuZ3RoID4gMCl7XG4gICAgLy8gY29uc29sZS5sb2coY3Vyck1lc3NhZ2VzKTtcbiAgICB1cGRhdGVEb2NzKGN1cnJNZXNzYWdlc1swXS50ZXh0KTtcbiAgfVxuICBlbHNle1xuICAgIHVwZGF0ZURvY3MoaW5wdXQudmFsdWUpO1xuICB9XG59XG5cbi8vIGlucHV0IGdvZXMgaGVyZVxubGV0IElucHV0Qm94ID0gKHsgZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgcHJlZGljdGlvbnMsIG1pbmltaXplU3RhdGUsIGN1cnJNZXNzYWdlcyB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRfYm94XCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZE1lc3NhZ2UoeydvcmlnaW4nOiAndXNlcicsICd0ZXh0JzogW2lucHV0LnZhbHVlXSB9KSk7XG4gICAgICAgICAgICBkaXNwYXRjaChhZGRJbnB1dEhpc3RvcnkoeydtZXNzYWdlJzogaW5wdXQudmFsdWV9KSk7XG4gICAgICAgICAgICBkaXNwYXRjaChzdG9yZUN1cnJlbnRJbnB1dCgnJykpO1xuICAgICAgICAgICAgLy8gZGlzcGF0Y2godXBkYXRlRG9jRXZlbnQoeydkb2MnOnsndGl0bGUnOicnfX0pKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoKX0gb25LZXlEb3duPXsoZSkgPT4gb25LZXlEb3duKGRpc3BhdGNoLCBpbnB1dEhpc3RvcnksIGUsIHByZWRpY3Rpb25zKX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInlvdXIgbWVzc2FnZSBoZXJlXCIgcmVmPXtub2RlID0+IHtpbnB1dCA9IG5vZGU7fX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGludEJ1dHRvblwiIHdpZHRoPVwiMjFweFwiIHNyYz1cImh0dHA6Ly8wLjAuMC4wOjgwMDAvc3RhdGljL25vdW5fODk2MDYuc3ZnXCIgb25DbGljaz17KCkgPT4gbG9va3VwX2Z1bmMoZGlzcGF0Y2gsIG1pbmltaXplU3RhdGUsIGN1cnJNZXNzYWdlcyl9PjwvaW1nPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+O1xuXG5JbnB1dEJveC5wcm9wVHlwZXMgPSB7XG4gICAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlucHV0SGlzdG9yeTogUHJvcFR5cGVzLmFueSxcbiAgICBwcmVkaWN0aW9uczogUHJvcFR5cGVzLmFueVxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIGlucHV0SGlzdG9yeTogc3RhdGUuaW5wdXRIaXN0b3J5LFxuICAgIHByZWRpY3Rpb25zOiBzdGF0ZS5wcmVkaWN0aW9ucyxcbiAgICBtaW5pbWl6ZVN0YXRlOiBzdGF0ZS5taW5pbWl6ZVN0YXRlLFxuICAgIGN1cnJNZXNzYWdlczogc3RhdGUuY29udmVyc2F0aW9uLmN1cnJlbnRDb252by5tZXNzYWdlcyxcbn0pO1xuXG5JbnB1dEJveCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShJbnB1dEJveCk7XG5cbmV4cG9ydCB7SW5wdXRCb3gsIGlucHV0fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL0lucHV0Qm94LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})