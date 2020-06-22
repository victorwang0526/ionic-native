[NOTE]: use node 11


```shell script


sudo npm install --global gulp-cli
npm install

gulp plugin:create -n HelloWorld


```


```js

import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
@Plugin({
  pluginName: 'HelloWorld',
  plugin: 'io.electrosoft.helloworld', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.HelloWorld', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class HelloWorld extends IonicNativePlugin {

  @Cordova()
  nativeToast(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}

```


then run build

```shell script

npm run build hello-world
```

push the dist/@ionic-native/tsc-printer/* to git

then npm install it.


