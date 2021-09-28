public class emailClass {
   
          public static void EmailDemo2(){
          string Guest_Email__c;
            Messaging.SingleEmailMessage email=new messaging.singleemailmessage();
            string[] to= new string[] {Guest_Email__c};
          
             
            if(Guest_Email__c!=null && Guest_Email__c!='')    
            email.setToaddresses(to);
            email.setsubject('congrats');
            email.sethtmlbody('dear customer');
            
            try{
                Messaging.sendemail(new messaging.singleemailmessage[] {email});
            }catch(exception e){
                system.debug('error message='  +e.getMessage());
            }
            Guest_Email__c='';
            
        }
    }
