const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('name');
  console.log(`Hello ${nameToGreet}!`);
  core.setOutput(nameToGreet+"-success");
} catch (error) {
  core.setFailed(error.message);
}
