import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Tsc Printer
 * @description
 * This plugin does something
 *
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
   * @return {Promise<any>} null
   */
  @Cordova()
  print(data: string[]): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * This function does something
   * @return {Promise<any>} null
   */
  @Cordova()
  setUsb(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * This function does something
   * @param ip {string} the remote ip
   * @param port {number} the remote port
   * @return {Promise<any>} null
   */
  @Cordova()
  setRemote(ip: string, port: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * This function does something
   * @param ip {string} the remote ip
   * @param port {number} the remote port
   * @return {Promise<any>} null, if validate false, Toast will show message.
   */
  @Cordova()
  validateRemote(ip: string, port: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
