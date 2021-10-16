
interface CommandLibraryInterface {
    name?: string,
    trigger?: string,
    description?: string ,
    execute?: any,
}



export function initializeCommand(trigger: string, commands:[CommandLibraryInterface] ){
    if(!trigger ||!commands){
        return new Error(`cannot
         execute command missing arg trigger and commands array`
        )
    }
    commands.forEach((data)=>{
       if(trigger === data.trigger){
           data.execute()
       }
    })
}



export class Command {
    constructor(commandObject: CommandLibrary){
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
  
    initializeCommand(trigger: string){
       if(!trigger){
           throw new Error('trigger was not found')
       }
        const commands = this.commands
        commands?.forEach(function(data){
            if(data.trigger === trigger){
                data.execute()
            }
        })
    }
    
}

