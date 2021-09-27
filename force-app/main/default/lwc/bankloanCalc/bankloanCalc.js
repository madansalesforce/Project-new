import { LightningElement } from 'lwc';

export default class BankloanCalc extends LightningElement {
    loanresult;
    principle;
    rateOfInterest;
    noOfYears;

    principlehandler(event) {
        this.principle=parseInt(event.target.value);
    }
    yearHandler(event){
        this.noOfYears=parseInt(event.target.value);
    }
    RoiHandler(event){
        this.rateOfInterest=parseInt(event.target.value);
    }
    CalculationHandler(){
        this.loanresult= 'THe loan Interest is = ' +(this.principle * this.rateOfInterest *this.noOfYears)/100;
    }

}