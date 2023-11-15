import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {server} from './server'

server();


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
