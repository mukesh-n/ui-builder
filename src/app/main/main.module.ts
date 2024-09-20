import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsSvgComponent } from './svg/settings-svg/settings-svg.component';
import { DesignCanvasComponent } from './pages/design-canvas/design-canvas.component';
import { DesignCanvasToolsetComponent } from './pages/design-canvas-toolset/design-canvas-toolset.component';
import { SafeHtmlPipe } from '../shared/pipes/safehtml.pipe';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    HeaderComponent,
    SettingsSvgComponent,
    DesignCanvasComponent,
    DesignCanvasToolsetComponent,
    SafeHtmlPipe,
  ],
  imports: [SharedModule, MainRoutingModule],
})
export class MainModule {}
