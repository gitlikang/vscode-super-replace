import * as vscode from 'vscode';
import { IProcessReulst } from './interfaces';
import { replaceWorker } from './worker';
import { getReplaceEdits } from './edits';

export async function superReplace(
    editor: vscode.TextEditor,
    scope: vscode.Range[] | vscode.TextDocument,
    find: string,
    replace: string,
    processor: (strings: string[], ...args: string[]) => Promise<IProcessReulst>,
    ...processorArgs: string[]
);
export async function superReplace(
    editor: vscode.TextEditor,
    scope: vscode.Range[] | vscode.TextDocument,
    find: string,
    replace: string,
    func: string,
    ...processorArgs: string[]
);
export async function superReplace(
    editor: vscode.TextEditor,
    scope: vscode.Range[] | vscode.TextDocument,
    find: string,
    replace: string,
    func: any,
    ...para: any[]
) {
    await replaceWorker(editor, scope, find, replace, getReplaceEdits, func, ...para);
}