import dayjs from 'dayjs';
import { LevelNames } from './type';
import { LevelFactory } from './level';

abstract class Border {
  protected static _instance: Border;
  protected _border: string;
  constructor() {
    this._border = '';
  }
  set border(newBorder: string) {
    this._border = newBorder;
  }
  insert(log: string) {
    if (this._border === '') {
      return log;
    }
    return `${this._border}\n${log}\n${this._border}\n`;
  }
}

class GlobalBorder extends Border {
  static get instance() {
    if (!this._instance) {
      this._instance = new GlobalBorder();
    }
    return this._instance;
  }
}

class TemporaryBorder extends Border {
  static get instance() {
    if (!this._instance) {
      this._instance = new TemporaryBorder();
    }
    return this._instance;
  }
}

export default class Cology {
  private static readonly _level = LevelFactory.instance;
  private static _border = GlobalBorder.instance;
  static log(level: LevelNames[number], message: string) {
    const formatted = this._level.format(level, message);
    const bordered = this._border.insert(formatted);
    console.log(bordered);
  }
  static date() {
    console.log(`[${dayjs().format('YYYY-MM-DDTHH:mm:ss')}]`);
  }
  static setBorder(border: string) {
    this._border.border = border;
  }
  static push() {
    this._border = TemporaryBorder.instance;
  }
  static pop() {
    this._border.border = '';
    this._border = GlobalBorder.instance;
  }
}

module.exports = Cology;
