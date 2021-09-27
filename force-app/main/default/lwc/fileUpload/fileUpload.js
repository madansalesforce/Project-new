import { LightningElement, api } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class FileUpload extends LightningElement {
    @api recordId;
    get acceptedFormats() {
        return ['.pdf','.jpeg'];
    }
          
    handleUploadfinished(event) {

        const uploadedFiles = event.detail.files;
        let uploadedFileNames= '';

        for(let i=0; i< uploadedFiles.length; i++ ) {
            uploadedFileNames += uploadedFiles[i].name +   ',' ;
        }

        this.dispatchEvent(
            new ShowToastEvent({
                title:'success' , 
                message: uploadedFiles.length + 'Files uploaded successfully: ' + uploadedFileNames,
                variant: 'success',
            }),
            );

    }
}