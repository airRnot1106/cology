import chalk from 'chalk';
import { LevelNames } from './type';

interface Level {
  name: LevelNames[number];
  color: chalk.Chalk;
  format: (log: string) => string;
}

class Debug implements Level {
  readonly name: LevelNames[number];
  readonly color: chalk.Chalk;
  constructor() {
    this.name = 'debug';
    this.color = chalk.white;
  }
  format(log: string) {
    return this.color(log);
  }
}

class Info implements Level {
  readonly name: LevelNames[number];
  readonly color: chalk.Chalk;
  constructor() {
    this.name = 'info';
    this.color = chalk.white;
  }
  format(log: string) {
    return this.color(
      log
        .split('\n')
        .map((message) => '> ' + message)
        .join('\n')
    );
  }
}

class Success implements Level {
  readonly name: LevelNames[number];
  readonly color: chalk.Chalk;
  constructor() {
    this.name = 'info';
    this.color = chalk.greenBright;
  }
  format(log: string) {
    return this.color(
      log
        .split('\n')
        .map((message) => '> ' + message)
        .join('\n')
    );
  }
}

class Warn implements Level {
  readonly name: LevelNames[number];
  readonly color: chalk.Chalk;
  constructor() {
    this.name = 'warn';
    this.color = chalk.yellow;
  }
  format(log: string) {
    return this.color(
      log
        .split('\n')
        .map((message) => chalk.white('[Warn] ') + message)
        .join('\n')
    );
  }
}

class Error implements Level {
  readonly name: LevelNames[number];
  readonly color: chalk.Chalk;
  constructor() {
    this.name = 'error';
    this.color = chalk.redBright;
  }
  format(log: string) {
    return this.color(
      log
        .split('\n')
        .map((message) => chalk.yellow('[ERROR] ') + message)
        .join('\n')
    );
  }
}

class Fatal implements Level {
  readonly name: LevelNames[number];
  readonly color: chalk.Chalk;
  constructor() {
    this.name = 'fatal';
    this.color = chalk.red.bold;
  }
  format(log: string) {
    return this.color(
      log
        .split('\n')
        .map((message) => chalk.magenta('[FATAL_ERROR] ') + message)
        .join('\n')
    );
  }
}

export class LevelFactory {
  private static _instance: LevelFactory;
  private readonly _levelsMap;
  constructor() {
    this._levelsMap = new Map<LevelNames[number], Level>([
      ['debug', new Debug()],
      ['info', new Info()],
      ['success', new Success()],
      ['warn', new Warn()],
      ['error', new Error()],
      ['fatal', new Fatal()],
    ]);
  }
  static get instance() {
    if (!this._instance) {
      this._instance = new LevelFactory();
    }
    return this._instance;
  }
  private getLevel(level: LevelNames[number]) {
    return this._levelsMap.get(level);
  }
  format(level: LevelNames[number], message: string) {
    return this.getLevel(level)?.format(message)!;
  }
}
