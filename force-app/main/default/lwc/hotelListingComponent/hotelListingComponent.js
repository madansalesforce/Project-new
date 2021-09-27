import { LightningElement,api, track } from 'lwc';
import Hotellist from '@salesforce/apex/hotellist.Hotellist';

export default class HotelListingComponent extends LightningElement {

    @api hotelcity;
    @api hotelstar;
    @track Wifi;
    @track cancellation;
    @track cashpay;

    CHangeHandler1(event){
        if(event.target.name!= null && event.target.name == 'WIFI Availability'){
            this.Wifi = event.target.value;
        }
        if(event.target.name!= null && event.target.name == 'Cancellation Availability'){
            this.cancellation = event.target.value;
        }
        if(event.target.name!= null && event.target.name == 'Cash pay Availability'){
            this.cashpay = event.target.value;
        }
    }
    SelectAction(){
        Hotellist();

    }
}