import { LightningElement } from 'lwc';

export default class Timer extends LightningElement {

    showStartBtn = true;
    timeVal = '0  :  0  :  0  :  0';
    timeIntervalInstance;
    totalmilliseconds = 0;

    startHandler(event) {

        this.showStartBtn = false;
        var parentThis = this;
        
        this.timeIntervalInstance = setInterval(function() {

            var hours = Math.floor((parentThis.totalmilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
            var minutes = Math.floor((parentThis.totalmilliseconds % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((parentThis.totalmilliseconds % (1000 * 60)) / (1000));
            var milliseconds = Math.floor((parentThis.totalmilliseconds % (1000)));

            parentThis.timeVal = hours + " : " + minutes + " : " + seconds +  " : " + milliseconds;
            parentThis.totalmilliseconds += 100;
        }
       ,100);        

    }
    
    stopHandler(event) {

        this.showStartBtn= true;
        clearInterval(this.timeIntervalInstance);
    }

    resetHandler(event) {
        this.showStartBtn = true;
        this.timeVal = '0  :  0  :  0  :  0';
        this.totalmilliseconds = 0;
        clearInterval(this.timeIntervalInstance);
    }

}