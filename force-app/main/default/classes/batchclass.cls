global class batchclass implements Database.Batchable<SObject>,Database.Stateful {

    global Database.QueryLocator start(Database.BatchableContext BC) {
   
        String query ='SELECT description FROM Account';
        return Database.getQueryLocator(query);
        
    }

    global void execute(Database.BatchableContext BC, List<Account> scope) {

      
        for(Account a : scope) {

           if(a.description == 'Not Available')
           a.description = 'Please fill Details, else aaccount will be inactive!';       
           
        }
        update scope;
            
    }

    global void finish(Database.BatchableContext BC) {
        
    }
}