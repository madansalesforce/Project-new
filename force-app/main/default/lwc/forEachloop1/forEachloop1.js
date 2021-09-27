import { LightningElement } from 'lwc';

export default class ForEachloop1 extends LightningElement {

    CEOList;
    
    showlistHandler() {
        this.CEOList = [{id:1, name : 'Mark', title: 'CEO'},
                        {id:2, name : 'Zoman', title: 'CFO'},
                        {id:3, name : 'Rowan', title: 'COO'}]
    }
    

}