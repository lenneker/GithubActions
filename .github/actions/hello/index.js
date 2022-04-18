const core = require("@actions/core");
const github = require("@actions/github");
var exec = require('child_process').exec;

try{
//throw( new Error("Some error message"));
//const name = core.getInput(`who-to-greet`);
//console.log(`Hello ${name}`);
    
 
  const comidaPrincipal = core.getInput('prato');
  const bebida = core.getInput('bebida');
  console.log(`voce vai comer hoje ${comidaPrincipal} e vai beber ${bebida}!`);
    
    exec(`echo eu quero hoje comer ${comidaPrincipal}`,
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });

const time = new Date();
core.setOutput("time", time.toTimeString());

console.log(JSON.stringify(github, null, '\t'));

//core.setFailed('if fail');
} catch(error){
    core.setFailed(error.message);
}
