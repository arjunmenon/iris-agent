webpackHotUpdate(0,{

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(787)();\n// imports\n\n\n// module\nexports.push([module.id, \"button {\\n  border: none;\\n  background-color: #efefef;\\n  margin: 5px 0px;\\n  font-size: .9em;\\n  cursor: pointer;\\n  padding: 5px 10px; }\\n\\nbutton:hover {\\n  opacity: .8; }\\n\\nspan.Resizer.vertical {\\n  border-right: 1px solid #ccc; }\\n\\n.codepane span.Resizer.vertical {\\n  border-left: 1px solid #fff; }\\n\\nspan.Resizer.vertical:hover {\\n  border-right: 4px solid #efefef;\\n  cursor: col-resize; }\\n\\nspan.Resizer.horizontal {\\n  border-bottom: 1px solid #ccc;\\n  border-top: 1px solid #fff; }\\n\\nspan.Resizer.horizontal:hover {\\n  border-bottom: 4px solid #efefef;\\n  border-top: 1px solid #fff;\\n  cursor: col-resize; }\\n\\nspan.Resizer.horizontal.disabled:hover {\\n  border-bottom: 1px solid #ccc;\\n  border-top: 1px solid #fff;\\n  cursor: default; }\\n\\n.Pane {\\n  overflow: scroll; }\\n\\n.secondSplit .Pane2 {\\n  overflow-x: scroll; }\\n\\n.overflow {\\n  overflow: scroll; }\\n\\n.command_edit {\\n  width: 100%;\\n  overflow-x: scroll;\\n  overflow-y: scroll; }\\n  .command_edit input {\\n    background-color: #f6f7f9;\\n    border-radius: 5px;\\n    box-sizing: border-box;\\n    border-style: none;\\n    width: 70%;\\n    padding: 0px 3%;\\n    height: 30px;\\n    margin: 0px 5px;\\n    font-size: 1.1em;\\n    overflow: scroll; }\\n  .command_edit .label {\\n    font-size: 1.1em;\\n    margin: 10px 5px;\\n    font-weight: 400;\\n    color: rgba(0, 0, 0, 0.4); }\\n  .command_edit .testpane input {\\n    width: 75%; }\\n  .command_edit .arg_annotation input {\\n    margin: 2px 0px;\\n    width: 33%; }\\n  .command_edit .arg_annotation input.arg_name {\\n    width: 150px; }\\n  .command_edit .arg_annotation input.arg_string {\\n    width: 400px;\\n    margin-right: 5px; }\\n  .command_edit .errorBox {\\n    padding: 10px;\\n    background-color: #666;\\n    color: #fff;\\n    font-family: monaco;\\n    font-size: .8em; }\\n\\n.newCodeButton {\\n  position: absolute;\\n  opacity: 0.5;\\n  top: 8px;\\n  right: 93px; }\\n\\n.settingsButton {\\n  position: absolute;\\n  opacity: 0.5;\\n  top: 6px;\\n  right: 55px; }\\n\\n.minButton {\\n  position: absolute;\\n  opacity: 0.5;\\n  top: 9px;\\n  right: 20px; }\\n\\n.minButton:hover, .settingsButton:hover, .newCodeButton:hover {\\n  cursor: pointer;\\n  opacity: 1; }\\n\\n.window {\\n  top: 0px; }\\n\\nbody {\\n  font-family: 'helvetica neue', helvetica, sans-serif;\\n  font-size: 14px;\\n  color: #333; }\\n\\n.left_pane {\\n  position: absolute;\\n  top: 0px;\\n  left: 0px;\\n  width: 100%;\\n  height: 100%; }\\n\\n.content_box {\\n  position: absolute;\\n  bottom: 79px;\\n  top: 0px;\\n  left: 0px;\\n  right: 3px;\\n  padding: 20px 0px 0px 10px;\\n  overflow: scroll; }\\n\\n.innerConversation .title {\\n  text-align: center;\\n  color: #ccc;\\n  margin: 20px 0px;\\n  cursor: pointer; }\\n\\n.message {\\n  margin: 2px 0px; }\\n\\n.message.left {\\n  width: 50%;\\n  margin-right: 50%;\\n  text-align: left; }\\n\\n.message.right {\\n  width: 50%;\\n  margin-left: 50%;\\n  text-align: right; }\\n\\n.message pre {\\n  margin: 2px 0px; }\\n\\n.message .bubble {\\n  display: inline-block;\\n  padding: 5px 15px;\\n  border-radius: 25px;\\n  word-wrap: break-word;\\n  white-space: pre-wrap;\\n  text-align: left;\\n  line-height: 1.2em; }\\n\\n.message.right .bubble {\\n  background-color: #458CFF;\\n  color: white; }\\n\\n.message.left .bubble {\\n  background-color: #efefef;\\n  color: black; }\\n\\n.message.left .bubble.data {\\n  width: 100%;\\n  font-size: .9em; }\\n  .message.left .bubble.data pre {\\n    overflow-x: scroll; }\\n\\n.message.left.clickable .bubble {\\n  cursor: pointer; }\\n\\n.message.left.clickable .bubble:hover {\\n  cursor: pointer;\\n  background-color: #ddd; }\\n\\n.message.left .bubble.table {\\n  max-width: 100%;\\n  font-size: .9em;\\n  max-height: 500px;\\n  border: 1px solid #efefef;\\n  background-color: #fff;\\n  overflow-x: scroll;\\n  overflow-y: scroll; }\\n  .message.left .bubble.table .data_table .header {\\n    font-weight: 800;\\n    border-bottom: 1px solid #efefef; }\\n    .message.left .bubble.table .data_table .header span.data_column {\\n      cursor: pointer; }\\n  .message.left .bubble.table .data_table span.data_column {\\n    display: inline-block;\\n    width: 120px;\\n    height: 1.4em;\\n    overflow: hidden;\\n    padding: .2em 0px 0em 10px;\\n    border-left: 1px solid #efefef; }\\n  .message.left .bubble.table .data_table .data_row {\\n    height: 1.4em;\\n    border-bottom: 1px solid #efefef; }\\n\\n.message.left .bubble.code {\\n  width: 100%;\\n  font-size: .9em; }\\n  .message.left .bubble.code pre {\\n    overflow-x: scroll; }\\n\\n.message.left .bubble.explain {\\n  background-color: #efefef;\\n  font-style: italic; }\\n\\n.input_box {\\n  position: absolute;\\n  height: 40px;\\n  bottom: 0px;\\n  left: 0px;\\n  right: 0px; }\\n  .input_box input:focus {\\n    outline: none; }\\n  .input_box .hintButton {\\n    position: absolute;\\n    right: 10px;\\n    top: 10px;\\n    opacity: .5;\\n    cursor: pointer; }\\n  .input_box .hintButton:hover {\\n    opacity: .3; }\\n\\n.prediction_strip {\\n  position: absolute;\\n  height: 18px;\\n  padding: 10px 0px;\\n  bottom: 40px;\\n  left: 0px;\\n  right: 0px;\\n  border-top: 1px solid #ddd;\\n  overflow-x: scroll; }\\n  .prediction_strip span.prediction {\\n    display: inline-block;\\n    cursor: pointer;\\n    margin: 5px 13px 0px 13px;\\n    color: #999; }\\n  .prediction_strip span.prediction.c0 {\\n    font-weight: 800; }\\n\\n.predictions {\\n  height: 100%;\\n  overflow-y: hidden; }\\n\\n.input_box input[type=\\\"text\\\"] {\\n  width: 98%;\\n  /*margin:20px 0px;*/\\n  padding: 10px 1%;\\n  border: none;\\n  border-top: 1px solid #ddd;\\n  font-size: 1em; }\\n\\n.right_pane {\\n  position: absolute;\\n  top: 0px;\\n  right: 0px;\\n  width: 400px;\\n  height: 100%;\\n  border-left: 1px solid #bbb; }\\n\\n.subtitle {\\n  margin-top: 10px;\\n  font-weight: 800;\\n  text-align: center;\\n  font-size: 1.4em; }\\n\\n.func_search {\\n  width: 100%;\\n  padding: 10px 20px;\\n  overflow-y: scroll; }\\n  .func_search .search_box input {\\n    background-color: #f6f7f9;\\n    border-radius: 5px;\\n    box-sizing: border-box;\\n    border-style: none;\\n    width: 94%;\\n    padding: 0px 3%;\\n    height: 30px;\\n    margin-bottom: 10px;\\n    font-size: 1.1em; }\\n  .func_search .search_box input:focus {\\n    outline: none; }\\n  .func_search .results .result {\\n    cursor: pointer;\\n    line-height: 1.5em;\\n    color: #666; }\\n  .func_search .results .result:hover {\\n    background-color: #efefef; }\\n\\n.func_info {\\n  overflow-y: scroll;\\n  padding: 10px 20px; }\\n  .func_info .head {\\n    margin-bottom: 10px;\\n    font-weight: 400;\\n    color: rgba(0, 0, 0, 0.4); }\\n  .func_info .func_title {\\n    font-size: 1.2em;\\n    margin: 10px 0px;\\n    color: rgba(0, 0, 0, 0.4); }\\n  .func_info .func_description {\\n    margin-bottom: 10px;\\n    font-weight: 400; }\\n  .func_info .examples {\\n    margin-bottom: 10px; }\\n    .func_info .examples .example {\\n      font-style: italic;\\n      line-height: 1.4em; }\\n  .func_info .func_code pre {\\n    margin: 0px;\\n    font-size: 0.95em;\\n    border-radius: 5px; }\\n\\n.variableTable {\\n  width: 100%;\\n  margin-top: 0px;\\n  overflow-y: scroll;\\n  font-weight: 400;\\n  padding: 10px 20px; }\\n  .variableTable .title {\\n    font-weight: 400;\\n    color: rgba(0, 0, 0, 0.4);\\n    font-size: 1.1em;\\n    margin: 0px 0px 10px 0px; }\\n  .variableTable ul {\\n    float: left;\\n    width: 100%;\\n    padding: 0;\\n    margin: 0; }\\n  .variableTable li {\\n    width: 100%;\\n    float: left;\\n    clear: both;\\n    text-align: left;\\n    line-height: 1.4em;\\n    color: #888; }\\n    .variableTable li span.half {\\n      float: left;\\n      width: 50%; }\\n    .variableTable li span.three_quarter {\\n      float: left;\\n      width: 75%; }\\n    .variableTable li span.quarter {\\n      float: left;\\n      width: 25%; }\\n    .variableTable li span.name {\\n      font-family: courier;\\n      font-size: .9em;\\n      color: #444; }\\n\\nspan.code {\\n  /*padding:2px 4px;*/\\n  font-family: courier;\\n  font-size: 1em;\\n  font-weight: 800;\\n  /*background-color: #666;*/\\n  /*border-radius: 15px;*/\\n  /*color:white;*/ }\\n\\nli {\\n  float: left;\\n  list-style-type: none;\\n  margin: 2px 0px; }\\n\\nspan.normal_text, span.iris_arg {\\n  margin-right: 4px; }\\n\\nspan.iris_arg {\\n  font-weight: 800; }\\n\", \"\"]);\n\n// exports\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3R5bGVzL21haW4uc2Nzcz8yM2VjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esa0NBQWtDLGlCQUFpQiw4QkFBOEIsb0JBQW9CLG9CQUFvQixvQkFBb0Isc0JBQXNCLEVBQUUsa0JBQWtCLGdCQUFnQixFQUFFLDJCQUEyQixpQ0FBaUMsRUFBRSxxQ0FBcUMsZ0NBQWdDLEVBQUUsaUNBQWlDLG9DQUFvQyx1QkFBdUIsRUFBRSw2QkFBNkIsa0NBQWtDLCtCQUErQixFQUFFLG1DQUFtQyxxQ0FBcUMsK0JBQStCLHVCQUF1QixFQUFFLDRDQUE0QyxrQ0FBa0MsK0JBQStCLG9CQUFvQixFQUFFLFdBQVcscUJBQXFCLEVBQUUseUJBQXlCLHVCQUF1QixFQUFFLGVBQWUscUJBQXFCLEVBQUUsbUJBQW1CLGdCQUFnQix1QkFBdUIsdUJBQXVCLEVBQUUseUJBQXlCLGdDQUFnQyx5QkFBeUIsNkJBQTZCLHlCQUF5QixpQkFBaUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsdUJBQXVCLHVCQUF1QixFQUFFLDBCQUEwQix1QkFBdUIsdUJBQXVCLHVCQUF1QixnQ0FBZ0MsRUFBRSxtQ0FBbUMsaUJBQWlCLEVBQUUseUNBQXlDLHNCQUFzQixpQkFBaUIsRUFBRSxrREFBa0QsbUJBQW1CLEVBQUUsb0RBQW9ELG1CQUFtQix3QkFBd0IsRUFBRSw2QkFBNkIsb0JBQW9CLDZCQUE2QixrQkFBa0IsMEJBQTBCLHNCQUFzQixFQUFFLG9CQUFvQix1QkFBdUIsaUJBQWlCLGFBQWEsZ0JBQWdCLEVBQUUscUJBQXFCLHVCQUF1QixpQkFBaUIsYUFBYSxnQkFBZ0IsRUFBRSxnQkFBZ0IsdUJBQXVCLGlCQUFpQixhQUFhLGdCQUFnQixFQUFFLG1FQUFtRSxvQkFBb0IsZUFBZSxFQUFFLGFBQWEsYUFBYSxFQUFFLFVBQVUseURBQXlELG9CQUFvQixnQkFBZ0IsRUFBRSxnQkFBZ0IsdUJBQXVCLGFBQWEsY0FBYyxnQkFBZ0Is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b0IsSUFBSSxRQUFRLGdCQUFnQiwwQkFBMEIsb0JBQW9CLEVBQUUscUNBQXFDLHNCQUFzQixFQUFFLG1CQUFtQixxQkFBcUIsRUFBRTs7QUFFaDlQIiwiZmlsZSI6IjI1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgbWFyZ2luOiA1cHggMHB4O1xcbiAgZm9udC1zaXplOiAuOWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7IH1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogLjg7IH1cXG5cXG5zcGFuLlJlc2l6ZXIudmVydGljYWwge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYzsgfVxcblxcbi5jb2RlcGFuZSBzcGFuLlJlc2l6ZXIudmVydGljYWwge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmOyB9XFxuXFxuc3Bhbi5SZXNpemVyLnZlcnRpY2FsOmhvdmVyIHtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICNlZmVmZWY7XFxuICBjdXJzb3I6IGNvbC1yZXNpemU7IH1cXG5cXG5zcGFuLlJlc2l6ZXIuaG9yaXpvbnRhbCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmOyB9XFxuXFxuc3Bhbi5SZXNpemVyLmhvcml6b250YWw6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNlZmVmZWY7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcXG4gIGN1cnNvcjogY29sLXJlc2l6ZTsgfVxcblxcbnNwYW4uUmVzaXplci5ob3Jpem9udGFsLmRpc2FibGVkOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4uUGFuZSB7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuLnNlY29uZFNwbGl0IC5QYW5lMiB7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7IH1cXG5cXG4ub3ZlcmZsb3cge1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcblxcbi5jb21tYW5kX2VkaXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cXG4gIC5jb21tYW5kX2VkaXQgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2Y5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcGFkZGluZzogMHB4IDMlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbjogMHB4IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcbiAgLmNvbW1hbmRfZWRpdCAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBtYXJnaW46IDEwcHggNXB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuICAuY29tbWFuZF9lZGl0IC50ZXN0cGFuZSBpbnB1dCB7XFxuICAgIHdpZHRoOiA3NSU7IH1cXG4gIC5jb21tYW5kX2VkaXQgLmFyZ19hbm5vdGF0aW9uIGlucHV0IHtcXG4gICAgbWFyZ2luOiAycHggMHB4O1xcbiAgICB3aWR0aDogMzMlOyB9XFxuICAuY29tbWFuZF9lZGl0IC5hcmdfYW5ub3RhdGlvbiBpbnB1dC5hcmdfbmFtZSB7XFxuICAgIHdpZHRoOiAxNTBweDsgfVxcbiAgLmNvbW1hbmRfZWRpdCAuYXJnX2Fubm90YXRpb24gaW5wdXQuYXJnX3N0cmluZyB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gIC5jb21tYW5kX2VkaXQgLmVycm9yQm94IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25hY287XFxuICAgIGZvbnQtc2l6ZTogLjhlbTsgfVxcblxcbi5uZXdDb2RlQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHRvcDogOHB4O1xcbiAgcmlnaHQ6IDkzcHg7IH1cXG5cXG4uc2V0dGluZ3NCdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdG9wOiA2cHg7XFxuICByaWdodDogNTVweDsgfVxcblxcbi5taW5CdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdG9wOiA5cHg7XFxuICByaWdodDogMjBweDsgfVxcblxcbi5taW5CdXR0b246aG92ZXIsIC5zZXR0aW5nc0J1dHRvbjpob3ZlciwgLm5ld0NvZGVCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi53aW5kb3cge1xcbiAgdG9wOiAwcHg7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhIG5ldWUnLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzMzMzsgfVxcblxcbi5sZWZ0X3BhbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5jb250ZW50X2JveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDc5cHg7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHJpZ2h0OiAzcHg7XFxuICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMTBweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7IH1cXG5cXG4uaW5uZXJDb252ZXJzYXRpb24gLnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgbWFyZ2luOiAyMHB4IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5tZXNzYWdlIHtcXG4gIG1hcmdpbjogMnB4IDBweDsgfVxcblxcbi5tZXNzYWdlLmxlZnQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbi1yaWdodDogNTAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi5tZXNzYWdlLnJpZ2h0IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4ubWVzc2FnZSBwcmUge1xcbiAgbWFyZ2luOiAycHggMHB4OyB9XFxuXFxuLm1lc3NhZ2UgLmJ1YmJsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDEuMmVtOyB9XFxuXFxuLm1lc3NhZ2UucmlnaHQgLmJ1YmJsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU4Q0ZGO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLm1lc3NhZ2UubGVmdCAuYnViYmxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICBjb2xvcjogYmxhY2s7IH1cXG5cXG4ubWVzc2FnZS5sZWZ0IC5idWJibGUuZGF0YSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogLjllbTsgfVxcbiAgLm1lc3NhZ2UubGVmdCAuYnViYmxlLmRhdGEgcHJlIHtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsOyB9XFxuXFxuLm1lc3NhZ2UubGVmdC5jbGlja2FibGUgLmJ1YmJsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubWVzc2FnZS5sZWZ0LmNsaWNrYWJsZSAuYnViYmxlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cXG5cXG4ubWVzc2FnZS5sZWZ0IC5idWJibGUudGFibGUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAuOWVtO1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcbiAgLm1lc3NhZ2UubGVmdCAuYnViYmxlLnRhYmxlIC5kYXRhX3RhYmxlIC5oZWFkZXIge1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjsgfVxcbiAgICAubWVzc2FnZS5sZWZ0IC5idWJibGUudGFibGUgLmRhdGFfdGFibGUgLmhlYWRlciBzcGFuLmRhdGFfY29sdW1uIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5tZXNzYWdlLmxlZnQgLmJ1YmJsZS50YWJsZSAuZGF0YV90YWJsZSBzcGFuLmRhdGFfY29sdW1uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMS40ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IC4yZW0gMHB4IDBlbSAxMHB4O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZmVmZWY7IH1cXG4gIC5tZXNzYWdlLmxlZnQgLmJ1YmJsZS50YWJsZSAuZGF0YV90YWJsZSAuZGF0YV9yb3cge1xcbiAgICBoZWlnaHQ6IDEuNGVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjsgfVxcblxcbi5tZXNzYWdlLmxlZnQgLmJ1YmJsZS5jb2RlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAuOWVtOyB9XFxuICAubWVzc2FnZS5sZWZ0IC5idWJibGUuY29kZSBwcmUge1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7IH1cXG5cXG4ubWVzc2FnZS5sZWZ0IC5idWJibGUuZXhwbGFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLmlucHV0X2JveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3R0b206IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHJpZ2h0OiAwcHg7IH1cXG4gIC5pbnB1dF9ib3ggaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAuaW5wdXRfYm94IC5oaW50QnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTBweDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuaW5wdXRfYm94IC5oaW50QnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogLjM7IH1cXG5cXG4ucHJlZGljdGlvbl9zdHJpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gIGJvdHRvbTogNDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDsgfVxcbiAgLnByZWRpY3Rpb25fc3RyaXAgc3Bhbi5wcmVkaWN0aW9uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogNXB4IDEzcHggMHB4IDEzcHg7XFxuICAgIGNvbG9yOiAjOTk5OyB9XFxuICAucHJlZGljdGlvbl9zdHJpcCBzcGFuLnByZWRpY3Rpb24uYzAge1xcbiAgICBmb250LXdlaWdodDogODAwOyB9XFxuXFxuLnByZWRpY3Rpb25zIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxcblxcbi5pbnB1dF9ib3ggaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHdpZHRoOiA5OCU7XFxuICAvKm1hcmdpbjoyMHB4IDBweDsqL1xcbiAgcGFkZGluZzogMTBweCAxJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xcbiAgZm9udC1zaXplOiAxZW07IH1cXG5cXG4ucmlnaHRfcGFuZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiYmI7IH1cXG5cXG4uc3VidGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNGVtOyB9XFxuXFxuLmZ1bmNfc2VhcmNoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxuICAuZnVuY19zZWFyY2ggLnNlYXJjaF9ib3ggaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2Y5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDk0JTtcXG4gICAgcGFkZGluZzogMHB4IDMlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07IH1cXG4gIC5mdW5jX3NlYXJjaCAuc2VhcmNoX2JveCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIC5mdW5jX3NlYXJjaCAucmVzdWx0cyAucmVzdWx0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIGNvbG9yOiAjNjY2OyB9XFxuICAuZnVuY19zZWFyY2ggLnJlc3VsdHMgLnJlc3VsdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7IH1cXG5cXG4uZnVuY19pbmZvIHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDsgfVxcbiAgLmZ1bmNfaW5mbyAuaGVhZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cXG4gIC5mdW5jX2luZm8gLmZ1bmNfdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuICAuZnVuY19pbmZvIC5mdW5jX2Rlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcbiAgLmZ1bmNfaW5mbyAuZXhhbXBsZXMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAgIC5mdW5jX2luZm8gLmV4YW1wbGVzIC5leGFtcGxlIHtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtOyB9XFxuICAuZnVuY19pbmZvIC5mdW5jX2NvZGUgcHJlIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4udmFyaWFibGVUYWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7IH1cXG4gIC52YXJpYWJsZVRhYmxlIC50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDsgfVxcbiAgLnZhcmlhYmxlVGFibGUgdWwge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgLnZhcmlhYmxlVGFibGUgbGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNsZWFyOiBib3RoO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XFxuICAgIGNvbG9yOiAjODg4OyB9XFxuICAgIC52YXJpYWJsZVRhYmxlIGxpIHNwYW4uaGFsZiB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgd2lkdGg6IDUwJTsgfVxcbiAgICAudmFyaWFibGVUYWJsZSBsaSBzcGFuLnRocmVlX3F1YXJ0ZXIge1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIHdpZHRoOiA3NSU7IH1cXG4gICAgLnZhcmlhYmxlVGFibGUgbGkgc3Bhbi5xdWFydGVyIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICB3aWR0aDogMjUlOyB9XFxuICAgIC52YXJpYWJsZVRhYmxlIGxpIHNwYW4ubmFtZSB7XFxuICAgICAgZm9udC1mYW1pbHk6IGNvdXJpZXI7XFxuICAgICAgZm9udC1zaXplOiAuOWVtO1xcbiAgICAgIGNvbG9yOiAjNDQ0OyB9XFxuXFxuc3Bhbi5jb2RlIHtcXG4gIC8qcGFkZGluZzoycHggNHB4OyovXFxuICBmb250LWZhbWlseTogY291cmllcjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzY2NjsqL1xcbiAgLypib3JkZXItcmFkaXVzOiAxNXB4OyovXFxuICAvKmNvbG9yOndoaXRlOyovIH1cXG5cXG5saSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMnB4IDBweDsgfVxcblxcbnNwYW4ubm9ybWFsX3RleHQsIHNwYW4uaXJpc19hcmcge1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG5cXG5zcGFuLmlyaXNfYXJnIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXI/bW9kdWxlcyZsb2NhbElkZW50TmFtZT1bbmFtZV0tLS1bbG9jYWxdLS0tW2hhc2g6YmFzZTY0OjVdIS4vYXBwL3N0eWxlcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})