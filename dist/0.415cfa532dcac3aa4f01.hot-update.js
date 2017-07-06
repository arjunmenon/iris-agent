webpackHotUpdate(0,{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.filterTable = filterTable;\nexports.addMessage = addMessage;\nexports.addInputHistory = addInputHistory;\nexports.moveInputHistory = moveInputHistory;\nexports.hint = hint;\nexports.updateFunc = updateFunc;\nexports.updateResults = updateResults;\nexports.updateDocEvent = updateDocEvent;\nexports.setDocs = setDocs;\nexports.setCodeEdit = setCodeEdit;\nexports.updateCodeEditor = updateCodeEditor;\nexports.addCommandArg = addCommandArg;\nexports.addExample = addExample;\nexports.updateCommandArg = updateCommandArg;\nexports.deleteCommandArg = deleteCommandArg;\nexports.deleteCommandExample = deleteCommandExample;\nexports.storeCurrentInput = storeCurrentInput;\nexports.hideConversation = hideConversation;\n\nvar _types = __webpack_require__(274);\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction filterTable(filter) {\n    return {\n        type: types.FILTER,\n        filter: filter\n    };\n}\n\nfunction addMessage(message) {\n    return _extends({\n        type: types.ADD_MESSAGE\n    }, message);\n}\n\nfunction addInputHistory(message) {\n    return _extends({\n        type: types.ADD_INPUT_HISTORY\n    }, message);\n}\n\nfunction moveInputHistory(message) {\n    return _extends({\n        type: types.MOVE_INPUT_HISTORY\n    }, message);\n}\n\nfunction hint(message) {\n    return _extends({\n        type: types.HINT\n    }, message);\n}\n\nfunction updateFunc(message) {\n    return _extends({\n        type: types.UPDATE_FUNC\n    }, message);\n}\n\nfunction updateResults(message) {\n    return _extends({\n        type: types.UPDATE_RESULTS\n    }, message);\n}\n\nfunction updateDocEvent(message) {\n    return _extends({\n        type: types.UPDATE_DOCS\n    }, message);\n}\n\nfunction setDocs(message) {\n    return _extends({\n        type: types.SET_DOCS\n    }, message);\n}\n\nfunction setCodeEdit(message) {\n    return _extends({\n        type: types.SET_CODE_EDIT\n    }, message);\n}\n\nfunction updateCodeEditor(name, value) {\n    return {\n        type: types.UPDATE_CODE_EDITOR,\n        value: value,\n        name: name\n    };\n}\n\nfunction addCommandArg() {\n    return {\n        type: types.ADD_COMMAND_ARG\n    };\n}\n\nfunction addExample() {\n    return {\n        type: types.ADD_COMMAND_EXAMPLE\n    };\n}\n\nfunction updateCommandArg(id, values) {\n    return {\n        type: types.UPDATE_COMMAND_ARG,\n        id: id,\n        values: values\n    };\n}\n\nfunction deleteCommandArg(id) {\n    return {\n        type: types.DELETE_COMMAND_ARG,\n        id: id\n    };\n}\n\nfunction deleteCommandExample(id) {\n    console.log(\"returning\");\n    return {\n        type: types.DELETE_COMMAND_EXAMPLE,\n        id: id\n    };\n}\n\nfunction storeCurrentInput(input) {\n    return {\n        type: types.STORE_CURRENT_INPUT,\n        currentInput: input\n    };\n}\n\nfunction hideConversation(id) {\n    return {\n        type: types.HIDE_CONVERSATION,\n        id: id\n    };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYWN0aW9ucy9pbmRleC5qcz8xMjM2Il0sIm5hbWVzIjpbImZpbHRlclRhYmxlIiwiYWRkTWVzc2FnZSIsImFkZElucHV0SGlzdG9yeSIsIm1vdmVJbnB1dEhpc3RvcnkiLCJoaW50IiwidXBkYXRlRnVuYyIsInVwZGF0ZVJlc3VsdHMiLCJ1cGRhdGVEb2NFdmVudCIsInNldERvY3MiLCJzZXRDb2RlRWRpdCIsInVwZGF0ZUNvZGVFZGl0b3IiLCJhZGRDb21tYW5kQXJnIiwiYWRkRXhhbXBsZSIsInVwZGF0ZUNvbW1hbmRBcmciLCJkZWxldGVDb21tYW5kQXJnIiwiZGVsZXRlQ29tbWFuZEV4YW1wbGUiLCJzdG9yZUN1cnJlbnRJbnB1dCIsImhpZGVDb252ZXJzYXRpb24iLCJ0eXBlcyIsImZpbHRlciIsInR5cGUiLCJGSUxURVIiLCJtZXNzYWdlIiwiQUREX01FU1NBR0UiLCJBRERfSU5QVVRfSElTVE9SWSIsIk1PVkVfSU5QVVRfSElTVE9SWSIsIkhJTlQiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiVVBEQVRFX0RPQ1MiLCJTRVRfRE9DUyIsIlNFVF9DT0RFX0VESVQiLCJuYW1lIiwidmFsdWUiLCJVUERBVEVfQ09ERV9FRElUT1IiLCJBRERfQ09NTUFORF9BUkciLCJBRERfQ09NTUFORF9FWEFNUExFIiwiaWQiLCJ2YWx1ZXMiLCJVUERBVEVfQ09NTUFORF9BUkciLCJERUxFVEVfQ09NTUFORF9BUkciLCJjb25zb2xlIiwibG9nIiwiREVMRVRFX0NPTU1BTkRfRVhBTVBMRSIsImlucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsImN1cnJlbnRJbnB1dCIsIkhJREVfQ09OVkVSU0FUSU9OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQUVnQkEsVyxHQUFBQSxXO1FBT0FDLFUsR0FBQUEsVTtRQU9BQyxlLEdBQUFBLGU7UUFPQUMsZ0IsR0FBQUEsZ0I7UUFPQUMsSSxHQUFBQSxJO1FBT0FDLFUsR0FBQUEsVTtR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QkFBVCxDQUEwQm9CLEVBQTFCLEVBQThCO0FBQ2pDLFdBQU87QUFDSGpCLGNBQU1GLE1BQU02QixpQkFEVDtBQUVIVjtBQUZHLEtBQVA7QUFJSCIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyVGFibGUoZmlsdGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuRklMVEVSLFxuICAgICAgICBmaWx0ZXJcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX01FU1NBR0UsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSW5wdXRIaXN0b3J5KG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BRERfSU5QVVRfSElTVE9SWSxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlSW5wdXRIaXN0b3J5KG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5NT1ZFX0lOUFVUX0hJU1RPUlksXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGludChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuSElOVCxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGdW5jKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfRlVOQyxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSZXN1bHRzKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfUkVTVUxUUyxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEb2NFdmVudChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX0RPQ1MsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RG9jcyhtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuU0VUX0RPQ1MsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29kZUVkaXQobWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlNFVF9DT0RFX0VESVQsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29kZUVkaXRvcihuYW1lLCB2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9DT0RFX0VESVRPUixcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBuYW1lOiBuYW1lXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbW1hbmRBcmcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX0NPTU1BTkRfQVJHLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFeGFtcGxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkFERF9DT01NQU5EX0VYQU1QTEUsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbW1hbmRBcmcoaWQsIHZhbHVlcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9DT01NQU5EX0FSRyxcbiAgICAgICAgaWQsXG4gICAgICAgIHZhbHVlczp2YWx1ZXNcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29tbWFuZEFyZyhpZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DT01NQU5EX0FSRyxcbiAgICAgICAgaWQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNvbW1hbmRFeGFtcGxlKGlkKSB7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmdcIik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NPTU1BTkRfRVhBTVBMRSxcbiAgICAgICAgaWQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlQ3VycmVudElucHV0KGlucHV0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuU1RPUkVfQ1VSUkVOVF9JTlBVVCxcbiAgICAgICAgY3VycmVudElucHV0OiBpbnB1dFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ29udmVyc2F0aW9uKGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuSElERV9DT05WRVJTQVRJT04sXG4gICAgICAgIGlkXG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hY3Rpb25zL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})