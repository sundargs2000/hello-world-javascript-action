const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

try {
  await exec.exec('npm install');
  const nameToGreet = core.getInput('name');
  console.log(`Hello ${nameToGreet}!`);
  op = `Result = ${nameToGreet}-success`; 
  console.log(op); 
  core.setOutput('status',String(op));
} catch (error) {
  core.setFailed(error.message);
}
