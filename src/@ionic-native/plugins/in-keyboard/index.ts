/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, CordovaProperty, InstanceProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name In Keyboard
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { InKeyboard } from '@ionic-native/in-keyboard';
 *
 *
 * constructor(private inKeyboard: InKeyboard) { }
 *
 * ...
 *
 *
 * this.inKeyboard.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'InKeyboard',
  plugin: 'cordova-plugin-in-keyboard', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.InKeyboard', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class InKeyboard extends IonicNativePlugin {

  /**
   * hide keyboard
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  hide(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * show keyboard
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  show(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
