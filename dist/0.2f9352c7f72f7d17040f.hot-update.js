webpackHotUpdate(0,{

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRouterRedux = __webpack_require__(433);\n\nvar _redux = __webpack_require__(296);\n\nvar _types = __webpack_require__(314);\n\nvar types = _interopRequireWildcard(_types);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// TODO: a bit confused why we need this function\nvar valueOrNull = function valueOrNull(value) {\n    if (value !== undefined) {\n        return value;\n    }\n    return null;\n};\n\n// given an action, push any new messages onto an existing set of messages\nvar appendMessages = function appendMessages(oldMessages, action) {\n    var newMessages = [];\n    var currentMax = 0;\n    if (oldMessages.length > 0) {\n        console.log('map', _.map(oldMessages, function (m) {\n            return m.id;\n        }));\n        currentMax = _.max(_.map(oldMessages, function (m) {\n            return m.id;\n        }));\n    }\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = action.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var m = _step.value;\n\n            currentMax++;\n            var class_index = action.class_index !== undefined ? action.class_index : null;\n            newMessages.push({ 'origin': action.origin, 'text': m, 'id': currentMax, 'class_index': class_index,\n                'state': valueOrNull(action.state), 'arg': valueOrNull(action.arg) });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return oldMessages.concat(newMessages);\n};\n\n// given an action, update a conversation with new messages\nvar appendMessagesConvo = function appendMessagesConvo(convo, action) {\n    var messages = convo.messages;\n\n    return _extends({}, convo, { messages: appendMessages(messages, action), args: action.arg_map });\n};\n\n// reducer for conversations\n// TODO: This definition state is pretty long, messy\n// Also not clear what \"args\" represents in a conversation with multiple sub-convos\n// Maybe it is only important to represent the convo title, if so maybe that should be refactored\nvar conversation = function conversation() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': 0, 'args': {} }, 'state': 'START' };\n    var action = arguments[1];\n    var history = state.history,\n        currentConvo = state.currentConvo;\n\n    var newConvo = void 0;\n    switch (action.type) {\n        case types.UPDATE_HISTORY:\n            console.log(action.conversation.currentConvo);\n            return { history: action.conversation.history, currentConvo: action.conversation.currentConvo, 'state': state.state };\n        case types.ADD_MESSAGE:\n            return { history: history, currentConvo: appendMessagesConvo(currentConvo, action), 'state': state.state };\n        // this is a bit complex, maybe needs review for clarity\n        case types.ADD_SERVER_MESSAGE:\n            if (action.text.length === 0) {\n                return state;\n            }\n            newConvo = appendMessagesConvo(currentConvo, action);\n            if (action.state === 'START') {\n                // hardcoding some logic here for syncing history with server on START\n                // this allows some commands to overwrite history immediately\n                var theId = action.history.length;\n                newConvo = _extends({}, newConvo, { title: action.label, id: theId });\n                return { history: action.history.concat([newConvo]), 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': newConvo.id + 1, 'args': {} }, state: 'START' };\n            }\n            return { history: history, currentConvo: newConvo, state: action.state };\n        case types.HIDE_CONVERSATION:\n            // this is super verbose just to update a specific convo index, better way?\n            var newHistory = _.map(history, function (conv) {\n                var out = _extends({}, conv);\n                if (conv.id === action.id) {\n                    out.hidden = !out.hidden;\n                }\n                return out;\n            });\n            // TODO: also wasteful to do a copy everytime, indendent of the index?\n            newConvo = _extends({}, currentConvo);\n            if (newConvo.id === action.id) {\n                newConvo.hidden = !newConvo.hidden;\n            }\n            return { history: newHistory, currentConvo: newConvo, state: state.state };\n        default:\n            return state;\n    }\n};\n\n// variables reducer, constrols variables in right sidebar\nvar variables = function variables() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_VARIABLES:\n            return action.variables;\n        default:\n            return state;\n    }\n};\n\n// predictions reducer, governs hints above input box\nvar predictions = function predictions() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_PREDICTIONS:\n            return action.predictions;\n        default:\n            return state;\n    }\n};\n\n// docs reducer, governs what is displayed in docs pane\nvar docs = function docs() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '', examples: [], description: [], source: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_DOCS:\n            return action.doc;\n        default:\n            return state;\n    }\n};\n\n// function search reducer, governs function search in the right sidebar\nvar functionSearch = function functionSearch() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: '', results: [] };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_FUNC:\n            return _extends({}, state, { search: action.search });\n        case types.UPDATE_RESULTS:\n            return _extends({}, state, { results: action.results });\n        default:\n            return state;\n    }\n};\n\n// input reducer, manages current user input on main conversation pane\nvar currentInput = function currentInput() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'input': '', 'class_index': null };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.STORE_CURRENT_INPUT:\n            return { 'input': action.currentInput };\n        default:\n            return state;\n    }\n};\n\n// reducer that manages which pans are open and closed\n// TODO: this is a bad API, make more consistent\nvar minimizeState = function minimizeState() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'docs': true, 'code_edit': true };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.SET_DOCS:\n            return _extends({}, state, { 'docs': action.docs });\n        case types.SET_CODE_EDIT:\n            return _extends({}, state, { 'code_edit': action.code_edit });\n        default:\n            return state;\n    }\n};\n\n// helper to create a new array/list with desired index removed\nvar removeIndex = function removeIndex(arr, i) {\n    var first_half = arr.concat([]).slice(0, i);\n    var second_half = arr.concat([]).slice(i + 1, arr.length);\n    return first_half.concat(second_half);\n};\n\nvar blankCommand = { name: '', title: '', args: [], examples: [], command: '', explanation: '', testInput: '', preview: '', error: '' };\n\n// reducer to manage the command editing pane\nvar commandEditPane = function commandEditPane() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _extends({}, blankCommand);\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_CODE_EDITOR:\n            var new_state = {};\n            new_state[action.name] = action.value;\n            return _extends({}, state, new_state);\n        case types.UPDATE_COMMAND:\n            console.log(_extends({}, state, action.command));\n            return _extends({}, state, action.command);\n        case types.ADD_COMMAND_ARG:\n            return _extends({}, state, { args: state.args.concat([{ 'arg_name': '', 'arg_type': '', 'arg_string': '' }]) });\n        case types.RESET_COMMAND:\n            return _extends({}, state, blankCommand);\n        case types.ADD_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: state.examples.concat(['']) });\n        case types.UPDATE_COMMAND_EXAMPLE:\n            var newExamples = state.examples.concat([]);\n            newExamples[action.id] = action.text;\n            return _extends({}, state, { examples: newExamples });\n        case types.UPDATE_COMMAND_ARG:\n            var newArgs = state.args.concat([]);\n            newArgs[action.id] = action.values;\n            return _extends({}, state, { args: newArgs });\n        case types.DELETE_COMMAND_ARG:\n            return _extends({}, state, { args: removeIndex(state.args, action.id) });\n        case types.DELETE_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: removeIndex(state.examples, action.id) });\n        default:\n            return state;\n    }\n};\n\n// reducer to manage the input history state, going through old commands with up/down arrow\nvar inputHistory = function inputHistory() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currId': null, 'showHistory': false };\n    var action = arguments[1];\n\n    var newId = void 0;\n    switch (action.type) {\n        case types.ADD_INPUT_HISTORY:\n            var newHistory = [].concat(_toConsumableArray(state.history), [action.message]);\n            console.log(\"history\", newHistory, state.currId, newHistory.length - 1);\n            return _extends({}, state, { 'history': newHistory, 'currId': newHistory.length - 1 });\n        case types.MOVE_INPUT_HISTORY:\n            if (state.history.length === 0 || state.currId === null) {\n                console.log(\"history\", state.currId, newId);\n                return state;\n            }\n            newId = state.currId;\n            if (action.direction === 'up') {\n                if (newId >= 1) {\n                    newId -= 1;\n                }\n            } else {\n                if (newId < state.history.length - 1) {\n                    newId += 1;\n                }\n            }\n            console.log(\"history\", state.currId, newId);\n            return _extends({}, state, { 'currId': newId });\n        default:\n            return state;\n    }\n};\n\n// combine all these reducers together\nvar rootReducer = (0, _redux.combineReducers)({\n    conversation: conversation,\n    variables: variables,\n    predictions: predictions,\n    inputHistory: inputHistory,\n    currentInput: currentInput,\n    docs: docs,\n    functionSearch: functionSearch,\n    minimizeState: minimizeState,\n    commandEditPane: commandEditPane,\n    routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvaW5kZXguanM/ZTkxNiJdLCJuYW1lcyI6WyJ0eXBlcyIsIl8iLCJ2YWx1ZU9yTnVsbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiYXBwZW5kTWVzc2FnZXMiLCJvbGRNZXNzYWdlcyIsImFjdGlvbiIsIm5ld01lc3NhZ2VzIiwiY3VycmVudE1heCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwiaWQiLCJtYXgiLCJ0ZXh0IiwiY2xhc3NfaW5kZXgiLCJwdXNoIiwib3JpZ2luIiwic3RhdGUiLCJhcmciLCJjb25jYXQiLCJhcHBlbmRNZXNzYWdlc0NvbnZvIiwiY29udm8iLCJtZXNzYWdlcyIsImFyZ3MiLCJhcmdfbWFwIiwiY29udmVyc2F0aW9uIiwiaGlzdG9yeSIsImN1cnJlbnRDb252byIsIm5ld0NvbnZvIiwidHlwZSIsIlVQREFURV9ISVNUT1JZIiwiQUREX01FU1NBR0UiLCJBRERfU0VSVkVSX01FU1NBR0UiLCJ0aGVJZCIsInRpdGxlIiwibGFiZWwiLCJISURFX0NPTlZFUlNBVElPTiIsIm5ld0hpc3RvcnkiLCJvdXQiLCJjb252IiwiaGlkZGVuIiwidmFyaWFibGVzIiwiVVBEQVRFX1ZBUklBQkxFUyIsInByZWRpY3Rpb25zIiwiVVBEQVRFX1BSRURJQ1RJT05TIiwiZG9jcyIsImV4YW1wbGVzIiwiZGVzY3JpcHRpb24iLCJzb3VyY2UiLCJVUERBVEVfRE9DUyIsImRvYyIsImZ1bmN0aW9uU2VhcmNoIiwic2VhcmNoIiwicmVzdWx0cyIsIlVQREFURV9GVU5DIiwiVVBEQVRFX1JFU1VMVFMiLCJjdXJyZW50SW5wdXQiLCJTVE9SRV9DVVJSRU5UX0lOUFVUIiwibWluaW1pemVTdGF0ZSIsIlNFVF9ET0NTIiwiU0VUX0NPREVfRURJVCIsImNvZGVfZWRpdCIsInJlbW92ZUluZGV4IiwiYXJyIiwiaSIsImZpcnN0X2hhbGYiLCJzbGljZSIsInNlY29uZF9oYWxmIiwiYmxhbmtDb21tYW5kIiwibmFtZSIsImNvbW1hbmQiLCJleHBsYW5hdGlvbiIsInRlc3RJbnB1dCIsInByZXZpZXciLCJlcnJvciIsImNvbW1hbmRFZGl0UGFuZSIsIlVQREFURV9DT0RFX0VESVRPUiIsIm5ld19zdGF0ZSIsIlVQREFURV9DT01NQU5EIiwiQUREX0NPTU1BTkRfQVJHIiwiUkVTRVRfQ09NTUFORCIsIkFERF9DT01NQU5EX0VYQU1QTEUiLCJVUERBVEVfQ09NTUFORF9FWEFNUExFIiwibmV3RXhhbXBsZXMiLCJVUERBVEVfQ09NTUFORF9BUkciLCJuZXdBcmdzIiwidmFsdWVzIiwiREVMRVRFX0NPTU1BTkRfQVJHIiwiREVMRVRFX0NPTU1BTkRfRVhBTVBMRSIsImlucHV0SGlzdG9yeSIsIm5ld0lkIiwiQUREX0lOUFVUX0hJU1RPUlkiLCJtZXNzYWdlIiwiY3VycklkIiwiTU9WRV9JTlBVVF9ISVNUT1JZIiwiZGlyZWN0aW9uIiwicm9vdFJlZHVjZXIiLCJyb3V0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztJQUFZQSxLOztBQUNaOztJQUFZQyxDOzs7Ozs7QUFFWjtBQUNBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDM0IsUUFBSUEsVUFBVUMsU0FBZCxFQUF5QjtBQUNyQixlQUFPRCxLQUFQO0FBQ0g7QUFDRCxXQUFPLElBQVA7QUFDSCxDQUxEOztBQU9BO0FBQ0EsSUFBTUUsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxXQUFELEVBQWNDLE1BQWQsRUFBeUI7QUFDNUMsUUFBTUMsY0FBYyxFQUFwQjtBQUNBLFFBQUlDLGFBQWEsQ0FBakI7QUFDQSxRQUFJSCxZQUFZSSxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJYLEVBQUVZLEdBQUYsQ0FBTVAsV0FBTixFQUFtQixVQUFTUSxDQUFULEVBQVk7QUFBRSxtQkFBT0EsRUFBRUMsRUFBVDtBQUFjLFNBQS9DLENBQW5CO0FBQ0FOLHFC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WCxHQUFrQixDQUFyRTtBQUNKLGFBQUtWLE1BQU1rRyxrQkFBWDtBQUNJLGdCQUFJN0UsTUFBTVMsT0FBTixDQUFjcEIsTUFBZCxLQUF5QixDQUF6QixJQUE4QlcsTUFBTTRFLE1BQU4sS0FBaUIsSUFBbkQsRUFBeUQ7QUFDckR0Rix3QkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJTLE1BQU00RSxNQUE3QixFQUFxQ0gsS0FBckM7QUFDQSx1QkFBT3pFLEtBQVA7QUFDSDtBQUNEeUUsb0JBQVF6RSxNQUFNNEUsTUFBZDtBQUNBLGdCQUFJMUYsT0FBTzRGLFNBQVAsS0FBcUIsSUFBekIsRUFBK0I7QUFDM0Isb0JBQUlMLFNBQVMsQ0FBYixFQUFnQjtBQUNaQSw2QkFBUyxDQUFUO0FBQ0g7QUFDSixhQUpELE1BSU87QUFDSCxvQkFBSUEsUUFBU3pFLE1BQU1TLE9BQU4sQ0FBY3BCLE1BQWQsR0FBdUIsQ0FBcEMsRUFBd0M7QUFDcENvRiw2QkFBUyxDQUFUO0FBQ0g7QUFDSjtBQUNEbkYsb0JBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCUyxNQUFNNEUsTUFBN0IsRUFBcUNILEtBQXJDO0FBQ0EsZ0NBQVd6RSxLQUFYLElBQWtCLFVBQVV5RSxLQUE1QjtBQUNKO0FBQ0ksbUJBQU96RSxLQUFQO0FBdkJSO0FBeUJILENBM0JEOztBQTZCQTtBQUNBLElBQU0rRSxjQUFjLDRCQUFnQjtBQUNoQ3ZFLDhCQURnQztBQUVoQ2dCLHdCQUZnQztBQUdoQ0UsNEJBSGdDO0FBSWhDOEMsOEJBSmdDO0FBS2hDakMsOEJBTGdDO0FBTWhDWCxjQU5nQztBQU9oQ00sa0NBUGdDO0FBUWhDTyxnQ0FSZ0M7QUFTaENpQixvQ0FUZ0M7QUFVaENzQjtBQVZnQyxDQUFoQixDQUFwQjs7a0JBYWVELFciLCJmaWxlIjoiNTEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcm91dGVyUmVkdWNlciBhcyByb3V0aW5nIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG4vLyBUT0RPOiBhIGJpdCBjb25mdXNlZCB3aHkgd2UgbmVlZCB0aGlzIGZ1bmN0aW9uXG5jb25zdCB2YWx1ZU9yTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vLyBnaXZlbiBhbiBhY3Rpb24sIHB1c2ggYW55IG5ldyBtZXNzYWdlcyBvbnRvIGFuIGV4aXN0aW5nIHNldCBvZiBtZXNzYWdlc1xuY29uc3QgYXBwZW5kTWVzc2FnZXMgPSAob2xkTWVzc2FnZXMsIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gW107XG4gICAgbGV0IGN1cnJlbnRNYXggPSAwO1xuICAgIGlmIChvbGRNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXAnLCBfLm1hcChvbGRNZXNzYWdlcywgZnVuY3Rpb24obSkgeyByZXR1cm4gbS5pZDsgfSkpO1xuICAgICAgICBjdXJyZW50TWF4ID0gXy5tYXgoXy5tYXAob2xkTWVzc2FnZXMsIGZ1bmN0aW9uKG0pIHsgcmV0dXJuIG0uaWQ7IH0pKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBtIG9mIGFjdGlvbi50ZXh0KSB7XG4gICAgICAgIGN1cnJlbnRNYXgrKztcbiAgICAgICAgbGV0IGNsYXNzX2luZGV4ID0gYWN0aW9uLmNsYXNzX2luZGV4ICE9PSB1bmRlZmluZWQgPyBhY3Rpb24uY2xhc3NfaW5kZXggOiBudWxsO1xuICAgICAgICBuZXdNZXNzYWdlcy5wdXNoKHsnb3JpZ2luJzogYWN0aW9uLm9yaWdpbiwgJ3RleHQnOiBtLCAnaWQnOiBjdXJyZW50TWF4LCAnY2xhc3NfaW5kZXgnOiBjbGFzc19pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogdmFsdWVPck51bGwoYWN0aW9uLnN0YXRlKSwgJ2FyZyc6IHZhbHVlT3JOdWxsKGFjdGlvbi5hcmcpfSk7XG4gICAgfVxuICAgIHJldHVybiBvbGRNZXNzYWdlcy5jb25jYXQobmV3TWVzc2FnZXMpO1xufTtcblxuLy8gZ2l2ZW4gYW4gYWN0aW9uLCB1cGRhdGUgYSBjb252ZXJzYXRpb24gd2l0aCBuZXcgbWVzc2FnZXNcbmNvbnN0IGFwcGVuZE1lc3NhZ2VzQ29udm8gPSAoY29udm8sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGNvbnZvO1xuICAgIHJldHVybiB7IC4uLmNvbnZvLCBtZXNzYWdlczogYXBwZW5kTWVzc2FnZXMobWVzc2FnZXMsIGFjdGlvbiksIGFyZ3M6IGFjdGlvbi5hcmdfbWFwIH07XG59O1xuXG4vLyByZWR1Y2VyIGZvciBjb252ZXJzYXRpb25zXG4vLyBUT0RPOiBUaGlzIGRlZmluaXRpb24gc3RhdGUgaXMgcHJldHR5IGxvbmcsIG1lc3N5XG4vLyBBbHNvIG5vdCBjbGVhciB3aGF0IFwiYXJnc1wiIHJlcHJlc2VudHMgaW4gYSBjb252ZXJzYXRpb24gd2l0aCBtdWx0aXBsZSBzdWItY29udm9zXG4vLyBNYXliZSBpdCBpcyBvbmx5IGltcG9ydGFudCB0byByZXByZXNlbnQgdGhlIGNvbnZvIHRpdGxlLCBpZiBzbyBtYXliZSB0aGF0IHNob3VsZCBiZSByZWZhY3RvcmVkXG5jb25zdCBjb252ZXJzYXRpb24gPSAoc3RhdGUgPSB7J2hpc3RvcnknOiBbXSwgJ2N1cnJlbnRDb252byc6IHsgJ21lc3NhZ2VzJzogW10sICd0aXRsZSc6IG51bGwsICdoaWRkZW4nOiBmYWxzZSwgJ2lkJzogMCwgJ2FyZ3MnOiB7fSB9LCAnc3RhdGUnOiAnU1RBUlQnfSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBoaXN0b3J5LCBjdXJyZW50Q29udm8gfSA9IHN0YXRlO1xuICAgIGxldCBuZXdDb252bztcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX0hJU1RPUlk6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uY29udmVyc2F0aW9uLmN1cnJlbnRDb252byk7XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBhY3Rpb24uY29udmVyc2F0aW9uLmhpc3RvcnksIGN1cnJlbnRDb252bzogYWN0aW9uLmNvbnZlcnNhdGlvbi5jdXJyZW50Q29udm8sICdzdGF0ZSc6IHN0YXRlLnN0YXRlIH07XG4gICAgICAgIGNhc2UgdHlwZXMuQUREX01FU1NBR0U6XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5LCBjdXJyZW50Q29udm86IGFwcGVuZE1lc3NhZ2VzQ29udm8oY3VycmVudENvbnZvLCBhY3Rpb24pLCAnc3RhdGUnOiBzdGF0ZS5zdGF0ZSB9O1xuICAgICAgICAvLyB0aGlzIGlzIGEgYml0IGNvbXBsZXgsIG1heWJlIG5lZWRzIHJldmlldyBmb3IgY2xhcml0eVxuICAgICAgICBjYXNlIHR5cGVzLkFERF9TRVJWRVJfTUVTU0FHRTpcbiAgICAgICAgICAgIGlmIChhY3Rpb24udGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdDb252byA9IGFwcGVuZE1lc3NhZ2VzQ29udm8oY3VycmVudENvbnZvLCBhY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5zdGF0ZSA9PT0gJ1NUQVJUJykge1xuICAgICAgICAgICAgICAgIC8vIGhhcmRjb2Rpbmcgc29tZSBsb2dpYyBoZXJlIGZvciBzeW5jaW5nIGhpc3Rvcnkgd2l0aCBzZXJ2ZXIgb24gU1RBUlRcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGFsbG93cyBzb21lIGNvbW1hbmRzIHRvIG92ZXJ3cml0ZSBoaXN0b3J5IGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgbGV0IHRoZUlkID0gYWN0aW9uLmhpc3RvcnkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG5ld0NvbnZvID0gey4uLm5ld0NvbnZvLCB0aXRsZTogYWN0aW9uLmxhYmVsLCBpZDogdGhlSWQgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBhY3Rpb24uaGlzdG9yeS5jb25jYXQoW25ld0NvbnZvXSksICdjdXJyZW50Q29udm8nOiB7ICdtZXNzYWdlcyc6IFtdLCAndGl0bGUnOiBudWxsLCAnaGlkZGVuJzogZmFsc2UsICdpZCc6IG5ld0NvbnZvLmlkICsgMSwgJ2FyZ3MnOiB7fSB9LCBzdGF0ZTogJ1NUQVJUJyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeSwgY3VycmVudENvbnZvOiBuZXdDb252bywgc3RhdGU6IGFjdGlvbi5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkhJREVfQ09OVkVSU0FUSU9OOlxuICAgICAgICAgICAgLy8gdGhpcyBpcyBzdXBlciB2ZXJib3NlIGp1c3QgdG8gdXBkYXRlIGEgc3BlY2lmaWMgY29udm8gaW5kZXgsIGJldHRlciB3YXk/XG4gICAgICAgICAgICBjb25zdCBuZXdIaXN0b3J5ID0gXy5tYXAoaGlzdG9yeSwgY29udiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gey4uLmNvbnZ9O1xuICAgICAgICAgICAgICAgIGlmIChjb252LmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0LmhpZGRlbiA9ICFvdXQuaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBUT0RPOiBhbHNvIHdhc3RlZnVsIHRvIGRvIGEgY29weSBldmVyeXRpbWUsIGluZGVuZGVudCBvZiB0aGUgaW5kZXg/XG4gICAgICAgICAgICBuZXdDb252byA9IHsuLi5jdXJyZW50Q29udm99O1xuICAgICAgICAgICAgaWYgKG5ld0NvbnZvLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICBuZXdDb252by5oaWRkZW4gPSAhbmV3Q29udm8uaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogbmV3SGlzdG9yeSwgY3VycmVudENvbnZvOiBuZXdDb252bywgc3RhdGU6IHN0YXRlLnN0YXRlfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG4vLyB2YXJpYWJsZXMgcmVkdWNlciwgY29uc3Ryb2xzIHZhcmlhYmxlcyBpbiByaWdodCBzaWRlYmFyXG5jb25zdCB2YXJpYWJsZXMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9WQVJJQUJMRVM6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnZhcmlhYmxlcztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG4vLyBwcmVkaWN0aW9ucyByZWR1Y2VyLCBnb3Zlcm5zIGhpbnRzIGFib3ZlIGlucHV0IGJveFxuY29uc3QgcHJlZGljdGlvbnMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9QUkVESUNUSU9OUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucHJlZGljdGlvbnM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuLy8gZG9jcyByZWR1Y2VyLCBnb3Zlcm5zIHdoYXQgaXMgZGlzcGxheWVkIGluIGRvY3MgcGFuZVxuY29uc3QgZG9jcyA9IChzdGF0ZSA9IHt0aXRsZTogJycsIGV4YW1wbGVzOiBbXSwgZGVzY3JpcHRpb246IFtdLCBzb3VyY2U6Jyd9LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX0RPQ1M6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRvYztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG4vLyBmdW5jdGlvbiBzZWFyY2ggcmVkdWNlciwgZ292ZXJucyBmdW5jdGlvbiBzZWFyY2ggaW4gdGhlIHJpZ2h0IHNpZGViYXJcbmNvbnN0IGZ1bmN0aW9uU2VhcmNoID0gKHN0YXRlID0ge3NlYXJjaDogJycsIHJlc3VsdHM6IFtdfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0ZVTkM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBzZWFyY2g6IGFjdGlvbi5zZWFyY2h9O1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX1JFU1VMVFM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCByZXN1bHRzOiBhY3Rpb24ucmVzdWx0c307XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuLy8gaW5wdXQgcmVkdWNlciwgbWFuYWdlcyBjdXJyZW50IHVzZXIgaW5wdXQgb24gbWFpbiBjb252ZXJzYXRpb24gcGFuZVxuY29uc3QgY3VycmVudElucHV0ID0gKHN0YXRlID0geydpbnB1dCc6ICcnLCAnY2xhc3NfaW5kZXgnOiBudWxsfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuU1RPUkVfQ1VSUkVOVF9JTlBVVDpcbiAgICAgIHJldHVybiB7J2lucHV0JzogYWN0aW9uLmN1cnJlbnRJbnB1dH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuLy8gcmVkdWNlciB0aGF0IG1hbmFnZXMgd2hpY2ggcGFucyBhcmUgb3BlbiBhbmQgY2xvc2VkXG4vLyBUT0RPOiB0aGlzIGlzIGEgYmFkIEFQSSwgbWFrZSBtb3JlIGNvbnNpc3RlbnRcbmNvbnN0IG1pbmltaXplU3RhdGUgPSAoc3RhdGU9eydkb2NzJzogdHJ1ZSwgJ2NvZGVfZWRpdCc6dHJ1ZX0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlNFVF9ET0NTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2RvY3MnOiBhY3Rpb24uZG9jc307XG4gICAgY2FzZSB0eXBlcy5TRVRfQ09ERV9FRElUOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2NvZGVfZWRpdCc6IGFjdGlvbi5jb2RlX2VkaXR9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbi8vIGhlbHBlciB0byBjcmVhdGUgYSBuZXcgYXJyYXkvbGlzdCB3aXRoIGRlc2lyZWQgaW5kZXggcmVtb3ZlZFxuY29uc3QgcmVtb3ZlSW5kZXggPSAoYXJyLCBpKSA9PiB7XG4gIGxldCBmaXJzdF9oYWxmID0gYXJyLmNvbmNhdChbXSkuc2xpY2UoMCwgaSk7XG4gIGxldCBzZWNvbmRfaGFsZiA9IGFyci5jb25jYXQoW10pLnNsaWNlKGkrMSxhcnIubGVuZ3RoKTtcbiAgcmV0dXJuIGZpcnN0X2hhbGYuY29uY2F0KHNlY29uZF9oYWxmKTtcbn1cblxuY29uc3QgYmxhbmtDb21tYW5kID0ge25hbWU6ICcnLCB0aXRsZTogJycsIGFyZ3M6IFtdLCBleGFtcGxlczogW10sIGNvbW1hbmQ6ICcnLCBleHBsYW5hdGlvbjogJycsIHRlc3RJbnB1dDogJycsIHByZXZpZXc6JycsIGVycm9yOiAnJ307XG5cbi8vIHJlZHVjZXIgdG8gbWFuYWdlIHRoZSBjb21tYW5kIGVkaXRpbmcgcGFuZVxuY29uc3QgY29tbWFuZEVkaXRQYW5lID0gKHN0YXRlPXsuLi5ibGFua0NvbW1hbmR9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfQ09ERV9FRElUT1I6XG4gICAgICBsZXQgbmV3X3N0YXRlID0ge307XG4gICAgICBuZXdfc3RhdGVbYWN0aW9uLm5hbWVdID0gYWN0aW9uLnZhbHVlO1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4ubmV3X3N0YXRlfTtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9DT01NQU5EOlxuICAgICAgY29uc29sZS5sb2coey4uLnN0YXRlLCAuLi5hY3Rpb24uY29tbWFuZH0pO1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLmNvbW1hbmR9O1xuICAgIGNhc2UgdHlwZXMuQUREX0NPTU1BTkRfQVJHOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYXJnczogc3RhdGUuYXJncy5jb25jYXQoW3snYXJnX25hbWUnOiAnJywgJ2FyZ190eXBlJzogJycsICdhcmdfc3RyaW5nJzogJyd9XSl9O1xuICAgIGNhc2UgdHlwZXMuUkVTRVRfQ09NTUFORDpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmJsYW5rQ29tbWFuZH07XG4gICAgY2FzZSB0eXBlcy5BRERfQ09NTUFORF9FWEFNUExFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhhbXBsZXM6IHN0YXRlLmV4YW1wbGVzLmNvbmNhdChbJyddKX07XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfQ09NTUFORF9FWEFNUExFOlxuICAgICAgbGV0IG5ld0V4YW1wbGVzID0gc3RhdGUuZXhhbXBsZXMuY29uY2F0KFtdKTtcbiAgICAgIG5ld0V4YW1wbGVzW2FjdGlvbi5pZF0gPSBhY3Rpb24udGV4dDtcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4YW1wbGVzOiBuZXdFeGFtcGxlc307XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfQ09NTUFORF9BUkc6XG4gICAgICBsZXQgbmV3QXJncyA9IHN0YXRlLmFyZ3MuY29uY2F0KFtdKTtcbiAgICAgIG5ld0FyZ3NbYWN0aW9uLmlkXSA9IGFjdGlvbi52YWx1ZXM7XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBhcmdzOiBuZXdBcmdzfTtcbiAgICBjYXNlIHR5cGVzLkRFTEVURV9DT01NQU5EX0FSRzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGFyZ3M6IHJlbW92ZUluZGV4KHN0YXRlLmFyZ3MsIGFjdGlvbi5pZCl9O1xuICAgIGNhc2UgdHlwZXMuREVMRVRFX0NPTU1BTkRfRVhBTVBMRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4YW1wbGVzOiByZW1vdmVJbmRleChzdGF0ZS5leGFtcGxlcywgYWN0aW9uLmlkKX07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuLy8gcmVkdWNlciB0byBtYW5hZ2UgdGhlIGlucHV0IGhpc3Rvcnkgc3RhdGUsIGdvaW5nIHRocm91Z2ggb2xkIGNvbW1hbmRzIHdpdGggdXAvZG93biBhcnJvd1xuY29uc3QgaW5wdXRIaXN0b3J5ID0gKHN0YXRlID0geydoaXN0b3J5JzogW10sICdjdXJySWQnOiBudWxsLCAnc2hvd0hpc3RvcnknOiBmYWxzZSB9LCBhY3Rpb24pID0+IHtcbiAgICBsZXQgbmV3SWQ7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLkFERF9JTlBVVF9ISVNUT1JZOlxuICAgICAgICAgICAgY29uc3QgbmV3SGlzdG9yeSA9IFsuLi5zdGF0ZS5oaXN0b3J5LCBhY3Rpb24ubWVzc2FnZV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpc3RvcnlcIiwgbmV3SGlzdG9yeSwgc3RhdGUuY3VycklkLCBuZXdIaXN0b3J5Lmxlbmd0aC0xKTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsICdoaXN0b3J5JzogbmV3SGlzdG9yeSwgJ2N1cnJJZCc6IG5ld0hpc3RvcnkubGVuZ3RoLTF9O1xuICAgICAgICBjYXNlIHR5cGVzLk1PVkVfSU5QVVRfSElTVE9SWTpcbiAgICAgICAgICAgIGlmIChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA9PT0gMCB8fCBzdGF0ZS5jdXJySWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpc3RvcnlcIiwgc3RhdGUuY3VycklkLCBuZXdJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SWQgPSBzdGF0ZS5jdXJySWQ7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICAgICAgICAgIGlmIChuZXdJZCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0lkIC09IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3SWQgPCAoc3RhdGUuaGlzdG9yeS5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJZCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGlzdG9yeVwiLCBzdGF0ZS5jdXJySWQsIG5ld0lkKTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsICdjdXJySWQnOiBuZXdJZCB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbi8vIGNvbWJpbmUgYWxsIHRoZXNlIHJlZHVjZXJzIHRvZ2V0aGVyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY29udmVyc2F0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgICBwcmVkaWN0aW9ucyxcbiAgICBpbnB1dEhpc3RvcnksXG4gICAgY3VycmVudElucHV0LFxuICAgIGRvY3MsXG4gICAgZnVuY3Rpb25TZWFyY2gsXG4gICAgbWluaW1pemVTdGF0ZSxcbiAgICBjb21tYW5kRWRpdFBhbmUsXG4gICAgcm91dGluZ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JlZHVjZXJzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})