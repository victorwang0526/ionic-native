import { Injectable } from '@angular/core';
import {Cordova, CordovaProperty, IonicNativePlugin, Plugin} from '@ionic-native/core';

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

  /** Get the tsc print type. 0: USB, 1: REMOTE */
  @CordovaProperty
  type: number;

  /** Get the remote ip. */
  @CordovaProperty
  ip: string;

  /** Get the remote port. */
  @CordovaProperty
  port: number;

  /**
   * print, when setUsb, the printer will print by usb, when setRemote, the printer will print by remote
   * @param data {string[]} the tsc data
   * @return {Promise<any>} null
   */
  @Cordova()
  print(data: string[]): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * print by usb
   * @param data {string[]} the tsc data
   * @return {Promise<any>} null
   */
  @Cordova()
  usbPrint(data: string[]): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * print by remote
   * @param data {string[]} the tsc data
   * @param ip {string} the remote ip
   * @param port {number} the remote port
   * @return {Promise<any>} null
   */
  @Cordova()
  remotePrint(data: string[], ip: string, port: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * set printer use usb default
   * @return {Promise<any>} null
   */
  @Cordova()
  setUsb(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * set printer use remote default
   * @param ip {string} the remote ip
   * @param port {number} the remote port
   * @return {Promise<any>} null
   */
  @Cordova()
  setRemote(ip: string, port: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * test remote printer validation
   * @param ip {string} the remote ip
   * @param port {number} the remote port
   * @return {Promise<any>} null
   */
  @Cordova()
  validateRemote(ip: string, port: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * get config(type/ip/port)
   * @return {Promise<any>} null
   */
  @Cordova()
  getTscPrinter(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
