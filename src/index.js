#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const home = require('os').homedir();
const args = require('./arg').parseArgs();

const { node_version: version } = args;
const root = `${home}/.nvm/versions/node/${version}/lib/node_modules`;
const names = fs
  .readdirSync(root)
  .reduce((acc, dir) => {
    if (/^@/.test(dir)) {
      const deepDirs = fs.readdirSync(path.join(root, dir)).map(deepDir => `${dir}/${deepDir}`);
      return acc.concat(deepDirs);
    }
    acc.push(dir);
    return acc;
  }, [])
  .filter(name => /^([a-z]|@)/.test(name));
names.push('-g');
names.unshift('install');

spawn('npm', names, { stdio: 'inherit' });
