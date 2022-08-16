import { Component } from '@angular/core';
import { AccountsService } from '../account.serive';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers:[LoggingService]
})
export class NewAccountComponent {
 
    constructor(private loggingservice:LoggingService,private accountsService:AccountsService){
      this.accountsService.statusUpdate.subscribe((status:string)=>alert('New Status'+status));
    };

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addaccount(accountName,accountStatus);
   //this.loggingservice.logStatusChanged(accountStatus)
  }
}
