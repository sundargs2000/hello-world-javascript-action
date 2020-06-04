const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('name');
  console.log(`Hello ${nameToGreet}!`);
  op = "Result = "+nameToGreet+"-success";
  core.setOutput('status',op);
} catch (error) {
  core.setFailed(error.message);
}
