public with sharing class accountHelper {
  
    @AuraEnabled(cacheable=true)
    public static List<account> getAccountList() {

        List<Account> VarAccList = New List<Account> ();
        VarAccList = [select id,Name,Industry,website,phone from account];
        return VarAccList;
    }
    }

