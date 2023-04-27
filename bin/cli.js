#!/usr/bin/env node
const { execSync } = require('child_process');
const runCommand = (command) => {
    try {
        execSync(`${command}`, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Failed to execute ${command}`, error);
        return false;
    }
    return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 git@github.com:Eleven-Miles/Erato.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn`;

console.log('Mimicking Erato ...');
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);
console.log(`Installing dependancies for ${repoName} ...`);
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(-1);
console.log(
    `Congratulations, mimic complete. Follow the commands to get started.`
);
console.log(`cd ${repoName} && yarn dev`);
