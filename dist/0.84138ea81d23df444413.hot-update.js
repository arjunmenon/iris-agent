webpackHotUpdate(0,{

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(31);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1100);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _index = __webpack_require__(69);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(516);\n\n__webpack_require__(517);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar onChange = function onChange(dispatch, name) {\n  (function (value) {\n    dispatch((0, _index.updateCodeEditor)(name, value));\n  });\n};\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0,\n    args_editor = void 0,\n    command_editor = void 0,\n    explanation_editor = void 0,\n    code_preview = void 0;\n\nvar runTest = function runTest() {\n  console.log(command_name.value);\n  console.log(args_editor);\n  console.log(args_editor.editor.getValue());\n  (0, _python.testFunction)({\n    name: command_name.value,\n    title: command_title.value,\n    args: args_editor.editor.getValue(),\n    command: command_editor.editor.getValue(),\n    explanation: explanation_editor.editor.getValue()\n  });\n};\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          _reactSplitPane2.default,\n          { className: 'codepane', split: 'vertical', defaultSize: '66%' },\n          _react2.default.createElement(\n            'div',\n            { 'class': 'overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command name:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChange('name'), ref: function ref(node) {\n                command_name = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command title:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange('title'), ref: function ref(node) {\n                command_title = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Arguments:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'args'),\n              name: 'command_editor',\n              value: _this.props.args,\n              ref: function ref(node) {\n                args_editor = node;\n              }\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The python command:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'command'),\n              name: 'command_editor',\n              ref: function ref(node) {\n                command_editor = node;\n              }\n\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The explanation:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'explanation'),\n              name: 'explanation_editor',\n              ref: function ref(node) {\n                explanation_editor = node;\n              }\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'command_edit testpane overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Test inputs:'\n            ),\n            _react2.default.createElement('input', { type: 'text', onChange: onChange('testInputs'), ref: function ref(node) {\n                test_inputs = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Code preview:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              name: 'code_preview',\n              value: _this.props.preview,\n              ref: function ref(node) {\n                code_preview = node;\n              }\n            }),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return runTest(_this);\n                } },\n              'Run'\n            )\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CommandEdit, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      console.log(\"setting values\");\n      command_editor.editor.setValue(this.props.command);\n      args_editor.editor.setValue(this.props.args);\n      explanation_editor.editor.setValue(this.props.explanation);\n    }\n  }]);\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs,\n    preview: state.commandEditPane.preview\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJuYW1lIiwidmFsdWUiLCJjb21tYW5kX25hbWUiLCJjb21tYW5kX3RpdGxlIiwidGVzdF9pbnB1dHMiLCJhcmdzX2VkaXRvciIsImNvbW1hbmRfZWRpdG9yIiwiZXhwbGFuYXRpb25fZWRpdG9yIiwiY29kZV9wcmV2aWV3IiwicnVuVGVzdCIsImNvbnNvbGUiLCJsb2ciLCJlZGl0b3IiLCJnZXRWYWx1ZSIsInRpdGxlIiwiYXJncyIsImNvbW1hbmQiLCJleHBsYW5hdGlvbiIsIkNvbW1hbmRFZGl0IiwicmVuZGVyIiwibm9kZSIsInByb3BzIiwicHJldmlldyIsInNldFZhbHVlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb21tYW5kRWRpdFBhbmUiLCJ0ZXN0SW5wdXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRCxFQUFXQyxJQUFYLEVBQW9CO0FBQ25DLGFBQUNDLEtBQUQsRUFBVztBQUNURixhQUFTLDZCQUFpQkMsSUFBakIsRUFBdUJDLEtBQXZCLENBQVQ7QUFDRCxHQUZEO0FBR0QsQ0FKRDs7QUFNQSxJQUFJQyxxQkFBSjtBQUFBLElBQWtCQyxzQkFBbEI7QUFBQSxJQUFpQ0Msb0JBQWpDO0FBQUEsSUFBOENDLG9CQUE5QztBQUFBLElBQTJEQyx1QkFBM0Q7QUFBQSxJQUEyRUMsMkJBQTNFO0FBQUEsSUFBK0ZDLHFCQUEvRjs7QUFHQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkMsVUFBUUMsR0FBUixDQUFZVCxhQUFhRCxLQUF6QjtBQUNBUyxVQUFRQyxHQUFSLENBQVlOLFdBQVo7QUFDQUss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QUFaO0FBQUEsQ0FBeEI7O0FBVUFKLGNBQWMseUJBQVFNLGVBQVIsRUFBeUJOLFdBQXpCLENBQWQ7O2tCQUVlQSxXIiwiZmlsZSI6IjQzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYnJhY2UgZnJvbSAnYnJhY2UnO1xuaW1wb3J0IEFjZUVkaXRvciBmcm9tICdyZWFjdC1hY2UnO1xuaW1wb3J0IHsgdXBkYXRlQ29kZUVkaXRvciB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgZG9TZWFyY2gsIHVwZGF0ZUhpbnQsIHVwZGF0ZURvY3MsIHRlc3RGdW5jdGlvbiB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuaW1wb3J0IFNwbGl0UGFuZSBmcm9tICdyZWFjdC1zcGxpdC1wYW5lJztcblxuaW1wb3J0ICdicmFjZS9tb2RlL3B5dGhvbic7XG5pbXBvcnQgJ2JyYWNlL3RoZW1lL2dpdGh1Yic7XG5cbmNvbnN0IG9uQ2hhbmdlID0gKGRpc3BhdGNoLCBuYW1lKSA9PiB7XG4gICh2YWx1ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHVwZGF0ZUNvZGVFZGl0b3IobmFtZSwgdmFsdWUpKTtcbiAgfVxufTtcblxubGV0IGNvbW1hbmRfbmFtZSwgY29tbWFuZF90aXRsZSwgdGVzdF9pbnB1dHMsIGFyZ3NfZWRpdG9yLCBjb21tYW5kX2VkaXRvciwgZXhwbGFuYXRpb25fZWRpdG9yLCBjb2RlX3ByZXZpZXc7XG5cblxuY29uc3QgcnVuVGVzdCA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coY29tbWFuZF9uYW1lLnZhbHVlKTtcbiAgY29uc29sZS5sb2coYXJnc19lZGl0b3IpO1xuICBjb25zb2xlLmxvZyhhcmdzX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKSk7XG4gIHRlc3RGdW5jdGlvbih7XG4gICAgICBuYW1lOiBjb21tYW5kX25hbWUudmFsdWUsXG4gICAgICB0aXRsZTpjb21tYW5kX3RpdGxlLnZhbHVlLFxuICAgICAgYXJnczogYXJnc19lZGl0b3IuZWRpdG9yLmdldFZhbHVlKCksXG4gICAgICBjb21tYW5kOmNvbW1hbmRfZWRpdG9yLmVkaXRvci5nZXRWYWx1ZSgpLFxuICAgICAgZXhwbGFuYXRpb246ZXhwbGFuYXRpb25fZWRpdG9yLmVkaXRvci5nZXRWYWx1ZSgpXG4gIH0pO1xufTtcblxuY2xhc3MgQ29tbWFuZEVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgdmFsdWVzXCIpO1xuICAgICAgICBjb21tYW5kX2VkaXRvci5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy5jb21tYW5kKTtcbiAgICAgICAgYXJnc19lZGl0b3IuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMuYXJncyk7XG4gICAgICAgIGV4cGxhbmF0aW9uX2VkaXRvci5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy5leHBsYW5hdGlvbik7XG4gICAgfVxuXG4gICAgcmVuZGVyID0gKCkgPT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1hbmRfZWRpdFwiPlxuICAgICAgICAgICAgPFNwbGl0UGFuZSBjbGFzc05hbWU9XCJjb2RlcGFuZVwiIHNwbGl0PVwidmVydGljYWxcIiBkZWZhdWx0U2l6ZT1cIjY2JVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJmbG93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+Q29tbWFuZCBuYW1lOjwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlLmcuLCBhZGRfdHdvX251bWJlcnNcIiBvbkNoYW5nZT17b25DaGFuZ2UoJ25hbWUnKX0gcmVmPXtub2RlID0+IHtjb21tYW5kX25hbWUgPSBub2RlO319IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+Q29tbWFuZCB0aXRsZTo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZS5nLiwgYWRkIHt4fSBhbmQge3l9XCIgb25DaGFuZ2U9e29uQ2hhbmdlKCd0aXRsZScpfSByZWY9e25vZGUgPT4ge2NvbW1hbmRfdGl0bGUgPSBub2RlO319IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+QXJndW1lbnRzOjwvZGl2PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgbWF4TGluZXM9XCIxNVwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICdhcmdzJyl9XG4gICAgICAgICAgICAgIG5hbWU9XCJjb21tYW5kX2VkaXRvclwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFyZ3N9XG4gICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7YXJnc19lZGl0b3IgPSBub2RlO319XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlRoZSBweXRob24gY29tbWFuZDo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAnY29tbWFuZCcpfVxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWFuZF9lZGl0b3JcIlxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2NvbW1hbmRfZWRpdG9yID0gbm9kZTt9fVxuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlRoZSBleHBsYW5hdGlvbjo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAnZXhwbGFuYXRpb24nKX1cbiAgICAgICAgICAgICAgbmFtZT1cImV4cGxhbmF0aW9uX2VkaXRvclwiXG4gICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7ZXhwbGFuYXRpb25fZWRpdG9yID0gbm9kZTt9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1hbmRfZWRpdCB0ZXN0cGFuZSBvdmVyZmxvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlRlc3QgaW5wdXRzOjwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e29uQ2hhbmdlKCd0ZXN0SW5wdXRzJyl9IHJlZj17bm9kZSA9PiB7dGVzdF9pbnB1dHMgPSBub2RlO319IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+Q29kZSBwcmV2aWV3OjwvZGl2PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgbWF4TGluZXM9XCIxNVwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgbmFtZT1cImNvZGVfcHJldmlld1wiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnByZXZpZXd9XG4gICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7Y29kZV9wcmV2aWV3ID0gbm9kZTt9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcnVuVGVzdCh0aGlzKX0+UnVuPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgICAgPC9kaXY+XG5cblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdGl0bGU6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS50aXRsZSxcbiAgICBuYW1lOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUubmFtZSxcbiAgICBhcmdzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuYXJncyxcbiAgICBjb21tYW5kOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuY29tbWFuZCxcbiAgICBleHBsYW5hdGlvbjogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmV4cGxhbmF0aW9uLFxuICAgIHRlc3RJbnB1dHM6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS50ZXN0SW5wdXRzLFxuICAgIHByZXZpZXc6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5wcmV2aWV3XG59KTtcblxuQ29tbWFuZEVkaXQgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29tbWFuZEVkaXQpO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tYW5kRWRpdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0NvbW1hbmRFZGl0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})