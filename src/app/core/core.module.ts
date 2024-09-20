import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './service/storage.service';
import { JsonUtilService } from './util/json-util.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './util/app.interceptor';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MinCustomValidator } from '../shared/validators/min-custom.validator';
@NgModule({
  declarations: [],
  providers: [],
  imports: [CommonModule,HttpClientModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        StorageService,
        JsonUtilService,
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptor,
          multi: true,
          deps: [StorageService, AuthService],
        },
      ],
    };
  }
}
