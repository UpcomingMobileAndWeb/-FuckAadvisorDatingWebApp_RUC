import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { ForgotPasswordModalPageRoutingModule } from './forgot-password-modal-routing.module';

import { ForgotPasswordModalPage } from './forgot-password-modal.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TranslateModule, ForgotPasswordModalPageRoutingModule],
  declarations: [ForgotPasswordModalPage]
})
export class ForgotPasswordModalPageModule {}
