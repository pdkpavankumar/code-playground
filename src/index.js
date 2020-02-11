import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/theme/blackboard.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


window.javascriptcode = CodeMirror(document.querySelector("#javascript"), {
  value: `function buttonClick() {
  alert('button clicked!');
}`,
  lineNumbers: true,
  mode: "javascript",
  theme: 'blackboard'
});

window.htmlcode = CodeMirror(document.querySelector("#html"), {
  value: `<div class="content">
  Hello World!
  <button onclick="buttonClick()">click Me!</button>
</div>`,
  lineNumbers: true,
  mode: "htmlmixed",
  theme: 'blackboard'
});

window.csscode = CodeMirror(document.querySelector("#css"), {
  value: ".content {\n\tcolor: grey;\n}",
  lineNumbers: true,
  mode: "css",
  theme: 'blackboard'
});

function renderChanges() {
  var css = window.csscode.getValue();
  var html = window.htmlcode.getValue();
  var js = window.javascriptcode.getValue();
  var document = window.document.querySelector("#output").contentDocument;
  var documentContents = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
              ${css}
            </style>
          </head>
          <body>
            ${html}
            <script type="text/javascript">
              ${js}
            </script>
          </body>
          </html>`
  document.open();
  document.write(documentContents);
  document.close();
}

renderChanges();

window.javascriptcode.on('change', renderChanges);
window.csscode.on('change', renderChanges);
window.htmlcode.on('change', renderChanges);