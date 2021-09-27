trigger TrainTrigger on Training_deal__c (Before insert, Before update){
    if(trigger.isbefore ==true && trigger.isinsert ==true){
        Trainingdeal.TrainFunction(trigger.new);
    }
      if(trigger.isbefore ==true && trigger.isupdate ==true){
        Trainingdeal.TrainFunction(trigger.new);
    }  
}