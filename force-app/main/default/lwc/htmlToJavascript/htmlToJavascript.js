import { LightningElement } from 'lwc';

export default class HtmlToJavascript extends LightningElement {

    letterhandler(event) {

        var ValueWeGotFromHtml = event.target.value;
        alert('You have entered' +' ' +ValueWeGotFromHtml);
    }
}