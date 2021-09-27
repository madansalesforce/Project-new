import { LightningElement, track } from 'lwc';

export default class Validation extends LightningElement {

    validateInfohandler() {

        let searchcmp = this.template.querySelector(".namecmp");
        let datecmp = this.template.querySelector(".datecmp");

        let searchvalue = searchcmp.value;
        let dtvalue = datecmp.value;
        
        if(!searchvalue) {
            searchcmp.setCustomValidity("Name value is required");
        } else {
            searchcmp.setCustomValidity("");
        }
        searchcmp.reportValidity();

        if(!dtvalue) {
            datecmp.setCustomValidity("Date Value is required");
        } else {
            datecmp.setCustomValidity("");
        }
        datecmp.reportValidity();
    }      
}