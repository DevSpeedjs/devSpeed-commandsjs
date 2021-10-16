"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Executer = exports.CommandLibrary = exports.Command = exports.initializeCommand = void 0;
function initializeCommand(trigger, commands, ...args) {
    if (!trigger || !commands) {
        return new Error(`cannot
         execute command missing arg trigger and commands array`);
    }
    commands.forEach((data) => {
        if (trigger === data.trigger) {
            return data.execute(args);
        }
    });
}
exports.initializeCommand = initializeCommand;
class Command {
    constructor(commandObject) {
        return Object.assign({}, commandObject);
    }
}
exports.Command = Command;
class CommandLibrary {
    constructor(commands) {
        const commandList = [...commands];
        return commandList;
    }
}
exports.CommandLibrary = CommandLibrary;
class Executer {
    constructor(commands) {
        this.commands = commands;
    }
    initializeCommand(trigger, ...args) {
        if (!trigger) {
            throw new Error('trigger was not found');
        }
        const commands = this.commands;
        commands === null || commands === void 0 ? void 0 : commands.forEach(function (data) {
            if (data.trigger === trigger) {
                return data.execute(args);
            }
        });
    }
}
exports.Executer = Executer;
