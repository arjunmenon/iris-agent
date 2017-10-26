webpackHotUpdate(0,{

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Actions are typed objects passed to the redux reducer that manages state transformations\n// TODO: potentially break this file into multiple files, one for each reducer action-set\n\nexports.addMessage = addMessage;\nexports.hideConversation = hideConversation;\nexports.updateCodeEditor = updateCodeEditor;\nexports.updateCommand = updateCommand;\nexports.addExample = addExample;\nexports.deleteCommandExample = deleteCommandExample;\nexports.updateCommandExample = updateCommandExample;\nexports.addCommandArg = addCommandArg;\nexports.updateCommandArg = updateCommandArg;\nexports.deleteCommandArg = deleteCommandArg;\nexports.resetCommand = resetCommand;\nexports.storeCurrentInput = storeCurrentInput;\nexports.setDocs = setDocs;\nexports.setCodeEdit = setCodeEdit;\nexports.updateDocEvent = updateDocEvent;\nexports.updateFunc = updateFunc;\nexports.updateResults = updateResults;\nexports.addInputHistory = addInputHistory;\nexports.moveInputHistory = moveInputHistory;\nexports.updatePredictions = updatePredictions;\nexports.updateVariables = updateVariables;\n\nvar _types = __webpack_require__(314);\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// The conversation reducer governs display of main conversational window\n// This window contains multiple conversations, where each conversation is defined by a top-level command call\n\n// Add a message to the current conversation\nfunction addMessage(message) {\n    return _extends({\n        type: types.ADD_MESSAGE\n    }, message);\n}\n\n// Toggle whether a conversation is visible in the chat history\nfunction hideConversation(id) {\n    return {\n        type: types.HIDE_CONVERSATION,\n        id: id\n    };\n}\n\n// -----------------------------------------------\n\n// The commandEditPane reducer governs state for the commmand editing GUI\n\n// Update any field (name) of the command editor with a new value (value)\n// TODO: documentation of command editor state structure outside of reducer?\nfunction updateCodeEditor(name, value) {\n    return {\n        type: types.UPDATE_CODE_EDITOR,\n        value: value,\n        name: name\n    };\n}\n\n// Update the command source field\n// TODO: is this redundant with UpdateCodeEditor\nfunction updateCommand(command) {\n    return {\n        type: types.UPDATE_COMMAND,\n        command: command\n    };\n}\n\n// Append a new example field to the current command editor data\nfunction addExample() {\n    return {\n        type: types.ADD_COMMAND_EXAMPLE\n    };\n}\n\n// Delete a command example by its id (position in example list)\nfunction deleteCommandExample(id) {\n    return {\n        type: types.DELETE_COMMAND_EXAMPLE,\n        id: id\n    };\n}\n\n// Update a command example by its id\nfunction updateCommandExample(id, text) {\n    return {\n        type: types.UPDATE_COMMAND_EXAMPLE,\n        id: id,\n        text: text\n    };\n}\n\n// Append a new argument field to the current command editor data\nfunction addCommandArg() {\n    return {\n        type: types.ADD_COMMAND_ARG\n    };\n}\n\n// Update a command argument by its id (position in list of argument)\n// TODO: make contents of values more explicit\nfunction updateCommandArg(id, values) {\n    return {\n        type: types.UPDATE_COMMAND_ARG,\n        id: id,\n        values: values\n    };\n}\n\n// Delete a command argument by its id\nfunction deleteCommandArg(id) {\n    return {\n        type: types.DELETE_COMMAND_ARG,\n        id: id\n    };\n}\n\n// Clear the command edit pane\nfunction resetCommand() {\n    return {\n        type: types.RESET_COMMAND\n    };\n}\n\n// -----------------------------------------------\n\n// The currentInput reducer keeps track of the user input on the main conversational pane\n\n// Save a new value to the current user input\nfunction storeCurrentInput(input) {\n    return {\n        type: types.STORE_CURRENT_INPUT,\n        currentInput: input\n    };\n}\n\n// -----------------------------------------------\n\n// The minimizeState reducer governs which panes are displayed in the GUI\n\n// Set visibility of docs window\n// TODO: pull out .docs to make explicit, also rename (it is a bool )\nfunction setDocs(message) {\n    return _extends({\n        type: types.SET_DOCS\n    }, message);\n}\n\n// Set visibility of command editor window\n// TODO: pull out .code_edit to make explicit, also rename (it is a bool value)\nfunction setCodeEdit(message) {\n    return _extends({\n        type: types.SET_CODE_EDIT\n    }, message);\n}\n\n// -----------------------------------------------\n\n// The docs reducer governs state for the documentation display window\n\n// Update the docs window with new text\n// TODO: pull out .doc to make explicit, and possible destructure that object as well\nfunction updateDocEvent(message) {\n    return _extends({\n        type: types.UPDATE_DOCS\n    }, message);\n}\n\n// -----------------------------------------------\n\n// The functionSearch reducer governs state for the function search component\n\n// Update the query given changes in user input text\n// TODO: rename and pull out .search to make explicit\nfunction updateFunc(message) {\n    return _extends({\n        type: types.UPDATE_FUNC\n    }, message);\n}\n\n// Update the search box with a list of results\n// TODO: pull out .results to make explicit\nfunction updateResults(message) {\n    return {\n        type: types.UPDATE_RESULTS,\n        results: message\n    };\n}\n\n// -----------------------------------------------\n\n// The inputHistory reducer governs state for the up-arrow, down-arrow command history log\n\n// Add a new message/command to the inputHistory\nfunction addInputHistory(message) {\n    return _extends({\n        type: types.ADD_INPUT_HISTORY\n    }, message);\n}\n// Move the input history in one direction or another (repopulating query box)\n// TODO: message contains .direction, make this explicit\nfunction moveInputHistory(message) {\n    return _extends({\n        type: types.MOVE_INPUT_HISTORY\n    }, message);\n}\n\n// -----------------------------------------------\n\n// the predictions reducer governs the hints that appear above the main user input\n\n// update with new set of hints\nfunction updatePredictions(predictions) {\n    return {\n        type: types.UPDATE_PREDICTIONS,\n        predictions: predictions\n    };\n}\n\n// -----------------------------------------------\n\n// the variables reducer governs the variables that appear right sidebar\n\n// update with new set of hints\nfunction updateVariables(variables) {\n    return {\n        type: types.UPDATE_VARIABLES,\n        variables: variables\n    };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYWN0aW9ucy9pbmRleC5qcz8xMjM2Il0sIm5hbWVzIjpbImFkZE1lc3NhZ2UiLCJoaWRlQ29udmVyc2F0aW9uIiwidXBkYXRlQ29kZUVkaXRvciIsInVwZGF0ZUNvbW1hbmQiLCJhZGRFeGFtcGxlIiwiZGVsZXRlQ29tbWFuZEV4YW1wbGUiLCJ1cGRhdGVDb21tYW5kRXhhbXBsZSIsImFkZENvbW1hbmRBcmciLCJ1cGRhdGVDb21tYW5kQXJnIiwiZGVsZXRlQ29tbWFuZEFyZyIsInJlc2V0Q29tbWFuZCIsInN0b3JlQ3VycmVudElucHV0Iiwic2V0RG9jcyIsInNldENvZGVFZGl0IiwidXBkYXRlRG9jRXZlbnQiLCJ1cGRhdGVGdW5jIiwidXBkYXRlUmVzdWx0cyIsImFkZElucHV0SGlzdG9yeSIsIm1vdmVJbnB1dEhpc3RvcnkiLCJ1cGRhdGVQcmVkaWN0aW9ucyIsInVwZGF0ZVZhcmlhYmxlcyIsInR5cGVzIiwibWVzc2FnZSIsInR5cGUiLCJBRERfTUVTU0FHRSIsImlkIiwiSElERV9DT05WRVJTQVRJT04iLCJuYW1lIiwidmFsdWUiLCJVUERBVEVfQ09ERV9FRElUT1IiLCJjb21tYW5kIiwiVVBEQVRFX0NPTU1BTkQiLCJBRERfQ09NTUFORF9FWEFNUExFIiwiREVMRVRFX0NPTU1BTkRfRVhBTVBMRSIsInRleHQiLCJVUERBVEVfQ09NTUFORF9FWEFNUExFIiwiQUREX0NPTU1BTkRfQVJHIiwidmFsdWVzIiwiVVBEQVRFX0NPTU1BTkRfQVJHIiwiREVMRVRFX0NPTU1BTkRfQVJHIiwiUkVTRVRfQ09NTUFORCIsImlucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsImN1cnJlbnRJbnB1dCIsIlNFVF9ET0NTIiwiU0VUX0NPREVfRURJVCIsIlVQREFURV9ET0NTIiwiVVBEQVRFX0ZVTkMiLCJVUERBVEVfUkVTVUxUUyIsInJlc3VsdHMiLCJBRERfSU5QVVRfSElTVE9SWSIsIk1PVkVfSU5QVVRfSElTVE9SWSIsInByZWRp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My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFjdGlvbnMgYXJlIHR5cGVkIG9iamVjdHMgcGFzc2VkIHRvIHRoZSByZWR1eCByZWR1Y2VyIHRoYXQgbWFuYWdlcyBzdGF0ZSB0cmFuc2Zvcm1hdGlvbnNcbi8vIFRPRE86IHBvdGVudGlhbGx5IGJyZWFrIHRoaXMgZmlsZSBpbnRvIG11bHRpcGxlIGZpbGVzLCBvbmUgZm9yIGVhY2ggcmVkdWNlciBhY3Rpb24tc2V0XG5cbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5cbi8vIFRoZSBjb252ZXJzYXRpb24gcmVkdWNlciBnb3Zlcm5zIGRpc3BsYXkgb2YgbWFpbiBjb252ZXJzYXRpb25hbCB3aW5kb3dcbi8vIFRoaXMgd2luZG93IGNvbnRhaW5zIG11bHRpcGxlIGNvbnZlcnNhdGlvbnMsIHdoZXJlIGVhY2ggY29udmVyc2F0aW9uIGlzIGRlZmluZWQgYnkgYSB0b3AtbGV2ZWwgY29tbWFuZCBjYWxsXG5cbi8vIEFkZCBhIG1lc3NhZ2UgdG8gdGhlIGN1cnJlbnQgY29udmVyc2F0aW9uXG5leHBvcnQgZnVuY3Rpb24gYWRkTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX01FU1NBR0UsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG4vLyBUb2dnbGUgd2hldGhlciBhIGNvbnZlcnNhdGlvbiBpcyB2aXNpYmxlIGluIHRoZSBjaGF0IGhpc3RvcnlcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ29udmVyc2F0aW9uKGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuSElERV9DT05WRVJTQVRJT04sXG4gICAgICAgIGlkXG4gICAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhlIGNvbW1hbmRFZGl0UGFuZSByZWR1Y2VyIGdvdmVybnMgc3RhdGUgZm9yIHRoZSBjb21tbWFuZCBlZGl0aW5nIEdVSVxuXG4vLyBVcGRhdGUgYW55IGZpZWxkIChuYW1lKSBvZiB0aGUgY29tbWFuZCBlZGl0b3Igd2l0aCBhIG5ldyB2YWx1ZSAodmFsdWUpXG4vLyBUT0RPOiBkb2N1bWVudGF0aW9uIG9mIGNvbW1hbmQgZWRpdG9yIHN0YXRlIHN0cnVjdHVyZSBvdXRzaWRlIG9mIHJlZHVjZXI/XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29kZUVkaXRvcihuYW1lLCB2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9DT0RFX0VESVRPUixcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBuYW1lOiBuYW1lXG4gICAgfTtcbn1cblxuLy8gVXBkYXRlIHRoZSBjb21tYW5kIHNvdXJjZSBmaWVsZFxuLy8gVE9ETzogaXMgdGhpcyByZWR1bmRhbnQgd2l0aCBVcGRhdGVDb2RlRWRpdG9yXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29tbWFuZChjb21tYW5kKXtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfQ09NTUFORCxcbiAgICBjb21tYW5kOiBjb21tYW5kXG4gIH1cbn1cblxuLy8gQXBwZW5kIGEgbmV3IGV4YW1wbGUgZmllbGQgdG8gdGhlIGN1cnJlbnQgY29tbWFuZCBlZGl0b3IgZGF0YVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV4YW1wbGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX0NPTU1BTkRfRVhBTVBMRSxcbiAgICB9O1xufVxuXG4vLyBEZWxldGUgYSBjb21tYW5kIGV4YW1wbGUgYnkgaXRzIGlkIChwb3NpdGlvbiBpbiBleGFtcGxlIGxpc3QpXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29tbWFuZEV4YW1wbGUoaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ09NTUFORF9FWEFNUExFLFxuICAgICAgICBpZCxcbiAgICB9O1xufVxuXG4vLyBVcGRhdGUgYSBjb21tYW5kIGV4YW1wbGUgYnkgaXRzIGlkXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29tbWFuZEV4YW1wbGUoaWQsIHRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfQ09NTUFORF9FWEFNUExFLFxuICAgICAgICBpZCxcbiAgICAgICAgdGV4dCxcbiAgICB9O1xufVxuXG4vLyBBcHBlbmQgYSBuZXcgYXJndW1lbnQgZmllbGQgdG8gdGhlIGN1cnJlbnQgY29tbWFuZCBlZGl0b3IgZGF0YVxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbW1hbmRBcmcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX0NPTU1BTkRfQVJHLFxuICAgIH07XG59XG5cbi8vIFVwZGF0ZSBhIGNvbW1hbmQgYXJndW1lbnQgYnkgaXRzIGlkIChwb3NpdGlvbiBpbiBsaXN0IG9mIGFyZ3VtZW50KVxuLy8gVE9ETzogbWFrZSBjb250ZW50cyBvZiB2YWx1ZXMgbW9yZSBleHBsaWNpdFxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbW1hbmRBcmcoaWQsIHZhbHVlcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9DT01NQU5EX0FSRyxcbiAgICAgICAgaWQsXG4gICAgICAgIHZhbHVlczp2YWx1ZXNcbiAgICB9O1xufVxuXG4vLyBEZWxldGUgYSBjb21tYW5kIGFyZ3VtZW50IGJ5IGl0cyBpZFxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNvbW1hbmRBcmcoaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfQ09NTUFORF9BUkcsXG4gICAgICAgIGlkLFxuICAgIH07XG59XG5cbi8vIENsZWFyIHRoZSBjb21tYW5kIGVkaXQgcGFuZVxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q29tbWFuZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5SRVNFVF9DT01NQU5ELFxuICAgIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoZSBjdXJyZW50SW5wdXQgcmVkdWNlciBrZWVwcyB0cmFjayBvZiB0aGUgdXNlciBpbnB1dCBvbiB0aGUgbWFpbiBjb252ZXJzYXRpb25hbCBwYW5lXG5cbi8vIFNhdmUgYSBuZXcgdmFsdWUgdG8gdGhlIGN1cnJlbnQgdXNlciBpbnB1dFxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlQ3VycmVudElucHV0KGlucHV0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuU1RPUkVfQ1VSUkVOVF9JTlBVVCxcbiAgICAgICAgY3VycmVudElucHV0OiBpbnB1dFxuICAgIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoZSBtaW5pbWl6ZVN0YXRlIHJlZHVjZXIgZ292ZXJucyB3aGljaCBwYW5lcyBhcmUgZGlzcGxheWVkIGluIHRoZSBHVUlcblxuLy8gU2V0IHZpc2liaWxpdHkgb2YgZG9jcyB3aW5kb3dcbi8vIFRPRE86IHB1bGwgb3V0IC5kb2NzIHRvIG1ha2UgZXhwbGljaXQsIGFsc28gcmVuYW1lIChpdCBpcyBhIGJvb2wgKVxuZXhwb3J0IGZ1bmN0aW9uIHNldERvY3MobWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlNFVF9ET0NTLFxuICAgICAgICAuLi5tZXNzYWdlXG4gICAgfTtcbn1cblxuLy8gU2V0IHZpc2liaWxpdHkgb2YgY29tbWFuZCBlZGl0b3Igd2luZG93XG4vLyBUT0RPOiBwdWxsIG91dCAuY29kZV9lZGl0IHRvIG1ha2UgZXhwbGljaXQsIGFsc28gcmVuYW1lIChpdCBpcyBhIGJvb2wgdmFsdWUpXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29kZUVkaXQobWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlNFVF9DT0RFX0VESVQsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGUgZG9jcyByZWR1Y2VyIGdvdmVybnMgc3RhdGUgZm9yIHRoZSBkb2N1bWVudGF0aW9uIGRpc3BsYXkgd2luZG93XG5cbi8vIFVwZGF0ZSB0aGUgZG9jcyB3aW5kb3cgd2l0aCBuZXcgdGV4dFxuLy8gVE9ETzogcHVsbCBvdXQgLmRvYyB0byBtYWtlIGV4cGxpY2l0LCBhbmQgcG9zc2libGUgZGVzdHJ1Y3R1cmUgdGhhdCBvYmplY3QgYXMgd2VsbFxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURvY0V2ZW50KG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfRE9DUyxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoZSBmdW5jdGlvblNlYXJjaCByZWR1Y2VyIGdvdmVybnMgc3RhdGUgZm9yIHRoZSBmdW5jdGlvbiBzZWFyY2ggY29tcG9uZW50XG5cbi8vIFVwZGF0ZSB0aGUgcXVlcnkgZ2l2ZW4gY2hhbmdlcyBpbiB1c2VyIGlucHV0IHRleHRcbi8vIFRPRE86IHJlbmFtZSBhbmQgcHVsbCBvdXQgLnNlYXJjaCB0byBtYWtlIGV4cGxpY2l0XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRnVuYyhtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX0ZVTkMsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG4vLyBVcGRhdGUgdGhlIHNlYXJjaCBib3ggd2l0aCBhIGxpc3Qgb2YgcmVzdWx0c1xuLy8gVE9ETzogcHVsbCBvdXQgLnJlc3VsdHMgdG8gbWFrZSBleHBsaWNpdFxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJlc3VsdHMobWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9SRVNVTFRTLFxuICAgICAgICByZXN1bHRzOiBtZXNzYWdlXG4gICAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhlIGlucHV0SGlzdG9yeSByZWR1Y2VyIGdvdmVybnMgc3RhdGUgZm9yIHRoZSB1cC1hcnJvdywgZG93bi1hcnJvdyBjb21tYW5kIGhpc3RvcnkgbG9nXG5cbi8vIEFkZCBhIG5ldyBtZXNzYWdlL2NvbW1hbmQgdG8gdGhlIGlucHV0SGlzdG9yeVxuZXhwb3J0IGZ1bmN0aW9uIGFkZElucHV0SGlzdG9yeShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX0lOUFVUX0hJU1RPUlksXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuLy8gTW92ZSB0aGUgaW5wdXQgaGlzdG9yeSBpbiBvbmUgZGlyZWN0aW9uIG9yIGFub3RoZXIgKHJlcG9wdWxhdGluZyBxdWVyeSBib3gpXG4vLyBUT0RPOiBtZXNzYWdlIGNvbnRhaW5zIC5kaXJlY3Rpb24sIG1ha2UgdGhpcyBleHBsaWNpdFxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVJbnB1dEhpc3RvcnkobWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLk1PVkVfSU5QVVRfSElTVE9SWSxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHRoZSBwcmVkaWN0aW9ucyByZWR1Y2VyIGdvdmVybnMgdGhlIGhpbnRzIHRoYXQgYXBwZWFyIGFib3ZlIHRoZSBtYWluIHVzZXIgaW5wdXRcblxuLy8gdXBkYXRlIHdpdGggbmV3IHNldCBvZiBoaW50c1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByZWRpY3Rpb25zKHByZWRpY3Rpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX1BSRURJQ1RJT05TLFxuICAgICAgICBwcmVkaWN0aW9uczogcHJlZGljdGlvbnNcbiAgICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0aGUgdmFyaWFibGVzIHJlZHVjZXIgZ292ZXJucyB0aGUgdmFyaWFibGVzIHRoYXQgYXBwZWFyIHJpZ2h0IHNpZGViYXJcblxuLy8gdXBkYXRlIHdpdGggbmV3IHNldCBvZiBoaW50c1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZhcmlhYmxlcyh2YXJpYWJsZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfVkFSSUFCTEVTLFxuICAgICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlc1xuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYWN0aW9ucy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})