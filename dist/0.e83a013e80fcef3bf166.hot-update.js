webpackHotUpdate(0,{

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRouterRedux = __webpack_require__(440);\n\nvar _redux = __webpack_require__(304);\n\nvar _types = __webpack_require__(320);\n\nvar types = _interopRequireWildcard(_types);\n\nvar _lodash = __webpack_require__(123);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// TODO: a bit confused why we need this function\nvar valueOrNull = function valueOrNull(value) {\n    if (value !== undefined) {\n        return value;\n    }\n    return null;\n};\n\n// given an action, push any new messages onto an existing set of messages\nvar appendMessages = function appendMessages(oldMessages, action) {\n    var newMessages = [];\n    var currentMax = 0;\n    if (oldMessages.length > 0) {\n        console.log('map', _.map(oldMessages, function (m) {\n            return m.id;\n        }));\n        currentMax = _.max(_.map(oldMessages, function (m) {\n            return m.id;\n        }));\n    }\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = action.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var m = _step.value;\n\n            currentMax++;\n            var class_index = action.class_index !== undefined ? action.class_index : null;\n            newMessages.push({ 'origin': action.origin, 'text': m, 'id': currentMax, 'class_index': class_index,\n                'state': valueOrNull(action.state), 'arg': valueOrNull(action.arg) });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return oldMessages.concat(newMessages);\n};\n\n// given an action, update a conversation with new messages\nvar appendMessagesConvo = function appendMessagesConvo(convo, action) {\n    var messages = convo.messages;\n\n    return _extends({}, convo, { messages: appendMessages(messages, action), args: action.arg_map });\n};\n\n// reducer for conversations\n// TODO: This definition state is pretty long, messy\n// Also not clear what \"args\" represents in a conversation with multiple sub-convos\n// Maybe it is only important to represent the convo title, if so maybe that should be refactored\nvar conversation = function conversation() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': 0, 'args': {} }, 'state': 'START' };\n    var action = arguments[1];\n    var history = state.history,\n        currentConvo = state.currentConvo;\n\n    var newConvo = void 0;\n    switch (action.type) {\n        case types.UPDATE_HISTORY:\n            console.log(action.conversation.currentConvo);\n            return { history: action.conversation.history, currentConvo: action.conversation.currentConvo, 'state': state.state };\n        case types.ADD_MESSAGE:\n            return { history: history, currentConvo: appendMessagesConvo(currentConvo, action), 'state': state.state };\n        // this is a bit complex, maybe needs review for clarity\n        case types.ADD_SERVER_MESSAGE:\n            if (action.text.length === 0) {\n                return state;\n            }\n            newConvo = appendMessagesConvo(currentConvo, action);\n            if (action.state === 'START') {\n                // hardcoding some logic here for syncing history with server on START\n                // this allows some commands to overwrite history immediately\n                var theId = action.history.length;\n                newConvo = _extends({}, newConvo, { title: action.label, id: theId });\n                return { history: action.history.concat([newConvo]), 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': newConvo.id + 1, 'args': {} }, state: 'START' };\n            }\n            return { history: history, currentConvo: newConvo, state: action.state };\n        case types.HIDE_CONVERSATION:\n            // this is super verbose just to update a specific convo index, better way?\n            var newHistory = _.map(history, function (conv) {\n                var out = _extends({}, conv);\n                if (conv.id === action.id) {\n                    out.hidden = !out.hidden;\n                }\n                return out;\n            });\n            // TODO: also wasteful to do a copy everytime, indendent of the index?\n            newConvo = _extends({}, currentConvo);\n            if (newConvo.id === action.id) {\n                newConvo.hidden = !newConvo.hidden;\n            }\n            return { history: newHistory, currentConvo: newConvo, state: state.state };\n        default:\n            return state;\n    }\n};\n\n// variables reducer, constrols variables in right sidebar\nvar variables = function variables() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_VARIABLES:\n            return _.map(_.sortBy(action.variables, function (v) {\n                return v.order;\n            }));\n        case types.TOGGLE_VARIABLE_ATTRIBUTES:\n            var newVariables = _.map(_.sortBy(state, function (v) {\n                return v.order;\n            })).concat([]);\n            if (newVariables[action.index].show == true) {\n                newVariables[action.index].show = false;\n            } else {\n                newVariables[action.index].show = true;\n            }\n            return newVariables;\n        default:\n            return state;\n    }\n};\n\n// predictions reducer, governs hints above input box\nvar predictions = function predictions() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_PREDICTIONS:\n            return action.predictions;\n        default:\n            return state;\n    }\n};\n\n// docs reducer, governs what is displayed in docs pane\nvar docs = function docs() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '', examples: [], description: [], source: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_DOCS:\n            return action.doc;\n        default:\n            return state;\n    }\n};\n\n// function search reducer, governs function search in the right sidebar\nvar functionSearch = function functionSearch() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: '', results: [] };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_FUNC:\n            return _extends({}, state, { search: action.search });\n        case types.UPDATE_RESULTS:\n            return _extends({}, state, { results: action.results });\n        default:\n            return state;\n    }\n};\n\n// input reducer, manages current user input on main conversation pane\nvar currentInput = function currentInput() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'input': '', 'classIndex': null };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.STORE_CURRENT_INPUT:\n            return _extends({}, state, { 'input': action.currentInput });\n        case types.STORE_CLASS_INDEX:\n            return _extends({}, state, { 'classIndex': action.class_index });\n        case types.CLEAR_CLASS_INDEX:\n            return _extends({}, state, { 'classIndex': null });\n        default:\n            return state;\n    }\n};\n\n// reducer that manages which pans are open and closed\n// TODO: this is a bad API, make more consistent\nvar minimizeState = function minimizeState() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'docs': true, 'code_edit': true };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.SET_DOCS:\n            return _extends({}, state, { 'docs': action.docs });\n        case types.SET_CODE_EDIT:\n            return _extends({}, state, { 'code_edit': action.code_edit });\n        default:\n            return state;\n    }\n};\n\n// helper to create a new array/list with desired index removed\nvar removeIndex = function removeIndex(arr, i) {\n    var first_half = arr.concat([]).slice(0, i);\n    var second_half = arr.concat([]).slice(i + 1, arr.length);\n    return first_half.concat(second_half);\n};\n\nvar blankCommand = { name: '', title: '', args: [], examples: [], command: '', explanation: '', testInput: '', preview: '', error: '' };\n\n// reducer to manage the command editing pane\nvar commandEditPane = function commandEditPane() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _extends({}, blankCommand);\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_CODE_EDITOR:\n            var new_state = {};\n            new_state[action.name] = action.value;\n            return _extends({}, state, new_state);\n        case types.UPDATE_COMMAND:\n            console.log(_extends({}, state, action.command));\n            return _extends({}, state, action.command);\n        case types.ADD_COMMAND_ARG:\n            return _extends({}, state, { args: state.args.concat([{ 'arg_name': '', 'arg_type': '', 'arg_string': '' }]) });\n        case types.RESET_COMMAND:\n            return _extends({}, state, blankCommand);\n        case types.ADD_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: state.examples.concat(['']) });\n        case types.UPDATE_COMMAND_EXAMPLE:\n            var newExamples = state.examples.concat([]);\n            newExamples[action.id] = action.text;\n            return _extends({}, state, { examples: newExamples });\n        case types.UPDATE_COMMAND_ARG:\n            var newArgs = state.args.concat([]);\n            newArgs[action.id] = action.values;\n            return _extends({}, state, { args: newArgs });\n        case types.DELETE_COMMAND_ARG:\n            return _extends({}, state, { args: removeIndex(state.args, action.id) });\n        case types.DELETE_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: removeIndex(state.examples, action.id) });\n        default:\n            return state;\n    }\n};\n\n// reducer to manage the input history state, going through old commands with up/down arrow\nvar inputHistory = function inputHistory() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currId': null, 'showHistory': false };\n    var action = arguments[1];\n\n    var newId = void 0;\n    switch (action.type) {\n        case types.ADD_INPUT_HISTORY:\n            var newHistory = [].concat(_toConsumableArray(state.history), [action.message]);\n            console.log(\"history\", newHistory, state.currId, newHistory.length - 1);\n            return _extends({}, state, { 'history': newHistory, 'currId': newHistory.length - 1 });\n        case types.MOVE_INPUT_HISTORY:\n            if (state.history.length === 0 || state.currId === null) {\n                console.log(\"history\", state.currId, newId);\n                return state;\n            }\n            newId = state.currId;\n            if (action.direction === 'up') {\n                if (newId >= 1) {\n                    newId -= 1;\n                }\n            } else {\n                if (newId < state.history.length - 1) {\n                    newId += 1;\n                }\n            }\n            console.log(\"history\", state.currId, newId);\n            return _extends({}, state, { 'currId': newId });\n        default:\n            return state;\n    }\n};\n\n// combine all these reducers together\nvar rootReducer = (0, _redux.combineReducers)({\n    conversation: conversation,\n    variables: variables,\n    predictions: predictions,\n    inputHistory: inputHistory,\n    currentInput: currentInput,\n    docs: docs,\n    functionSearch: functionSearch,\n    minimizeState: minimizeState,\n    commandEditPane: commandEditPane,\n    routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvaW5kZXguanM/ZTkxNiJdLCJuYW1lcyI6WyJ0eXBlcyIsIl8iLCJ2YWx1ZU9yTnVsbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiYXBwZW5kTWVzc2FnZXMiLCJvbGRNZXNzYWdlcyIsImFjdGlvbiIsIm5ld01lc3NhZ2VzIiwiY3VycmVudE1heCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwiaWQiLCJtYXgiLCJ0ZXh0IiwiY2xhc3NfaW5kZXgiLCJwdXNoIiwib3JpZ2luIiwic3RhdGUiLCJhcmciLCJjb25jYXQiLCJhcHBlbmRNZXNzYWdlc0NvbnZvIiwiY29udm8iLCJtZXNzYWdlcyIsImFyZ3MiLCJhcmdfbWFwIiwiY29udmVyc2F0aW9uIiwiaGlzdG9yeSIsImN1cnJlbnRDb252byIsIm5ld0NvbnZvIiwidHlwZSIsIlVQREFURV9ISVNUT1JZIiwiQUREX01FU1NBR0UiLCJBRERfU0VSVkVSX01FU1NBR0UiLCJ0aGVJZCIsInRpdGxlIiwibGFiZWwiLCJISURFX0NPTlZFUlNBVElPTiIsIm5ld0hpc3RvcnkiLCJvdXQiLCJjb252IiwiaGlkZGVuIiwidmFyaWFibGVzIiwiVVBEQVRFX1ZBUklBQkxFUyIsInNvcnRCeSIsInYiLCJvcmRlciIsIlRPR0dMRV9WQVJJQUJMRV9BVFRSSUJVVEVTIiwibmV3VmFyaWFibGVzIiwiaW5kZXgiLCJzaG93IiwicHJlZGljdGlvbnMiLCJVUERBVEVfUFJFRElDVElPTlMiLCJkb2NzIiwiZXhhbXBsZXMiLCJkZXNjcmlwdGlvbiIsInNvdXJjZSIsIlVQREFURV9ET0NTIiwiZG9jIiwiZnVuY3Rpb25TZWFyY2giLCJzZWFyY2giLCJyZXN1bHRzIiwiVVBEQVRFX0ZVTkMiLCJVUERBVEVfUkVTVUxUUyIsImN1cnJlbnRJbnB1dCIsIlNUT1JFX0NVUlJFTlRfSU5QVVQiLCJTVE9SRV9DTEFTU19JTkRFWCIsIkNMRUFSX0NMQVNTX0lOREVYIiwibWluaW1pemVTdGF0ZSIsIlNFVF9ET0NTIiwiU0VUX0NPREVfRURJVCIsImNvZGVfZWRpdCIsInJlbW92ZUluZGV4IiwiYXJyIiwiaSIsImZpcnN0X2hhbGYiLCJzbGljZSIsInNlY29uZF9oYWxmIiwiYmxhbmtDb21tYW5kIiwibmFtZSIsImNvbW1hbmQiLCJleHBsYW5hdGlvbiIsInRlc3RJbnB1dCIsInByZXZpZXciLCJlcnJvciIsImNvbW1hbmRFZGl0UGFuZSIsIlVQREFURV9DT0RFX0VESVRPUiIsIm5ld19zdGF0ZSIsIlVQREFURV9DT01NQU5EIiwiQUREX0NPTU1BTkRfQVJHIiwiUkVTRVRfQ09NTUFORCIsIkFERF9DT01NQU5EX0VYQU1QTEUiLCJVUERBVEVfQ09NTUFORF9FWEFNUExFIiwibmV3RXhhbXBsZXMiLCJVUERBVEVfQ09NTUFORF9BUkciLCJuZXdBcmdzIiwidmFsdWVzIiwiREVMRVRFX0NPTU1BTkRfQVJHIiwiREVMRVRFX0NPTU1BTkRfRVhBTVBMRSIsImlucHV0SGlzdG9yeSIsIm5ld0lkIiwiQUREX0lOUFVUX0hJU1RPUlkiLCJtZXNzYWdlIiwiY3VycklkIiwiTU9WRV9JTlBVVF9ISVNUT1JZIiwiZGlyZWN0aW9uIiwicm9vdFJlZHVjZXIiLCJyb3V0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztJQUFZQSxLOztBQUNaOztJQUFZQyxDOzs7Ozs7QUFFWjtBQUNBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDM0IsUUFBSUEsVUFBVUMsU0FBZCxFQUF5QjtBQUNyQixlQUFPRCxLQUFQO0FBQ0g7QUFDRCxXQUFPLElBQVA7QUFDSCxDQUxEOztBQU9BO0FBQ0EsSUFBTUUsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxXQUFELEVBQWNDLE1BQWQsRUFBeUI7QUFDNUMsUUFBTUMsY0FBYyxFQUFwQjtBQUNBLFFBQUlDLGFBQWEsQ0FBakI7QUFDQSxRQUFJSCxZQUFZSSxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCQyxn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TUFBTXFGLE1BQTdCLEVBQXFDSCxLQUFyQztBQUNBLHVCQUFPbEYsS0FBUDtBQUNIO0FBQ0RrRixvQkFBUWxGLE1BQU1xRixNQUFkO0FBQ0EsZ0JBQUluRyxPQUFPcUcsU0FBUCxLQUFxQixJQUF6QixFQUErQjtBQUMzQixvQkFBSUwsU0FBUyxDQUFiLEVBQWdCO0FBQ1pBLDZCQUFTLENBQVQ7QUFDSDtBQUNKLGFBSkQsTUFJTztBQUNILG9CQUFJQSxRQUFTbEYsTUFBTVMsT0FBTixDQUFjcEIsTUFBZCxHQUF1QixDQUFwQyxFQUF3QztBQUNwQzZGLDZCQUFTLENBQVQ7QUFDSDtBQUNKO0FBQ0Q1RixvQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJTLE1BQU1xRixNQUE3QixFQUFxQ0gsS0FBckM7QUFDQSxnQ0FBV2xGLEtBQVgsSUFBa0IsVUFBVWtGLEtBQTVCO0FBQ0o7QUFDSSxtQkFBT2xGLEtBQVA7QUF2QlI7QUF5QkgsQ0EzQkQ7O0FBNkJBO0FBQ0EsSUFBTXdGLGNBQWMsNEJBQWdCO0FBQ2hDaEYsOEJBRGdDO0FBRWhDZ0Isd0JBRmdDO0FBR2hDUyw0QkFIZ0M7QUFJaENnRCw4QkFKZ0M7QUFLaENuQyw4QkFMZ0M7QUFNaENYLGNBTmdDO0FBT2hDTSxrQ0FQZ0M7QUFRaENTLGdDQVJnQztBQVNoQ2lCLG9DQVRnQztBQVVoQ3NCO0FBVmdDLENBQWhCLENBQXBCOztrQkFhZUQsVyIsImZpbGUiOiI1MTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIGFzIHJvdXRpbmcgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vIFRPRE86IGEgYml0IGNvbmZ1c2VkIHdoeSB3ZSBuZWVkIHRoaXMgZnVuY3Rpb25cbmNvbnN0IHZhbHVlT3JOdWxsID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIGdpdmVuIGFuIGFjdGlvbiwgcHVzaCBhbnkgbmV3IG1lc3NhZ2VzIG9udG8gYW4gZXhpc3Rpbmcgc2V0IG9mIG1lc3NhZ2VzXG5jb25zdCBhcHBlbmRNZXNzYWdlcyA9IChvbGRNZXNzYWdlcywgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgbmV3TWVzc2FnZXMgPSBbXTtcbiAgICBsZXQgY3VycmVudE1heCA9IDA7XG4gICAgaWYgKG9sZE1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hcCcsIF8ubWFwKG9sZE1lc3NhZ2VzLCBmdW5jdGlvbihtKSB7IHJldHVybiBtLmlkOyB9KSk7XG4gICAgICAgIGN1cnJlbnRNYXggPSBfLm1heChfLm1hcChvbGRNZXNzYWdlcywgZnVuY3Rpb24obSkgeyByZXR1cm4gbS5pZDsgfSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG0gb2YgYWN0aW9uLnRleHQpIHtcbiAgICAgICAgY3VycmVudE1heCsrO1xuICAgICAgICBsZXQgY2xhc3NfaW5kZXggPSBhY3Rpb24uY2xhc3NfaW5kZXggIT09IHVuZGVmaW5lZCA/IGFjdGlvbi5jbGFzc19pbmRleCA6IG51bGw7XG4gICAgICAgIG5ld01lc3NhZ2VzLnB1c2goeydvcmlnaW4nOiBhY3Rpb24ub3JpZ2luLCAndGV4dCc6IG0sICdpZCc6IGN1cnJlbnRNYXgsICdjbGFzc19pbmRleCc6IGNsYXNzX2luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiB2YWx1ZU9yTnVsbChhY3Rpb24uc3RhdGUpLCAnYXJnJzogdmFsdWVPck51bGwoYWN0aW9uLmFyZyl9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9sZE1lc3NhZ2VzLmNvbmNhdChuZXdNZXNzYWdlcyk7XG59O1xuXG4vLyBnaXZlbiBhbiBhY3Rpb24sIHVwZGF0ZSBhIGNvbnZlcnNhdGlvbiB3aXRoIG5ldyBtZXNzYWdlc1xuY29uc3QgYXBwZW5kTWVzc2FnZXNDb252byA9IChjb252bywgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gY29udm87XG4gICAgcmV0dXJuIHsgLi4uY29udm8sIG1lc3NhZ2VzOiBhcHBlbmRNZXNzYWdlcyhtZXNzYWdlcywgYWN0aW9uKSwgYXJnczogYWN0aW9uLmFyZ19tYXAgfTtcbn07XG5cbi8vIHJlZHVjZXIgZm9yIGNvbnZlcnNhdGlvbnNcbi8vIFRPRE86IFRoaXMgZGVmaW5pdGlvbiBzdGF0ZSBpcyBwcmV0dHkgbG9uZywgbWVzc3lcbi8vIEFsc28gbm90IGNsZWFyIHdoYXQgXCJhcmdzXCIgcmVwcmVzZW50cyBpbiBhIGNvbnZlcnNhdGlvbiB3aXRoIG11bHRpcGxlIHN1Yi1jb252b3Ncbi8vIE1heWJlIGl0IGlzIG9ubHkgaW1wb3J0YW50IHRvIHJlcHJlc2VudCB0aGUgY29udm8gdGl0bGUsIGlmIHNvIG1heWJlIHRoYXQgc2hvdWxkIGJlIHJlZmFjdG9yZWRcbmNvbnN0IGNvbnZlcnNhdGlvbiA9IChzdGF0ZSA9IHsnaGlzdG9yeSc6IFtdLCAnY3VycmVudENvbnZvJzogeyAnbWVzc2FnZXMnOiBbXSwgJ3RpdGxlJzogbnVsbCwgJ2hpZGRlbic6IGZhbHNlLCAnaWQnOiAwLCAnYXJncyc6IHt9IH0sICdzdGF0ZSc6ICdTVEFSVCd9LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IGhpc3RvcnksIGN1cnJlbnRDb252byB9ID0gc3RhdGU7XG4gICAgbGV0IG5ld0NvbnZvO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfSElTVE9SWTpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5jb252ZXJzYXRpb24uY3VycmVudENvbnZvKTtcbiAgICAgICAgICAgIHJldHVybiB7IGhpc3Rvcnk6IGFjdGlvbi5jb252ZXJzYXRpb24uaGlzdG9yeSwgY3VycmVudENvbnZvOiBhY3Rpb24uY29udmVyc2F0aW9uLmN1cnJlbnRDb252bywgJ3N0YXRlJzogc3RhdGUuc3RhdGUgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5BRERfTUVTU0FHRTpcbiAgICAgICAgICAgIHJldHVybiB7IGhpc3RvcnksIGN1cnJlbnRDb252bzogYXBwZW5kTWVzc2FnZXNDb252byhjdXJyZW50Q29udm8sIGFjdGlvbiksICdzdGF0ZSc6IHN0YXRlLnN0YXRlIH07XG4gICAgICAgIC8vIHRoaXMgaXMgYSBiaXQgY29tcGxleCwgbWF5YmUgbmVlZHMgcmV2aWV3IGZvciBjbGFyaXR5XG4gICAgICAgIGNhc2UgdHlwZXMuQUREX1NFUlZFUl9NRVNTQUdFOlxuICAgICAgICAgICAgaWYgKGFjdGlvbi50ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0NvbnZvID0gYXBwZW5kTWVzc2FnZXNDb252byhjdXJyZW50Q29udm8sIGFjdGlvbik7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLnN0YXRlID09PSAnU1RBUlQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFyZGNvZGluZyBzb21lIGxvZ2ljIGhlcmUgZm9yIHN5bmNpbmcgaGlzdG9yeSB3aXRoIHNlcnZlciBvbiBTVEFSVFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgYWxsb3dzIHNvbWUgY29tbWFuZHMgdG8gb3ZlcndyaXRlIGhpc3RvcnkgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICBsZXQgdGhlSWQgPSBhY3Rpb24uaGlzdG9yeS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbmV3Q29udm8gPSB7Li4ubmV3Q29udm8sIHRpdGxlOiBhY3Rpb24ubGFiZWwsIGlkOiB0aGVJZCB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGhpc3Rvcnk6IGFjdGlvbi5oaXN0b3J5LmNvbmNhdChbbmV3Q29udm9dKSwgJ2N1cnJlbnRDb252byc6IHsgJ21lc3NhZ2VzJzogW10sICd0aXRsZSc6IG51bGwsICdoaWRkZW4nOiBmYWxzZSwgJ2lkJzogbmV3Q29udm8uaWQgKyAxLCAnYXJncyc6IHt9IH0sIHN0YXRlOiAnU1RBUlQnIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5LCBjdXJyZW50Q29udm86IG5ld0NvbnZvLCBzdGF0ZTogYWN0aW9uLnN0YXRlIH07XG4gICAgICAgIGNhc2UgdHlwZXMuSElERV9DT05WRVJTQVRJT046XG4gICAgICAgICAgICAvLyB0aGlzIGlzIHN1cGVyIHZlcmJvc2UganVzdCB0byB1cGRhdGUgYSBzcGVjaWZpYyBjb252byBpbmRleCwgYmV0dGVyIHdheT9cbiAgICAgICAgICAgIGNvbnN0IG5ld0hpc3RvcnkgPSBfLm1hcChoaXN0b3J5LCBjb252ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXQgPSB7Li4uY29udn07XG4gICAgICAgICAgICAgICAgaWYgKGNvbnYuaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgICAgICBvdXQuaGlkZGVuID0gIW91dC5oaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFRPRE86IGFsc28gd2FzdGVmdWwgdG8gZG8gYSBjb3B5IGV2ZXJ5dGltZSwgaW5kZW5kZW50IG9mIHRoZSBpbmRleD9cbiAgICAgICAgICAgIG5ld0NvbnZvID0gey4uLmN1cnJlbnRDb252b307XG4gICAgICAgICAgICBpZiAobmV3Q29udm8uaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIG5ld0NvbnZvLmhpZGRlbiA9ICFuZXdDb252by5oaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBuZXdIaXN0b3J5LCBjdXJyZW50Q29udm86IG5ld0NvbnZvLCBzdGF0ZTogc3RhdGUuc3RhdGV9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbi8vIHZhcmlhYmxlcyByZWR1Y2VyLCBjb25zdHJvbHMgdmFyaWFibGVzIGluIHJpZ2h0IHNpZGViYXJcbmNvbnN0IHZhcmlhYmxlcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1ZBUklBQkxFUzpcbiAgICAgICAgICAgIHJldHVybiBfLm1hcChfLnNvcnRCeShhY3Rpb24udmFyaWFibGVzLCAodikgPT4geyByZXR1cm4gdi5vcmRlcjsgfSkpO1xuICAgICAgICBjYXNlIHR5cGVzLlRPR0dMRV9WQVJJQUJMRV9BVFRSSUJVVEVTOlxuICAgICAgICAgICAgbGV0IG5ld1ZhcmlhYmxlcyA9IF8ubWFwKF8uc29ydEJ5KHN0YXRlLCAodikgPT4geyByZXR1cm4gdi5vcmRlcjsgfSkpLmNvbmNhdChbXSk7XG4gICAgICAgICAgICBpZiAobmV3VmFyaWFibGVzW2FjdGlvbi5pbmRleF0uc2hvdyA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgbmV3VmFyaWFibGVzW2FjdGlvbi5pbmRleF0uc2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3VmFyaWFibGVzW2FjdGlvbi5pbmRleF0uc2hvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3VmFyaWFibGVzO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbi8vIHByZWRpY3Rpb25zIHJlZHVjZXIsIGdvdmVybnMgaGludHMgYWJvdmUgaW5wdXQgYm94XG5jb25zdCBwcmVkaWN0aW9ucyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1BSRURJQ1RJT05TOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wcmVkaWN0aW9ucztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG4vLyBkb2NzIHJlZHVjZXIsIGdvdmVybnMgd2hhdCBpcyBkaXNwbGF5ZWQgaW4gZG9jcyBwYW5lXG5jb25zdCBkb2NzID0gKHN0YXRlID0ge3RpdGxlOiAnJywgZXhhbXBsZXM6IFtdLCBkZXNjcmlwdGlvbjogW10sIHNvdXJjZTonJ30sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfRE9DUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZG9jO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbi8vIGZ1bmN0aW9uIHNlYXJjaCByZWR1Y2VyLCBnb3Zlcm5zIGZ1bmN0aW9uIHNlYXJjaCBpbiB0aGUgcmlnaHQgc2lkZWJhclxuY29uc3QgZnVuY3Rpb25TZWFyY2ggPSAoc3RhdGUgPSB7c2VhcmNoOiAnJywgcmVzdWx0czogW119LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfRlVOQzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNlYXJjaDogYWN0aW9uLnNlYXJjaH07XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfUkVTVUxUUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHJlc3VsdHM6IGFjdGlvbi5yZXN1bHRzfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG4vLyBpbnB1dCByZWR1Y2VyLCBtYW5hZ2VzIGN1cnJlbnQgdXNlciBpbnB1dCBvbiBtYWluIGNvbnZlcnNhdGlvbiBwYW5lXG5jb25zdCBjdXJyZW50SW5wdXQgPSAoc3RhdGUgPSB7J2lucHV0JzogJycsICdjbGFzc0luZGV4JzogbnVsbH0sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIHR5cGVzLlNUT1JFX0NVUlJFTlRfSU5QVVQ6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCAnaW5wdXQnOiBhY3Rpb24uY3VycmVudElucHV0fTtcbiAgICBjYXNlIHR5cGVzLlNUT1JFX0NMQVNTX0lOREVYOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgJ2NsYXNzSW5kZXgnOiBhY3Rpb24uY2xhc3NfaW5kZXh9O1xuICAgIGNhc2UgdHlwZXMuQ0xFQVJfQ0xBU1NfSU5ERVg6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCAnY2xhc3NJbmRleCc6IG51bGx9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbi8vIHJlZHVjZXIgdGhhdCBtYW5hZ2VzIHdoaWNoIHBhbnMgYXJlIG9wZW4gYW5kIGNsb3NlZFxuLy8gVE9ETzogdGhpcyBpcyBhIGJhZCBBUEksIG1ha2UgbW9yZSBjb25zaXN0ZW50XG5jb25zdCBtaW5pbWl6ZVN0YXRlID0gKHN0YXRlPXsnZG9jcyc6IHRydWUsICdjb2RlX2VkaXQnOnRydWV9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5TRVRfRE9DUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsICdkb2NzJzogYWN0aW9uLmRvY3N9O1xuICAgIGNhc2UgdHlwZXMuU0VUX0NPREVfRURJVDpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsICdjb2RlX2VkaXQnOiBhY3Rpb24uY29kZV9lZGl0fTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG4vLyBoZWxwZXIgdG8gY3JlYXRlIGEgbmV3IGFycmF5L2xpc3Qgd2l0aCBkZXNpcmVkIGluZGV4IHJlbW92ZWRcbmNvbnN0IHJlbW92ZUluZGV4ID0gKGFyciwgaSkgPT4ge1xuICBsZXQgZmlyc3RfaGFsZiA9IGFyci5jb25jYXQoW10pLnNsaWNlKDAsIGkpO1xuICBsZXQgc2Vjb25kX2hhbGYgPSBhcnIuY29uY2F0KFtdKS5zbGljZShpKzEsYXJyLmxlbmd0aCk7XG4gIHJldHVybiBmaXJzdF9oYWxmLmNvbmNhdChzZWNvbmRfaGFsZik7XG59XG5cbmNvbnN0IGJsYW5rQ29tbWFuZCA9IHtuYW1lOiAnJywgdGl0bGU6ICcnLCBhcmdzOiBbXSwgZXhhbXBsZXM6IFtdLCBjb21tYW5kOiAnJywgZXhwbGFuYXRpb246ICcnLCB0ZXN0SW5wdXQ6ICcnLCBwcmV2aWV3OicnLCBlcnJvcjogJyd9O1xuXG4vLyByZWR1Y2VyIHRvIG1hbmFnZSB0aGUgY29tbWFuZCBlZGl0aW5nIHBhbmVcbmNvbnN0IGNvbW1hbmRFZGl0UGFuZSA9IChzdGF0ZT17Li4uYmxhbmtDb21tYW5kfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0NPREVfRURJVE9SOlxuICAgICAgbGV0IG5ld19zdGF0ZSA9IHt9O1xuICAgICAgbmV3X3N0YXRlW2FjdGlvbi5uYW1lXSA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLm5ld19zdGF0ZX07XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfQ09NTUFORDpcbiAgICAgIGNvbnNvbGUubG9nKHsuLi5zdGF0ZSwgLi4uYWN0aW9uLmNvbW1hbmR9KTtcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5jb21tYW5kfTtcbiAgICBjYXNlIHR5cGVzLkFERF9DT01NQU5EX0FSRzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGFyZ3M6IHN0YXRlLmFyZ3MuY29uY2F0KFt7J2FyZ19uYW1lJzogJycsICdhcmdfdHlwZSc6ICcnLCAnYXJnX3N0cmluZyc6ICcnfV0pfTtcbiAgICBjYXNlIHR5cGVzLlJFU0VUX0NPTU1BTkQ6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5ibGFua0NvbW1hbmR9O1xuICAgIGNhc2UgdHlwZXMuQUREX0NPTU1BTkRfRVhBTVBMRTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4YW1wbGVzOiBzdGF0ZS5leGFtcGxlcy5jb25jYXQoWycnXSl9O1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0NPTU1BTkRfRVhBTVBMRTpcbiAgICAgIGxldCBuZXdFeGFtcGxlcyA9IHN0YXRlLmV4YW1wbGVzLmNvbmNhdChbXSk7XG4gICAgICBuZXdFeGFtcGxlc1thY3Rpb24uaWRdID0gYWN0aW9uLnRleHQ7XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBleGFtcGxlczogbmV3RXhhbXBsZXN9O1xuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0NPTU1BTkRfQVJHOlxuICAgICAgbGV0IG5ld0FyZ3MgPSBzdGF0ZS5hcmdzLmNvbmNhdChbXSk7XG4gICAgICBuZXdBcmdzW2FjdGlvbi5pZF0gPSBhY3Rpb24udmFsdWVzO1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYXJnczogbmV3QXJnc307XG4gICAgY2FzZSB0eXBlcy5ERUxFVEVfQ09NTUFORF9BUkc6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBhcmdzOiByZW1vdmVJbmRleChzdGF0ZS5hcmdzLCBhY3Rpb24uaWQpfTtcbiAgICBjYXNlIHR5cGVzLkRFTEVURV9DT01NQU5EX0VYQU1QTEU6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBleGFtcGxlczogcmVtb3ZlSW5kZXgoc3RhdGUuZXhhbXBsZXMsIGFjdGlvbi5pZCl9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbi8vIHJlZHVjZXIgdG8gbWFuYWdlIHRoZSBpbnB1dCBoaXN0b3J5IHN0YXRlLCBnb2luZyB0aHJvdWdoIG9sZCBjb21tYW5kcyB3aXRoIHVwL2Rvd24gYXJyb3dcbmNvbnN0IGlucHV0SGlzdG9yeSA9IChzdGF0ZSA9IHsnaGlzdG9yeSc6IFtdLCAnY3VycklkJzogbnVsbCwgJ3Nob3dIaXN0b3J5JzogZmFsc2UgfSwgYWN0aW9uKSA9PiB7XG4gICAgbGV0IG5ld0lkO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5BRERfSU5QVVRfSElTVE9SWTpcbiAgICAgICAgICAgIGNvbnN0IG5ld0hpc3RvcnkgPSBbLi4uc3RhdGUuaGlzdG9yeSwgYWN0aW9uLm1lc3NhZ2VdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaXN0b3J5XCIsIG5ld0hpc3RvcnksIHN0YXRlLmN1cnJJZCwgbmV3SGlzdG9yeS5sZW5ndGgtMSk7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAnaGlzdG9yeSc6IG5ld0hpc3RvcnksICdjdXJySWQnOiBuZXdIaXN0b3J5Lmxlbmd0aC0xfTtcbiAgICAgICAgY2FzZSB0eXBlcy5NT1ZFX0lOUFVUX0hJU1RPUlk6XG4gICAgICAgICAgICBpZiAoc3RhdGUuaGlzdG9yeS5sZW5ndGggPT09IDAgfHwgc3RhdGUuY3VycklkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaXN0b3J5XCIsIHN0YXRlLmN1cnJJZCwgbmV3SWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0lkID0gc3RhdGUuY3VycklkO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5kaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3SWQgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJZCAtPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0lkIDwgKHN0YXRlLmhpc3RvcnkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SWQgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpc3RvcnlcIiwgc3RhdGUuY3VycklkLCBuZXdJZCk7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAnY3VycklkJzogbmV3SWQgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG4vLyBjb21iaW5lIGFsbCB0aGVzZSByZWR1Y2VycyB0b2dldGhlclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNvbnZlcnNhdGlvbixcbiAgICB2YXJpYWJsZXMsXG4gICAgcHJlZGljdGlvbnMsXG4gICAgaW5wdXRIaXN0b3J5LFxuICAgIGN1cnJlbnRJbnB1dCxcbiAgICBkb2NzLFxuICAgIGZ1bmN0aW9uU2VhcmNoLFxuICAgIG1pbmltaXplU3RhdGUsXG4gICAgY29tbWFuZEVkaXRQYW5lLFxuICAgIHJvdXRpbmdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})