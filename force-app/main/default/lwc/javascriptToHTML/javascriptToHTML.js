import { LightningElement } from 'lwc';

export default class JavascriptToHTML extends LightningElement {

    fullname = 'Madan';

    changeNameHandler(event)
    {
        this.fullname= 'Harry potter123';
    }


}