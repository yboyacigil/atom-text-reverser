'use babel';

import { CompositeDisposable } from 'atom';

export default {

  atomTextReverserView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-text-reverser:reverse': () => this.reverse()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomTextReverserView.destroy();
  },

  reverse() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText();
      let reversed = selection.split('').reverse().join('')
      editor.insertText(reversed)
    }
  }

};
