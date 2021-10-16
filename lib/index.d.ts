interface commandInterface {
    name?: string;
    trigger?: string;
    description?: string;
    execute?: any;
}
export declare function initializeCommand(trigger: string, commands: [commandInterface]): Error | undefined;
export declare class Command {
    constructor(commandObject: commandInterface);
}
export declare class CommandLibrary {
    constructor(commands: [commandInterface]);
}
export declare class Executer {
    commands: [commandInterface] | undefined | null;
    constructor(commands: [commandInterface]);
    initializeCommand(trigger: string): void;
}
export {};
//# sourceMappingURL=index.d.ts.map