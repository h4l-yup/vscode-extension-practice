import * as vscode from 'vscode';

export class File extends vscode.TreeItem {

	constructor(
        public readonly label: string,
        public readonly uri: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public command?: vscode.Command
	) {
		super(label, collapsibleState);
	}

	get tooltip(): string {
		return this.label;
	}
    contextValue = 'tag';
}