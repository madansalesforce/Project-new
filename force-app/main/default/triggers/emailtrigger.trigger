trigger emailtrigger on Guest_Master__c (after insert) {

    if(Trigger.isAfter==true && Trigger.isInsert==true){

        emailClass.EmailDemo2(Trigger.new);
}
}