public with sharing class emailClass {
    @AuraEnabled
    public static void sendEmail(List<String> toAddress, String subject, String body) {      
        Messaging.reserveSingleEmailCapacity(1);
        try{
        messaging.SingleEmailMessage mail = new messaging.SingleEmailMessage();
        
        System.debug(toAddress);
        System.debug(body);
        System.debug(subject);
        
                
        mail.setToAddresses(toAddress);
        mail.setReplyTo('no-reply@hotelmj.com');
        mail.setSenderDisplayName('HotelMJ');
        mail.setSubject(subject);
        mail.setHtmlBody(body);
        
        Messaging.sendEmail(new List<messaging.SingleEmailMessage> {mail});
        }
        catch (exception e){
            throw new AuraHandledException(e.getMessage());
            //return null;
        }
    }
}