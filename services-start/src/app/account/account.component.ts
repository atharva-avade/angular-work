import { Component, Input } from '@angular/core';
import { AccountsService } from '../account.serive';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 
  constructor(private loggingservice:LoggingService,private Accountservice:AccountsService){};


  onSetTo(status: string) {
    this.Accountservice.updateaccount(this.id,status);
   this.Accountservice.statusUpdate.emit(status);
   // this.loggingservice.logStatusChanged(status)
  
  }
}
