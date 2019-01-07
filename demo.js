'use strict';
const fs = require('fs');
const assert = require('assert');
const diff = require('jest-diff');

const { SourceMapSource } = require('webpack-sources');

const sourceContent = fs.readFileSync('compiled.js', 'utf8');
const mapContent = JSON.parse(fs.readFileSync('compiled.js.map', 'utf8'));

const source = new SourceMapSource(sourceContent, 'source.js', mapContent);

const sourceAndMap = source.sourceAndMap({});

console.log('Source diff:');
console.log(diff(source._value, sourceAndMap.source));

console.log('Source map diff:');
console.log(diff(source._sourceMap, sourceAndMap.map));

