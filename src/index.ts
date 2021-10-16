
interface CommandLibraryInterface {
    name?: string,
    trigger?: string,
    description?: string ,
    execute?: any,
}



export function initializeCommand(trigger: string, commands:[CommandLibraryInterface], ...args: any[]){
    if(!trigger ||!commands){
        return new Error(`cannot
         execute command missing arg trigger and commands array`
        )
    }
    commands.forEach((data)=>{
       if(trigger === data.trigger){
           return data.execute(args)
       }
    })
}



export class Command {
    constructor(commandObject: CommandLibraryInterface){
        return{
            ...commandObject
        }
    }
}

export class CommandLibrary{
   constructor(commands: [CommandLibraryInterface]){
      const commandList = [...commands]
      return commandList;
   }
}


export class Executer {
    commands: [CommandLibraryInterface] | undefined | null;

    constructor(commands: [CommandLibraryInterface]){
        this.commands = commands;
    }
  
    initializeCommand(trigger: string, ...args: any[]){
       if(!trigger){
           throw new Error('trigger was not found')
       }
        const commands = this.commands
        commands?.forEach(function(data){
            if(data.trigger === trigger){
               return data.execute(args)
            }
        })
    }
    
}

