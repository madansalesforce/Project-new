import { LightningElement,wire } from 'lwc';

import getAccountList from '@salesforce/apex/accountHelper.getAccountList';

export default class LWCTOAPEX extends LightningElement {
    @wire(getAccountList) accounts;
}