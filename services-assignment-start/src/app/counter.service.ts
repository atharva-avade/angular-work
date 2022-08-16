export class CounterService{
    activeToInactiveCounter=0;
    inactiveToActiveCounter=0;

    incrementactiveToInactiveCounter(){
        this.activeToInactiveCounter++;
        console.log('Active to Inactive:'+this.activeToInactiveCounter)
    }


    incrementinactiveToActiveCounter(){
        this.inactiveToActiveCounter++;
        console.log('Inactive to Active:'+this.inactiveToActiveCounter)
    }
}
