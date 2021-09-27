import { LightningElement } from 'lwc';

export default class HospitalPatienceform extends LightningElement {

    booleanflagvalue= false;

    showform(){
        this.booleanflagvalue = true;
    }

    hideform(){
        this.booleanflagvalue = false;
    }
}