interface CommandLibraryInterface {
    name?: string;
    trigger?: string;
    description?: string;
    execute?: any;
}
export declare function initializeCommand(trigger: string, commands: [CommandLibraryInterface], ...args: any[]): Error | undefined;
export declare class Command {
    constructor(commandObject: CommandLibraryInterface);
}
export declare class CommandLibrary {
    constructor(commands: [CommandLibraryInterface]);
}
export declare class Executer {
    commands: [CommandLibraryInterface] | undefined | null;
    constructor(commands: [CommandLibraryInterface]);
    initializeCommand(trigger: string, ...args: any[]): void;
}
export {};
//# sourceMappingURL=index.d.ts.map