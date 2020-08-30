import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar:MatSnackBar) { }

  snackConfig : MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition : 'right',
    verticalPosition : 'top'
  }

  success(msg){
    this.snackConfig['panelClass']=['notification','success']
    this.snackBar.open(msg,"",this.snackConfig);
  }
}
