import { LightningElement } from 'lwc';

import WelcomeLabel from '@salesforce/label/c.WelcomeLabel';
import HomePageLabel from '@salesforce/label/c.HomePageLabel';
import NewClientLabel from '@salesforce/label/c.NewClientLabel';


export default class CustomLabel extends LightningElement {

    labelList =  {WelcomeLabel,HomePageLabel,NewClientLabel};

    NewClientHandler() {

        alert('entry done!!');

    }
}