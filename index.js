const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('name');
  console.log(`Hello ${nameToGreet}!`);
  op = `Result = ${nameToGreet}-success`; 
  console.log(op); 
  core.setOutput('status',String(op));
} catch (error) {
  core.setFailed(error.message);
}
