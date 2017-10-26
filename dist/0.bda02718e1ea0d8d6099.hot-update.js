webpackHotUpdate(0,{

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRouterRedux = __webpack_require__(433);\n\nvar _redux = __webpack_require__(296);\n\nvar _types = __webpack_require__(314);\n\nvar types = _interopRequireWildcard(_types);\n\nvar _lodash = __webpack_require__(140);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// TODO: a bit confused why we need this function\nvar valueOrNull = function valueOrNull(value) {\n    if (value !== undefined) {\n        return value;\n    }\n    return null;\n};\n\n// given an action, push any new messages onto an existing set of messages\nvar appendMessages = function appendMessages(oldMessages, action) {\n    var newMessages = [];\n    var currentMax = 0;\n    if (oldMessages.length > 0) {\n        console.log('map', _.map(oldMessages, function (m) {\n            return m.id;\n        }));\n        currentMax = _.max(_.map(oldMessages, function (m) {\n            return m.id;\n        }));\n    }\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = action.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var m = _step.value;\n\n            currentMax++;\n            newMessages.push({ 'origin': action.origin, 'text': m, 'id': currentMax,\n                'state': valueOrNull(action.state), 'arg': valueOrNull(action.arg) });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return oldMessages.concat(newMessages);\n};\n\n// given an action, update a conversation with new messages\nvar appendMessagesConvo = function appendMessagesConvo(convo, action) {\n    var messages = convo.messages;\n\n    return _extends({}, convo, { messages: appendMessages(messages, action), args: action.arg_map });\n};\n\n// reducer for conversations\n// TODO: This definition state is pretty long, messy\n// Also not clear what \"args\" represents in a conversation with multiple sub-convos\n// Maybe it is only important to represent the convo title, if so maybe that should be refactored\nvar conversation = function conversation() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': 0, 'args': {} }, 'state': 'START' };\n    var action = arguments[1];\n    var history = state.history,\n        currentConvo = state.currentConvo;\n\n    var newConvo = void 0;\n    switch (action.type) {\n        case types.UPDATE_HISTORY:\n            console.log(action.conversation.currentConvo);\n            return { history: action.conversation.history, currentConvo: action.conversation.currentConvo, 'state': state.state };\n        case types.ADD_MESSAGE:\n            return { history: history, currentConvo: appendMessagesConvo(currentConvo, action), 'state': state.state };\n        // this is a bit complex, maybe needs review for clarity\n        case types.ADD_SERVER_MESSAGE:\n            if (action.text.length === 0) {\n                return state;\n            }\n            newConvo = appendMessagesConvo(currentConvo, action);\n            if (action.state === 'START') {\n                // hardcoding some logic here for syncing history with server on START\n                // this allows some commands to overwrite history immediately\n                var theId = action.history.length;\n                newConvo = _extends({}, newConvo, { title: action.label, id: theId });\n                return { history: action.history.concat([newConvo]), 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': newConvo.id + 1, 'args': {} }, state: 'START' };\n            }\n            return { history: history, currentConvo: newConvo, state: action.state };\n        case types.HIDE_CONVERSATION:\n            // this is super verbose just to update a specific convo index, better way?\n            var newHistory = _.map(history, function (conv) {\n                var out = _extends({}, conv);\n                if (conv.id === action.id) {\n                    out.hidden = !out.hidden;\n                }\n                return out;\n            });\n            // TODO: also wasteful to do a copy everytime, indendent of the index?\n            newConvo = _extends({}, currentConvo);\n            if (newConvo.id === action.id) {\n                newConvo.hidden = !newConvo.hidden;\n            }\n            return { history: newHistory, currentConvo: newConvo, state: state.state };\n        default:\n            return state;\n    }\n};\n\n// variables reducer, constrols variables in right sidebar\nvar variables = function variables() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_VARIABLES:\n            return action.variables;\n        default:\n            return state;\n    }\n};\n\n// predictions reducer, governs hints above input box\nvar predictions = function predictions() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_PREDICTIONS:\n            return action.predictions;\n        default:\n            return state;\n    }\n};\n\n// docs reducer, governs what is displayed in docs pane\nvar docs = function docs() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '', examples: [], description: [], source: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_DOCS:\n            return action.doc;\n        default:\n            return state;\n    }\n};\n\n// function search reducer, governs function search in the right sidebar\nvar functionSearch = function functionSearch() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: '', results: [] };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_FUNC:\n            return _extends({}, state, { search: action.search });\n        case types.UPDATE_RESULTS:\n            return _extends({}, state, { results: action.results });\n        default:\n            return state;\n    }\n};\n\n// input reducer, manages current user input on main conversation pane\nvar currentInput = function currentInput() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'input': '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.STORE_CURRENT_INPUT:\n            return { 'input': action.currentInput };\n        default:\n            return state;\n    }\n};\n\n// reducer that manages which pans are open and closed\n// TODO: this is a bad API, make more consistent\nvar minimizeState = function minimizeState() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'docs': true, 'code_edit': true };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.SET_DOCS:\n            return _extends({}, state, { 'docs': action.docs });\n        case types.SET_CODE_EDIT:\n            return _extends({}, state, { 'code_edit': action.code_edit });\n        default:\n            return state;\n    }\n};\n\n// helper to create a new array/list with desired index removed\nvar removeIndex = function removeIndex(arr, i) {\n    var first_half = arr.concat([]).slice(0, i);\n    var second_half = arr.concat([]).slice(i + 1, arr.length);\n    return first_half.concat(second_half);\n};\n\nvar blankCommand = { name: '', title: '', args: [], examples: [], command: '', explanation: '', testInput: '', preview: '', error: '' };\n\n// reducer to manage the command editing pane\nvar commandEditPane = function commandEditPane() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _extends({}, blankCommand);\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_CODE_EDITOR:\n            var new_state = {};\n            new_state[action.name] = action.value;\n            return _extends({}, state, new_state);\n        case types.UPDATE_COMMAND:\n            console.log(_extends({}, state, action.command));\n            return _extends({}, state, action.command);\n        case types.ADD_COMMAND_ARG:\n            return _extends({}, state, { args: state.args.concat([{ 'arg_name': '', 'arg_type': '', 'arg_string': '' }]) });\n        case types.RESET_COMMAND:\n            return _extends({}, state, blankCommand);\n        case types.ADD_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: state.examples.concat(['']) });\n        case types.UPDATE_COMMAND_EXAMPLE:\n            var newExamples = state.examples.concat([]);\n            newExamples[action.id] = action.text;\n            return _extends({}, state, { examples: newExamples });\n        case types.UPDATE_COMMAND_ARG:\n            var newArgs = state.args.concat([]);\n            newArgs[action.id] = action.values;\n            return _extends({}, state, { args: newArgs });\n        case types.DELETE_COMMAND_ARG:\n            return _extends({}, state, { args: removeIndex(state.args, action.id) });\n        case types.DELETE_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: removeIndex(state.examples, action.id) });\n        default:\n            return state;\n    }\n};\n\n// reducer to manage the input history state, going through old commands with up/down arrow\nvar inputHistory = function inputHistory() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currId': null, 'showHistory': false };\n    var action = arguments[1];\n\n    var newId = void 0;\n    switch (action.type) {\n        case types.ADD_INPUT_HISTORY:\n            if (state.currId === null) {\n                newId = 0;\n            } else {\n                newId = state.currId + 1;\n            }\n            console.log(\"history\", [].concat(_toConsumableArray(state.history), [action.message]), state.currId, newId);\n            return _extends({}, state, { 'history': [].concat(_toConsumableArray(state.history), [action.message]), 'currId': newId });\n        case types.MOVE_INPUT_HISTORY:\n            if (state.history.length === 0 || state.currId === null) {\n                console.log(\"history\", state.currId, newId);\n                return state;\n            }\n            newId = state.currId;\n            if (action.direction === 'up') {\n                if (newId < state.history.length - 1) {\n                    newId += 1;\n                }\n            } else {\n                if (newId >= 1) {\n                    newId -= 1;\n                }\n            }\n            console.log(\"history\", state.currId, newId);\n            return _extends({}, state, { 'currId': newId });\n        default:\n            return state;\n    }\n};\n\n// combine all these reducers together\nvar rootReducer = (0, _redux.combineReducers)({\n    conversation: conversation,\n    variables: variables,\n    predictions: predictions,\n    inputHistory: inputHistory,\n    currentInput: currentInput,\n    docs: docs,\n    functionSearch: functionSearch,\n    minimizeState: minimizeState,\n    commandEditPane: commandEditPane,\n    routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvaW5kZXguanM/ZTkxNiJdLCJuYW1lcyI6WyJ0eXBlcyIsIl8iLCJ2YWx1ZU9yTnVsbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiYXBwZW5kTWVzc2FnZXMiLCJvbGRNZXNzYWdlcyIsImFjdGlvbiIsIm5ld01lc3NhZ2VzIiwiY3VycmVudE1heCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwiaWQiLCJtYXgiLCJ0ZXh0IiwicHVzaCIsIm9yaWdpbiIsInN0YXRlIiwiYXJnIiwiY29uY2F0IiwiYXBwZW5kTWVzc2FnZXNDb252byIsImNvbnZvIiwibWVzc2FnZXMiLCJhcmdzIiwiYXJnX21hcCIsImNvbnZlcnNhdGlvbiIsImhpc3RvcnkiLCJjdXJyZW50Q29udm8iLCJuZXdDb252byIsInR5cGUiLCJVUERBVEVfSElTVE9SWSIsIkFERF9NRVNTQUdFIiwiQUREX1NFUlZFUl9NRVNTQUdFIiwidGhlSWQiLCJ0aXRsZSIsImxhYmVsIiwiSElERV9DT05WRVJTQVRJT04iLCJuZXdIaXN0b3J5Iiwib3V0IiwiY29udiIsImhpZGRlbiIsInZhcmlhYmxlcyIsIlVQREFURV9WQVJJQUJMRVMiLCJwcmVkaWN0aW9ucyIsIlVQREFURV9QUkVESUNUSU9OUyIsImRvY3MiLCJleGFtcGxlcyIsImRlc2NyaXB0aW9uIiwic291cmNlIiwiVVBEQVRFX0RPQ1MiLCJkb2MiLCJmdW5jdGlvblNlYXJjaCIsInNlYXJjaCIsInJlc3VsdHMiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiY3VycmVudElucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsIm1pbmltaXplU3RhdGUiLCJTRVRfRE9DUyIsIlNFVF9DT0RFX0VESVQiLCJjb2RlX2VkaXQiLCJyZW1vdmVJbmRleCIsImFyciIsImkiLCJmaXJzdF9oYWxmIiwic2xpY2UiLCJzZWNvbmRfaGFsZiIsImJsYW5rQ29tbWFuZCIsIm5hbWUiLCJjb21tYW5kIiwiZXhwbGFuYXRpb24iLCJ0ZXN0SW5wdXQiLCJwcmV2aWV3IiwiZXJyb3IiLCJjb21tYW5kRWRpdFBhbmUiLCJVUERBVEVfQ09ERV9FRElUT1IiLCJuZXdfc3RhdGUiLCJVUERBVEVfQ09NTUFORCIsIkFERF9DT01NQU5EX0FSRyIsIlJFU0VUX0NPTU1BTkQiLCJBRERfQ09NTUFORF9FWEFNUExFIiwiVVBEQVRFX0NPTU1BTkRfRVhBTVBMRSIsIm5ld0V4YW1wbGVzIiwiVVBEQVRFX0NPTU1BTkRfQVJHIiwibmV3QXJncyIsInZhbHVlcyIsIkRFTEVURV9DT01NQU5EX0FSRyIsIkRFTEVURV9DT01NQU5EX0VYQU1QTEUiLCJpbnB1dEhpc3RvcnkiLCJuZXdJZCIsIkFERF9JTlBVVF9ISVNUT1JZIiwiY3VycklkIiwibWVzc2FnZSIsIk1PVkVfSU5QVVRfSElTVE9SWSIsImRpcmVjdGlvbiIsInJvb3RSZWR1Y2VyIiwicm91dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7SUFBWUEsSzs7QUFDWjs7SUFBWUMsQzs7Ozs7O0FBRVo7QUFDQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCLFFBQUlBLFVBQVVDLFNBQWQsRUFBeUI7QUFDckIsZUFBT0QsS0FBUDtBQUNIO0FBQ0QsV0FBTyxJQUFQO0FBQ0gsQ0FMRDs7QUFPQTtBQUNBLElBQU1FLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRCxFQUFjQyxNQUFkLEVBQXlCO0FBQzVDLFFBQU1DLGNBQWMsRUFBcEI7QUFDQSxRQUFJQyxhQUFhLENBQWpCO0FBQ0EsUUFBSUgsWUFBWUksTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUN4QkMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CWCxFQUFFWSxHQUFGLENBQU1QLFdBQU4sRUFBbUIsVUFBU1EsQ0FBVCxFQUFZO0FBQUUsbUJBQU9BLEVBQUVDLEVBQVQ7QUFBYyxTQUEvQyxDQUFuQjtBQUNBTixxQkFBYVIsRUFBRWUsR0FB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LGdCQUFJN0UsTUFBTVMsT0FBTixDQUFjbkIsTUFBZCxLQUF5QixDQUF6QixJQUE4QlUsTUFBTTJFLE1BQU4sS0FBaUIsSUFBbkQsRUFBeUQ7QUFDckRwRix3QkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJRLE1BQU0yRSxNQUE3QixFQUFxQ0YsS0FBckM7QUFDQSx1QkFBT3pFLEtBQVA7QUFDSDtBQUNEeUUsb0JBQVF6RSxNQUFNMkUsTUFBZDtBQUNBLGdCQUFJeEYsT0FBTzJGLFNBQVAsS0FBcUIsSUFBekIsRUFBK0I7QUFDM0Isb0JBQUlMLFFBQVN6RSxNQUFNUyxPQUFOLENBQWNuQixNQUFkLEdBQXVCLENBQXBDLEVBQXdDO0FBQ3BDbUYsNkJBQVMsQ0FBVDtBQUNIO0FBQ0osYUFKRCxNQUlPO0FBQ0gsb0JBQUlBLFNBQVMsQ0FBYixFQUFnQjtBQUNaQSw2QkFBUyxDQUFUO0FBQ0g7QUFDSjtBQUNEbEYsb0JBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCUSxNQUFNMkUsTUFBN0IsRUFBcUNGLEtBQXJDO0FBQ0EsZ0NBQVd6RSxLQUFYLElBQWtCLFVBQVV5RSxLQUE1QjtBQUNKO0FBQ0ksbUJBQU96RSxLQUFQO0FBM0JSO0FBNkJILENBL0JEOztBQWlDQTtBQUNBLElBQU0rRSxjQUFjLDRCQUFnQjtBQUNoQ3ZFLDhCQURnQztBQUVoQ2dCLHdCQUZnQztBQUdoQ0UsNEJBSGdDO0FBSWhDOEMsOEJBSmdDO0FBS2hDakMsOEJBTGdDO0FBTWhDWCxjQU5nQztBQU9oQ00sa0NBUGdDO0FBUWhDTyxnQ0FSZ0M7QUFTaENpQixvQ0FUZ0M7QUFVaENzQjtBQVZnQyxDQUFoQixDQUFwQjs7a0JBYWVELFciLCJmaWxlIjoiNTEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcm91dGVyUmVkdWNlciBhcyByb3V0aW5nIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG4vLyBUT0RPOiBhIGJpdCBjb25mdXNlZCB3aHkgd2UgbmVlZCB0aGlzIGZ1bmN0aW9uXG5jb25zdCB2YWx1ZU9yTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vLyBnaXZlbiBhbiBhY3Rpb24sIHB1c2ggYW55IG5ldyBtZXNzYWdlcyBvbnRvIGFuIGV4aXN0aW5nIHNldCBvZiBtZXNzYWdlc1xuY29uc3QgYXBwZW5kTWVzc2FnZXMgPSAob2xkTWVzc2FnZXMsIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IG5ld01lc3NhZ2VzID0gW107XG4gICAgbGV0IGN1cnJlbnRNYXggPSAwO1xuICAgIGlmIChvbGRNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXAnLCBfLm1hcChvbGRNZXNzYWdlcywgZnVuY3Rpb24obSkgeyByZXR1cm4gbS5pZDsgfSkpO1xuICAgICAgICBjdXJyZW50TWF4ID0gXy5tYXgoXy5tYXAob2xkTWVzc2FnZXMsIGZ1bmN0aW9uKG0pIHsgcmV0dXJuIG0uaWQ7IH0pKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBtIG9mIGFjdGlvbi50ZXh0KSB7XG4gICAgICAgIGN1cnJlbnRNYXgrKztcbiAgICAgICAgbmV3TWVzc2FnZXMucHVzaCh7J29yaWdpbic6IGFjdGlvbi5vcmlnaW4sICd0ZXh0JzogbSwgJ2lkJzogY3VycmVudE1heCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogdmFsdWVPck51bGwoYWN0aW9uLnN0YXRlKSwgJ2FyZyc6IHZhbHVlT3JOdWxsKGFjdGlvbi5hcmcpfSk7XG4gICAgfVxuICAgIHJldHVybiBvbGRNZXNzYWdlcy5jb25jYXQobmV3TWVzc2FnZXMpO1xufTtcblxuLy8gZ2l2ZW4gYW4gYWN0aW9uLCB1cGRhdGUgYSBjb252ZXJzYXRpb24gd2l0aCBuZXcgbWVzc2FnZXNcbmNvbnN0IGFwcGVuZE1lc3NhZ2VzQ29udm8gPSAoY29udm8sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGNvbnZvO1xuICAgIHJldHVybiB7IC4uLmNvbnZvLCBtZXNzYWdlczogYXBwZW5kTWVzc2FnZXMobWVzc2FnZXMsIGFjdGlvbiksIGFyZ3M6IGFjdGlvbi5hcmdfbWFwIH07XG59O1xuXG4vLyByZWR1Y2VyIGZvciBjb252ZXJzYXRpb25zXG4vLyBUT0RPOiBUaGlzIGRlZmluaXRpb24gc3RhdGUgaXMgcHJldHR5IGxvbmcsIG1lc3N5XG4vLyBBbHNvIG5vdCBjbGVhciB3aGF0IFwiYXJnc1wiIHJlcHJlc2VudHMgaW4gYSBjb252ZXJzYXRpb24gd2l0aCBtdWx0aXBsZSBzdWItY29udm9zXG4vLyBNYXliZSBpdCBpcyBvbmx5IGltcG9ydGFudCB0byByZXByZXNlbnQgdGhlIGNvbnZvIHRpdGxlLCBpZiBzbyBtYXliZSB0aGF0IHNob3VsZCBiZSByZWZhY3RvcmVkXG5jb25zdCBjb252ZXJzYXRpb24gPSAoc3RhdGUgPSB7J2hpc3RvcnknOiBbXSwgJ2N1cnJlbnRDb252byc6IHsgJ21lc3NhZ2VzJzogW10sICd0aXRsZSc6IG51bGwsICdoaWRkZW4nOiBmYWxzZSwgJ2lkJzogMCwgJ2FyZ3MnOiB7fSB9LCAnc3RhdGUnOiAnU1RBUlQnfSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBoaXN0b3J5LCBjdXJyZW50Q29udm8gfSA9IHN0YXRlO1xuICAgIGxldCBuZXdDb252bztcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX0hJU1RPUlk6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uY29udmVyc2F0aW9uLmN1cnJlbnRDb252byk7XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBhY3Rpb24uY29udmVyc2F0aW9uLmhpc3RvcnksIGN1cnJlbnRDb252bzogYWN0aW9uLmNvbnZlcnNhdGlvbi5jdXJyZW50Q29udm8sICdzdGF0ZSc6IHN0YXRlLnN0YXRlIH07XG4gICAgICAgIGNhc2UgdHlwZXMuQUREX01FU1NBR0U6XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5LCBjdXJyZW50Q29udm86IGFwcGVuZE1lc3NhZ2VzQ29udm8oY3VycmVudENvbnZvLCBhY3Rpb24pLCAnc3RhdGUnOiBzdGF0ZS5zdGF0ZSB9O1xuICAgICAgICAvLyB0aGlzIGlzIGEgYml0IGNvbXBsZXgsIG1heWJlIG5lZWRzIHJldmlldyBmb3IgY2xhcml0eVxuICAgICAgICBjYXNlIHR5cGVzLkFERF9TRVJWRVJfTUVTU0FHRTpcbiAgICAgICAgICAgIGlmIChhY3Rpb24udGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdDb252byA9IGFwcGVuZE1lc3NhZ2VzQ29udm8oY3VycmVudENvbnZvLCBhY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5zdGF0ZSA9PT0gJ1NUQVJUJykge1xuICAgICAgICAgICAgICAgIC8vIGhhcmRjb2Rpbmcgc29tZSBsb2dpYyBoZXJlIGZvciBzeW5jaW5nIGhpc3Rvcnkgd2l0aCBzZXJ2ZXIgb24gU1RBUlRcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGFsbG93cyBzb21lIGNvbW1hbmRzIHRvIG92ZXJ3cml0ZSBoaXN0b3J5IGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgbGV0IHRoZUlkID0gYWN0aW9uLmhpc3RvcnkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG5ld0NvbnZvID0gey4uLm5ld0NvbnZvLCB0aXRsZTogYWN0aW9uLmxhYmVsLCBpZDogdGhlSWQgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBhY3Rpb24uaGlzdG9yeS5jb25jYXQoW25ld0NvbnZvXSksICdjdXJyZW50Q29udm8nOiB7ICdtZXNzYWdlcyc6IFtdLCAndGl0bGUnOiBudWxsLCAnaGlkZGVuJzogZmFsc2UsICdpZCc6IG5ld0NvbnZvLmlkICsgMSwgJ2FyZ3MnOiB7fSB9LCBzdGF0ZTogJ1NUQVJUJyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeSwgY3VycmVudENvbnZvOiBuZXdDb252bywgc3RhdGU6IGFjdGlvbi5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkhJREVfQ09OVkVSU0FUSU9OOlxuICAgICAgICAgICAgLy8gdGhpcyBpcyBzdXBlciB2ZXJib3NlIGp1c3QgdG8gdXBkYXRlIGEgc3BlY2lmaWMgY29udm8gaW5kZXgsIGJldHRlciB3YXk/XG4gICAgICAgICAgICBjb25zdCBuZXdIaXN0b3J5ID0gXy5tYXAoaGlzdG9yeSwgY29udiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gey4uLmNvbnZ9O1xuICAgICAgICAgICAgICAgIGlmIChjb252LmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0LmhpZGRlbiA9ICFvdXQuaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBUT0RPOiBhbHNvIHdhc3RlZnVsIHRvIGRvIGEgY29weSBldmVyeXRpbWUsIGluZGVuZGVudCBvZiB0aGUgaW5kZXg/XG4gICAgICAgICAgICBuZXdDb252byA9IHsuLi5jdXJyZW50Q29udm99O1xuICAgICAgICAgICAgaWYgKG5ld0NvbnZvLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICBuZXdDb252by5oaWRkZW4gPSAhbmV3Q29udm8uaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogbmV3SGlzdG9yeSwgY3VycmVudENvbnZvOiBuZXdDb252bywgc3RhdGU6IHN0YXRlLnN0YXRlfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG4vLyB2YXJpYWJsZXMgcmVkdWNlciwgY29uc3Ryb2xzIHZhcmlhYmxlcyBpbiByaWdodCBzaWRlYmFyXG5jb25zdCB2YXJpYWJsZXMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9WQVJJQUJMRVM6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnZhcmlhYmxlcztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG4vLyBwcmVkaWN0aW9ucyByZWR1Y2VyLCBnb3Zlcm5zIGhpbnRzIGFib3ZlIGlucHV0IGJveFxuY29uc3QgcHJlZGljdGlvbnMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9QUkVESUNUSU9OUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucHJlZGljdGlvbnM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuLy8gZG9jcyByZWR1Y2VyLCBnb3Zlcm5zIHdoYXQgaXMgZGlzcGxheWVkIGluIGRvY3MgcGFuZVxuY29uc3QgZG9jcyA9IChzdGF0ZSA9IHt0aXRsZTogJycsIGV4YW1wbGVzOiBbXSwgZGVzY3JpcHRpb246IFtdLCBzb3VyY2U6Jyd9LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX0RPQ1M6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmRvYztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG4vLyBmdW5jdGlvbiBzZWFyY2ggcmVkdWNlciwgZ292ZXJucyBmdW5jdGlvbiBzZWFyY2ggaW4gdGhlIHJpZ2h0IHNpZGViYXJcbmNvbnN0IGZ1bmN0aW9uU2VhcmNoID0gKHN0YXRlID0ge3NlYXJjaDogJycsIHJlc3VsdHM6IFtdfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0ZVTkM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBzZWFyY2g6IGFjdGlvbi5zZWFyY2h9O1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX1JFU1VMVFM6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCByZXN1bHRzOiBhY3Rpb24ucmVzdWx0c307XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuLy8gaW5wdXQgcmVkdWNlciwgbWFuYWdlcyBjdXJyZW50IHVzZXIgaW5wdXQgb24gbWFpbiBjb252ZXJzYXRpb24gcGFuZVxuY29uc3QgY3VycmVudElucHV0ID0gKHN0YXRlID0geydpbnB1dCc6ICcnfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuU1RPUkVfQ1VSUkVOVF9JTlBVVDpcbiAgICAgIHJldHVybiB7J2lucHV0JzogYWN0aW9uLmN1cnJlbnRJbnB1dH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuLy8gcmVkdWNlciB0aGF0IG1hbmFnZXMgd2hpY2ggcGFucyBhcmUgb3BlbiBhbmQgY2xvc2VkXG4vLyBUT0RPOiB0aGlzIGlzIGEgYmFkIEFQSSwgbWFrZSBtb3JlIGNvbnNpc3RlbnRcbmNvbnN0IG1pbmltaXplU3RhdGUgPSAoc3RhdGU9eydkb2NzJzogdHJ1ZSwgJ2NvZGVfZWRpdCc6dHJ1ZX0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlNFVF9ET0NTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2RvY3MnOiBhY3Rpb24uZG9jc307XG4gICAgY2FzZSB0eXBlcy5TRVRfQ09ERV9FRElUOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2NvZGVfZWRpdCc6IGFjdGlvbi5jb2RlX2VkaXR9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbi8vIGhlbHBlciB0byBjcmVhdGUgYSBuZXcgYXJyYXkvbGlzdCB3aXRoIGRlc2lyZWQgaW5kZXggcmVtb3ZlZFxuY29uc3QgcmVtb3ZlSW5kZXggPSAoYXJyLCBpKSA9PiB7XG4gIGxldCBmaXJzdF9oYWxmID0gYXJyLmNvbmNhdChbXSkuc2xpY2UoMCwgaSk7XG4gIGxldCBzZWNvbmRfaGFsZiA9IGFyci5jb25jYXQoW10pLnNsaWNlKGkrMSxhcnIubGVuZ3RoKTtcbiAgcmV0dXJuIGZpcnN0X2hhbGYuY29uY2F0KHNlY29uZF9oYWxmKTtcbn1cblxuY29uc3QgYmxhbmtDb21tYW5kID0ge25hbWU6ICcnLCB0aXRsZTogJycsIGFyZ3M6IFtdLCBleGFtcGxlczogW10sIGNvbW1hbmQ6ICcnLCBleHBsYW5hdGlvbjogJycsIHRlc3RJbnB1dDogJycsIHByZXZpZXc6JycsIGVycm9yOiAnJ307XG5cbi8vIHJlZHVjZXIgdG8gbWFuYWdlIHRoZSBjb21tYW5kIGVkaXRpbmcgcGFuZVxuY29uc3QgY29tbWFuZEVkaXRQYW5lID0gKHN0YXRlPXsuLi5ibGFua0NvbW1hbmR9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfQ09ERV9FRElUT1I6XG4gICAgICBsZXQgbmV3X3N0YXRlID0ge307XG4gICAgICBuZXdfc3RhdGVbYWN0aW9uLm5hbWVdID0gYWN0aW9uLnZhbHVlO1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4ubmV3X3N0YXRlfTtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9DT01NQU5EOlxuICAgICAgY29uc29sZS5sb2coey4uLnN0YXRlLCAuLi5hY3Rpb24uY29tbWFuZH0pO1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLmNvbW1hbmR9O1xuICAgIGNhc2UgdHlwZXMuQUREX0NPTU1BTkRfQVJHOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYXJnczogc3RhdGUuYXJncy5jb25jYXQoW3snYXJnX25hbWUnOiAnJywgJ2FyZ190eXBlJzogJycsICdhcmdfc3RyaW5nJzogJyd9XSl9O1xuICAgIGNhc2UgdHlwZXMuUkVTRVRfQ09NTUFORDpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmJsYW5rQ29tbWFuZH07XG4gICAgY2FzZSB0eXBlcy5BRERfQ09NTUFORF9FWEFNUExFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhhbXBsZXM6IHN0YXRlLmV4YW1wbGVzLmNvbmNhdChbJyddKX07XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfQ09NTUFORF9FWEFNUExFOlxuICAgICAgbGV0IG5ld0V4YW1wbGVzID0gc3RhdGUuZXhhbXBsZXMuY29uY2F0KFtdKTtcbiAgICAgIG5ld0V4YW1wbGVzW2FjdGlvbi5pZF0gPSBhY3Rpb24udGV4dDtcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4YW1wbGVzOiBuZXdFeGFtcGxlc307XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfQ09NTUFORF9BUkc6XG4gICAgICBsZXQgbmV3QXJncyA9IHN0YXRlLmFyZ3MuY29uY2F0KFtdKTtcbiAgICAgIG5ld0FyZ3NbYWN0aW9uLmlkXSA9IGFjdGlvbi52YWx1ZXM7XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBhcmdzOiBuZXdBcmdzfTtcbiAgICBjYXNlIHR5cGVzLkRFTEVURV9DT01NQU5EX0FSRzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGFyZ3M6IHJlbW92ZUluZGV4KHN0YXRlLmFyZ3MsIGFjdGlvbi5pZCl9O1xuICAgIGNhc2UgdHlwZXMuREVMRVRFX0NPTU1BTkRfRVhBTVBMRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4YW1wbGVzOiByZW1vdmVJbmRleChzdGF0ZS5leGFtcGxlcywgYWN0aW9uLmlkKX07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuLy8gcmVkdWNlciB0byBtYW5hZ2UgdGhlIGlucHV0IGhpc3Rvcnkgc3RhdGUsIGdvaW5nIHRocm91Z2ggb2xkIGNvbW1hbmRzIHdpdGggdXAvZG93biBhcnJvd1xuY29uc3QgaW5wdXRIaXN0b3J5ID0gKHN0YXRlID0geydoaXN0b3J5JzogW10sICdjdXJySWQnOiBudWxsLCAnc2hvd0hpc3RvcnknOiBmYWxzZSB9LCBhY3Rpb24pID0+IHtcbiAgICBsZXQgbmV3SWQ7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLkFERF9JTlBVVF9ISVNUT1JZOlxuICAgICAgICAgICAgaWYgKHN0YXRlLmN1cnJJZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld0lkID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld0lkID0gc3RhdGUuY3VycklkICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGlzdG9yeVwiLCBbLi4uc3RhdGUuaGlzdG9yeSwgYWN0aW9uLm1lc3NhZ2VdLCBzdGF0ZS5jdXJySWQsIG5ld0lkKTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsICdoaXN0b3J5JzogWy4uLnN0YXRlLmhpc3RvcnksIGFjdGlvbi5tZXNzYWdlXSwgJ2N1cnJJZCc6IG5ld0lkfTtcbiAgICAgICAgY2FzZSB0eXBlcy5NT1ZFX0lOUFVUX0hJU1RPUlk6XG4gICAgICAgICAgICBpZiAoc3RhdGUuaGlzdG9yeS5sZW5ndGggPT09IDAgfHwgc3RhdGUuY3VycklkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaXN0b3J5XCIsIHN0YXRlLmN1cnJJZCwgbmV3SWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0lkID0gc3RhdGUuY3VycklkO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5kaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3SWQgPCAoc3RhdGUuaGlzdG9yeS5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJZCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0lkID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SWQgLT0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpc3RvcnlcIiwgc3RhdGUuY3VycklkLCBuZXdJZCk7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAnY3VycklkJzogbmV3SWQgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG4vLyBjb21iaW5lIGFsbCB0aGVzZSByZWR1Y2VycyB0b2dldGhlclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNvbnZlcnNhdGlvbixcbiAgICB2YXJpYWJsZXMsXG4gICAgcHJlZGljdGlvbnMsXG4gICAgaW5wdXRIaXN0b3J5LFxuICAgIGN1cnJlbnRJbnB1dCxcbiAgICBkb2NzLFxuICAgIGZ1bmN0aW9uU2VhcmNoLFxuICAgIG1pbmltaXplU3RhdGUsXG4gICAgY29tbWFuZEVkaXRQYW5lLFxuICAgIHJvdXRpbmdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})