webpackHotUpdate(0,{

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getHistory = exports.getVariables = exports.setHistory = exports.testFunction = exports.doSearch = exports.updateCommandAPI = exports.updateDocs = exports.updateHint = exports.postMessages = undefined;\n\nvar _isomorphicFetch = __webpack_require__(850);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _index = __webpack_require__(315);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(43);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// This is the primary interface through which the client interacts with the state machine\n// TODO: rename, remove dispatch directly on server JSON\nvar postMessages = exports.postMessages = function postMessages(messages, state, conversation) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/new_loop', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ messages: messages, state: state, conversation: conversation })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        (0, _index2.default)(json); // what is this??\n        (0, _index2.default)((0, _index3.updateVariables)(json.variables));\n    }).then(function () {\n        (0, _index2.default)((0, _index3.updatePredictions)([]));\n    });\n};\n\n// This API supports hint updates given current user input text\nvar updateHint = exports.updateHint = function updateHint(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/hint', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(json);\n        (0, _index2.default)((0, _index3.updatePredictions)(json.predictions));\n    });\n};\n\n// This API supports documenation retrieval based on a clicked-upon function title\n// TODO: use action from actions/index\n// TODO: what is in json.doc?\nvar updateDocs = exports.updateDocs = function updateDocs(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/docs', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(json);\n        (0, _index2.default)({ 'type': 'UPDATE_DOCS', 'doc': json.doc });\n        // dispatch({'type': 'UPDATE_COMMAND', 'command': json.command});\n    });\n};\n\n// This API loads command data into the command edit pane\n// TODO: use action from actions/index\nvar updateCommandAPI = exports.updateCommandAPI = function updateCommandAPI(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/command', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(\"command\", json);\n        (0, _index2.default)({ 'type': 'UPDATE_COMMAND', 'command': json.command });\n    });\n};\n\nvar doSearch = exports.doSearch = function doSearch(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/function_list', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(\"UPDATE RESULTS\", json);\n        (0, _index2.default)({ 'type': 'UPDATE_RESULTS', 'results': json });\n    });\n};\n\nvar testFunction = exports.testFunction = function testFunction(text) {\n    console.log(text);\n    (0, _isomorphicFetch2.default)('http://localhost:8000/function_test', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(text)\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(\"UPDATE Test\", json);\n        (0, _index2.default)((0, _index3.updateCodeEditor)('preview', json.func_string));\n        (0, _index2.default)((0, _index3.updateCodeEditor)('error', json.error.error_string));\n        // dispatch({'type': 'UPDATE_RESULTS', 'results': json});\n    });\n};\n\nvar setHistory = exports.setHistory = function setHistory(messages, state, conversation) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/set_history', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ messages: messages, state: state, conversation: conversation })\n    });\n};\n\nvar getVariables = exports.getVariables = function getVariables() {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/variables', {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        return (0, _index2.default)(json);\n    });\n};\n\nvar getHistory = exports.getHistory = function getHistory() {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/history', {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        return (0, _index2.default)(json);\n    });\n};\n\n// export default { postMessages, getVariables };//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBpX2NhbGxzL3B5dGhvbi5qcz85ZjZlIl0sIm5hbWVzIjpbInBvc3RNZXNzYWdlcyIsIm1lc3NhZ2VzIiwic3RhdGUiLCJjb252ZXJzYXRpb24iLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidmFyaWFibGVzIiwidXBkYXRlSGludCIsInRleHQiLCJjb25zb2xlIiwibG9nIiwicHJlZGljdGlvbnMiLCJ1cGRhdGVEb2NzIiwiZG9jIiwidXBkYXRlQ29tbWFuZEFQSSIsImNvbW1hbmQiLCJkb1NlYXJjaCIsInRlc3RGdW5jdGlvbiIsImZ1bmNfc3RyaW5nIiwiZXJyb3IiLCJlcnJvcl9zdHJpbmciLCJzZXRIaXN0b3J5IiwiZ2V0VmFyaWFibGVzIiwiZ2V0SGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBO0FBQ0E7QUFDTyxJQUFNQSxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFrQkMsWUFBbEIsRUFBbUM7QUFDM0QsbUNBQU0sZ0NBQU4sRUFBd0M7QUFDcENDLGdCQUFRLE1BRDRCO0FBRXBDQyxpQkFBUztBQUNMLDRCQUFnQjtBQURYLFNBRjJCO0FBS3BDQyxjQUFNQyxLQUFLQyxTQUFMLENBQWUsRUFBQ1Asa0JBQUQsRUFBV0MsWUFBWCxFQUFrQkMsMEJBQWxCLEVBQWY7QUFMOEIsS0FBeEMsRUFPQ00sSUFQRCxDQU9NO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsS0FQTixFQVFDRixJQVJELENBUU0sZ0JBQVE7QUFDViw2QkFBU0UsSUFBVCxFQURVLENBQ007QUFDaEIsNkJBQVMsNkJBQWdCQSxLQUFLQyxTQUFyQixDQUFUO0FBQ0gsS0FYRCxFQVlDSCxJQVpELENBWU0sWUFBTTtBQUNSLDZCQUFTLCtCQUFrQixFQUFsQixDQUFUO0FBQ0gsS0FkRDtBQWVILENBaEJNOztBQWtCUDtBQUNPLElBQU1JLGtDQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2hDLG1DQUFNLDRCQUFOLEVBQW9DO0FBQ2hDVixnQkFBUSxNQUR3QjtBQUVoQ0MsaUJBQVM7QUFDTCw0QkFBZ0I7QUFEWCxTQUZ1QjtBQUtoQ0MsY0FBTUMsS0FBS0MsU0FBTCxDQUFlLEVBQUNNLFVBQUQsRUFBZjtBQUwwQixLQUFwQyxFQU9DTCxJQVBELENBT007QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxLQVBOLEVBUUNGLElBUkQsQ0FRTSxnQkFBUTtBQUNWTSxnQkFBUUMsR0FBUixDQUFZTCxJQUFaO0FBQ0EsNkJBQVMsK0JBQWtCQSxLQUFLTSxXQUF2QixDQUFUO0FBQ0gsS0FYRDtBQVlILENBYk07O0FBZVA7QUFDQTtBQUNBO0FBQ08sSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFDSixJQUFELEVBQVU7QUFDaEMsbUNBQU0sNEJBQU4sRUFBb0M7QUFDaENWLGdCQUFRLE1BRHdCO0FBRWhDQyxpQkFBUztBQUNMLDRCQUFnQjtBQURYLFNBRnVCO0FBS2hDQyxjQUFNQyxLQUFLQyxTQUFMLENBQWUsRUFBQ00sVUFBRCxFQUFmO0FBTDBCLEtBQXBDLEVBT0NMLElBUEQsQ0FPTTtBQUFBLGVBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLEtBUE4sRUFRQ0YsSUFSRCxDQVFNLGdCQUFRO0FBQ1ZNLGdCQUFRQyxHQUFSLENBQVlMLElBQVo7QUFDQSw2QkFBUyxFQUFDLFFBQVEsYUFBVCxFQUF3QixPQUFPQSxLQUFLUSxHQUFwQyxFQUFUO0FBQ0E7QUFFSCxLQWJEO0FBY0gsQ0FmTTs7QUFpQlA7QUFDQTtBQUNPLElBQU1DLDhDQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNOLElBQUQsRUFBVTtBQUN0QyxtQ0FBTSwrQkFBTixFQUF1QztBQUNuQ1YsZ0JBQVEsTUFEMkI7QUFFbkNDLGlCQUFTO0FBQ0wsNEJBQWdCO0FBRFgsU0FGMEI7QUFLbkNDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZSxFQUFDTSxVQUFELEVBQWY7QUFMNkIsS0FBdkMsRUFPQ0wsSUFQRCxDQU9NO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsS0FQTixFQVFDRixJQVJELENBUU0sZ0JBQVE7QUFDVk0sZ0JBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCTCxJQUF2QjtBQUNBLDZCQUFTLEVBQUMsUUFBUSxnQkFBVCxFQUEyQixXQUFXQSxLQUFLVSxPQUEzQyxFQUFUO0FBQ0gsS0FYRDtBQVlILENBYk07O0FBZ0JBLElBQU1DLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ1IsSUFBRCxFQUFVO0FBQzlCLG1DQUFNLHFDQUFOLEVBQTZDO0FBQ3pDVixnQkFBUSxNQURpQztBQUV6Q0MsaUJBQVM7QUFDTCw0QkFBZ0I7QUFEWCxTQUZnQztBQUt6Q0MsY0FBTUMsS0FBS0MsU0FBTCxDQUFlLEVBQUNNLFVBQUQsRUFBZjtBQUxtQyxLQUE3QyxFQU9DTCxJQVBELENBT007QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxLQVBOLEVBUUNGLElBUkQsQ0FRTSxnQkFBUTtBQUNWTSxnQkFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCTCxJQUE5QjtBQUNBLDZCQUFTLEVBQUMsUUFBUSxnQkFBVCxFQUEyQixXQUFXQSxJQUF0QyxFQUFUO0FBQ0gsS0FYRDtBQVlILENBYk07O0FBZUEsSUFBTVksc0NBQWUsU0FBZkEsWUFBZSxDQUFDVCxJQUFELEVBQVU7QUFDbENDLFlBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLG1DQUFNLHFDQUFOLEVBQTZDO0FBQ3pDVixnQkFBUSxNQURpQztBQUV6Q0MsaUJBQVM7QUFDTCw0QkFBZ0I7QUFEWCxTQUZnQztBQUt6Q0MsY0FBTUMsS0FBS0MsU0FBTCxDQUFlTSxJQUFmO0FBTG1DLEtBQTdDLEVBT0NMLElBUEQsQ0FPTTtBQUFBLGVBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLEtBUE4sRUFRQ0YsSUFSRCxDQVFNLGdCQUFRO0FBQ1ZNLGdCQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkwsSUFBM0I7QUFDQSw2QkFBUyw4QkFBaUIsU0FBakIsRUFBNEJBLEtBQUthLFdBQWpDLENBQVQ7QUFDQSw2QkFBUyw4QkFBaUIsT0FBakIsRUFBMEJiLEtBQUtjLEtBQUwsQ0FBV0MsWUFBckMsQ0FBVDtBQUNBO0FBQ0gsS0FiRDtBQWNILENBaEJNOztBQWtCQSxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhLENBQUMxQixRQUFELEVBQVdDLEtBQVgsRUFBa0JDLFlBQWxCLEVBQW1DO0FBQ3pELG1DQUFNLG1DQUFOLEVBQTJDO0FBQ3ZDQyxnQkFBUSxNQUQrQjtBQUV2Q0MsaUJBQVM7QUFDTCw0QkFBZ0I7QUFEWCxTQUY4QjtBQUt2Q0MsY0FBTUMsS0FBS0MsU0FBTCxDQUFlLEVBQUNQLGtCQUFELEVBQVdDLFlBQVgsRUFBa0JDLDBCQUFsQixFQUFmO0FBTGlDLEtBQTNDO0FBT0gsQ0FSTTs7QUFVQSxJQUFNeUIsc0NBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQzlCLG1DQUFNLGlDQUFOLEVBQXlDO0FBQ3JDeEIsZ0JBQVEsS0FENkI7QUFFckNDLGlCQUFTO0FBQ0wsNEJBQWdCO0FBRFg7QUFGNEIsS0FBekMsRUFNQ0ksSUFORCxDQU1NO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsS0FOTixFQU9DRixJQVBELENBT007QUFBQSxlQUFRLHFCQUFTRSxJQUFULENBQVI7QUFBQSxLQVBOO0FBUUgsQ0FUTTs7QUFXQSxJQUFNa0Isa0NBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQzVCLG1DQUFNLCtCQUFOLEVBQXVDO0FBQ25DekIsZ0JBQVEsS0FEMkI7QUFFbkNDLGlCQUFTO0FBQ0wsNEJBQWdCO0FBRFg7QUFGMEIsS0FBdkMsRUFNQ0ksSUFORCxDQU1NO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsS0FOTixFQU9DRixJQVBELENBT007QUFBQSxlQUFRLHFCQUFTRSxJQUFULENBQVI7QUFBQSxLQVBOO0FBUUgsQ0FUTTs7QUFXUCIsImZpbGUiOiI2MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBkaXNwYXRjaCBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgeyB1cGRhdGVDb2RlRWRpdG9yLCB1cGRhdGVQcmVkaWN0aW9ucywgdXBkYXRlVmFyaWFibGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5cblxuLy8gVGhpcyBpcyB0aGUgcHJpbWFyeSBpbnRlcmZhY2UgdGhyb3VnaCB3aGljaCB0aGUgY2xpZW50IGludGVyYWN0cyB3aXRoIHRoZSBzdGF0ZSBtYWNoaW5lXG4vLyBUT0RPOiByZW5hbWUsIHJlbW92ZSBkaXNwYXRjaCBkaXJlY3RseSBvbiBzZXJ2ZXIgSlNPTlxuZXhwb3J0IGNvbnN0IHBvc3RNZXNzYWdlcyA9IChtZXNzYWdlcywgc3RhdGUsIGNvbnZlcnNhdGlvbikgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvbmV3X2xvb3AnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHttZXNzYWdlcywgc3RhdGUsIGNvbnZlcnNhdGlvbn0pXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGpzb24pOyAvLyB3aGF0IGlzIHRoaXM/P1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVWYXJpYWJsZXMoanNvbi52YXJpYWJsZXMpKTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlUHJlZGljdGlvbnMoW10pKTtcbiAgICB9KTtcbn07XG5cbi8vIFRoaXMgQVBJIHN1cHBvcnRzIGhpbnQgdXBkYXRlcyBnaXZlbiBjdXJyZW50IHVzZXIgaW5wdXQgdGV4dFxuZXhwb3J0IGNvbnN0IHVwZGF0ZUhpbnQgPSAodGV4dCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvaGludCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3RleHR9KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlUHJlZGljdGlvbnMoanNvbi5wcmVkaWN0aW9ucykpO1xuICAgIH0pO1xufTtcblxuLy8gVGhpcyBBUEkgc3VwcG9ydHMgZG9jdW1lbmF0aW9uIHJldHJpZXZhbCBiYXNlZCBvbiBhIGNsaWNrZWQtdXBvbiBmdW5jdGlvbiB0aXRsZVxuLy8gVE9ETzogdXNlIGFjdGlvbiBmcm9tIGFjdGlvbnMvaW5kZXhcbi8vIFRPRE86IHdoYXQgaXMgaW4ganNvbi5kb2M/XG5leHBvcnQgY29uc3QgdXBkYXRlRG9jcyA9ICh0ZXh0KSA9PiB7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kb2NzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dGV4dH0pXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICBkaXNwYXRjaCh7J3R5cGUnOiAnVVBEQVRFX0RPQ1MnLCAnZG9jJzoganNvbi5kb2N9KTtcbiAgICAgICAgLy8gZGlzcGF0Y2goeyd0eXBlJzogJ1VQREFURV9DT01NQU5EJywgJ2NvbW1hbmQnOiBqc29uLmNvbW1hbmR9KTtcblxuICAgIH0pO1xufTtcblxuLy8gVGhpcyBBUEkgbG9hZHMgY29tbWFuZCBkYXRhIGludG8gdGhlIGNvbW1hbmQgZWRpdCBwYW5lXG4vLyBUT0RPOiB1c2UgYWN0aW9uIGZyb20gYWN0aW9ucy9pbmRleFxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbW1hbmRBUEkgPSAodGV4dCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvY29tbWFuZCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3RleHR9KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbW1hbmRcIiwganNvbik7XG4gICAgICAgIGRpc3BhdGNoKHsndHlwZSc6ICdVUERBVEVfQ09NTUFORCcsICdjb21tYW5kJzoganNvbi5jb21tYW5kfSk7XG4gICAgfSk7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBkb1NlYXJjaCA9ICh0ZXh0KSA9PiB7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mdW5jdGlvbl9saXN0Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dGV4dH0pXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVVBEQVRFIFJFU1VMVFNcIiwganNvbik7XG4gICAgICAgIGRpc3BhdGNoKHsndHlwZSc6ICdVUERBVEVfUkVTVUxUUycsICdyZXN1bHRzJzoganNvbn0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RGdW5jdGlvbiA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc29sZS5sb2codGV4dCk7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mdW5jdGlvbl90ZXN0Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0ZXh0KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVQREFURSBUZXN0XCIsIGpzb24pO1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVDb2RlRWRpdG9yKCdwcmV2aWV3JywganNvbi5mdW5jX3N0cmluZykpO1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVDb2RlRWRpdG9yKCdlcnJvcicsIGpzb24uZXJyb3IuZXJyb3Jfc3RyaW5nKSk7XG4gICAgICAgIC8vIGRpc3BhdGNoKHsndHlwZSc6ICdVUERBVEVfUkVTVUxUUycsICdyZXN1bHRzJzoganNvbn0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEhpc3RvcnkgPSAobWVzc2FnZXMsIHN0YXRlLCBjb252ZXJzYXRpb24pID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3NldF9oaXN0b3J5Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7bWVzc2FnZXMsIHN0YXRlLCBjb252ZXJzYXRpb259KVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFZhcmlhYmxlcyA9ICgpID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3ZhcmlhYmxlcycsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBkaXNwYXRjaChqc29uKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SGlzdG9yeSA9ICgpID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2hpc3RvcnknLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4gZGlzcGF0Y2goanNvbikpO1xufTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgeyBwb3N0TWVzc2FnZXMsIGdldFZhcmlhYmxlcyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2FwaV9jYWxscy9weXRob24uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})