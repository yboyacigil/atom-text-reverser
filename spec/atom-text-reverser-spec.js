'use babel';

import AtomTextReverser from '../lib/atom-text-reverser';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('AtomTextReverser', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('atom-text-reverser');
  });

  describe('when the atom-text-reverser:reverse event is triggered', () => {
    it('reverses selected text in active editor', () => {
      // ...
    });
  });
});
