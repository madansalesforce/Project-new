public with sharing class hotellist {
    
   // @AuraEnabled not enabled
    public list<Hotel_Master__c> Hotellist() {

       list <Hotel_Master__c> H = new list <Hotel_Master__c>();
       H=[select Name, Hotel_City__c from Hotel_Master__c];
       return H;
}
}
