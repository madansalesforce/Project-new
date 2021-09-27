import { LightningElement, track} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import InsertGuestFields from '@salesforce/apex/createGuestRecord.InsertGuestFields';
import InsertHotelFields from '@salesforce/apex/createGuestRecord.InsertHotelFields';
import { NavigationMixin } from 'lightning/navigation';

 export default class GuestEntryForm extends NavigationMixin(LightningElement) {

@track GuestFirstname;
@track GuestLastName;
@track GuestPhone;
@track GuestEmail;
@track GuestHotelCity;
@track GuestHotelStar;
@track error;

HandleCHange(event) {
   
    if(event.target.name!= null && event.target.name == 'FirstName'){
        this.GuestFirstname = event.target.value;
    }
    if(event.target.name!= null && event.target.name =='LastName'){
        this.GuestLastName = event.target.value;
    }
    if(event.target.name!= null && event.target.name == 'Phone'){
        this.GuestPhone = event.target.value;
    }
    if(event.target.name!= null && event.target.name == 'Email'){
        this.GuestEmail = event.target.value;
    }
    if(event.target.name!= null && event.target.name == 'HotelCity'){
        this.GuestHotelCity = event.target.value;
    }
    if(event.target.name!= null && event.target.name == 'HotelStar'){
        this.GuestHotelStar = event.target.value;
    }
}

SubmitAction(){
    
    InsertGuestFields({GFName:this.GuestFirstname,GLName:this.GuestLastName,GPhone:this.GuestPhone,GEmail:this.GuestEmail})
    InsertHotelFields({GHotelCity:this.GuestHotelCity,GHotelType:this.GuestHotelStar})
  

    .then(result =>{
        this.message= result;
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Record created successfully',
            variant:'success'
          });
          this.dispatchEvent(toastEvent);
        })
                
        .catch(error =>{
            this.error = error.message;
            
         });

   /*      this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
                componentName: "c__hotelListingComponent"
            }
        });  */
        
}

cancelAction(){
    this.template.querySelectorAll('lightning-input').forEach(element => {
        if(element.type === 'checkbox' || element.type === 'checkbox-button'){
          element.checked = false;
        }else{
          element.value = null;
        }      
      });
}

}
