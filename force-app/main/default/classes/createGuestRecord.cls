public with sharing class createGuestRecord {

    @AuraEnabled
      public static Hotel_Master__c InsertHotelFields(string GHotelCity, string GHotelType){
      
           Hotel_Master__c HotelObj = new Hotel_Master__c();

           HotelObj.Hotel_Star__c = GHotelType;
           HotelObj.Hotel_City__c = GHotelCity;
                 
           insert HotelObj;
           return HotelObj;
      } 
      @AuraEnabled
      public static Guest_Master__c InsertGuestFields(string GFName, String GLName, string GPhone, string GEmail){
          
            Guest_Master__c GuestObj = new Guest_Master__c();
            GuestObj.Guest_First_Name__c = GFName;
            GuestObj.Guest_Last_Name__c = GLName;
            GuestObj.Guest_Phone__c = GPhone;
            GuestObj.Guest_Email__c = GEmail;
            
            insert GuestObj;
            return GuestObj;
      }
}