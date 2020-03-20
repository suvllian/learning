import React, { Component } from 'react'
import ClipboardJS from 'clipboard'

export default class componentName extends Component {
  constructor(props) {
    super(props)

    var clipboard = new ClipboardJS('.btn');

    clipboard.on('success', function (e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);

      e.clearSelection();
    });
  }
  render() {
    return (
      <div>
        <button class="btn" data-clipboard-text="Just because you can doesn't mean you should — clipboard.js">
          Copy to clipboard
        </button>
      </div>
    )
  }
}
