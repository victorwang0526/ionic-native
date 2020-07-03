import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, CordovaProperty, InstanceProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name Tsc Printer
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { TscPrinter } from '@ionic-native/tsc-printer';
 *
 *
 * constructor(private tscPrinter: TscPrinter) { }
 *
 * ...
 *
 *
 * this.tscPrinter.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'TscPrinter',
  plugin: 'cordova-plugin-tsc-printer', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.TscPrinter', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'http://wangfengxuan@git.industics.cn:7777/wangfengxuan/cordova-plugin-tsc-printer.git', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class TscPrinter extends IonicNativePlugin {
  /**
   * This function does something
   * @param data {string[]} the tsc data
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  print(data: string[]): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
