## devSpeed-commandsjs 

commandsjs allows You to create commands an execute them any were in your  application.
# Table of Content 
- [Quick start](#quickstart)
- [setup Process](#setup-Process)
  - [first step](#Step-1)
  - [Second step](#Step-2)
  - [last Step](#last-step)
- [features](#features)


## quickstart
```js
const { Command,  CommandLibrary,initializeCommand} = require('devSpeed-commandsjs')
// first step create a command 
const myCommand = new Command({
    trigger: "myCommand",
    execute: function(){
        console.log('myCommand has been called')
    }
})
// second step save your command to the CommandLibrary
const commands = new CommandLibrary([myCommand])
// last initialize your commands 
initializeCommand("myCommand", commands) // results myCommand has been called
```

# Setup Process

there are 4 steps to seting setup


## Step 1
> - create a commands folder 
> - in the commands folder create `sayhello.js` file
> - in the `sayhello.js` write this code

```js
 const {Command} = require('devspeed-commandsjs');

 const sayhello = new Command({
    trigger: "sayhello"
    execute: function(){
        console.log('hello')
    }
 })
 module.exports = sayhello;
```

The `Command` class makes it easier to create an command. the `trigger` field trigger the command the `execute` field is the function that is being called when the command is being `initialize`

## Step 2
> create a `commandlibrary` to hold all of our command. create a `index.js` file in your commands folder  

```js
const  {CommandLibrary} = require('devspeed-commandsjs');

const sayhello = require('./sayhello.js')

const commands = new CommandLibrary([
    sayhello,
])

module.exports = commands;
```
The `CommandLibrary` class also makes it easy to store commands.

## last step 
> back in your main file we will need a command `executer` to execute our commands. we will import or commands from our `commands folder` and pass it to the `Executer`, the `Executer` will than check if the trigger matches one of the commands and than call the `execute method` attach.
```js
 const {Executer} = require('devspeed-commandsjs')
 const commands = require('./commands/index')

 const executer = new Executer(commands)

executer.initializeCommand('sayhello') // hello logged to the console 
```
--- 
The `Executer` class have all the methods to execute a command.


# features 

## passing args
Passing args to the execute function. imagine your working on a project and you need to past an arg to the execute function. this feature allow you to do exactly that.


```js
 const executer = new Executer([testCommand])
 const LastArg = 'arg3';

 executer.initializeCommand('Test', 'arg1', 'arg2', lastArg) 
```
when we trigger the command we can send args to the `execute` function 

```js
  const testCommand = new Command({
    name: 'Test command',
    trigger: 'Test',
    execute: function(arg){
         console.log(arg) // ['arg1', arg2, arg3]
    }
  })
```