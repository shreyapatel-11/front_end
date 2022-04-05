import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Files } from '../model/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadPresenterService {

  // private file:Files;
  private fileUpload:Subject<Files>;
  public fileUpload$:Observable<Files>;
  // files: any;

  constructor() { 
    // this.file={} as Files;
    this.fileUpload=new Subject<Files>();
    this.fileUpload$=new Observable<Files>();
    this.fileUpload$=this.fileUpload.asObservable();
  }

  fileType = ["image/jpeg", "image/png", "application/pdf"]

  uploadFile(file:FileList){
    for (let i = 0; i < file.length; i++) {
      const files = {} as Files;

      let size=Math.round(file[i].size/1024/1024)
      if(size<=2 && this.fileType.includes(file[i].type)){
        
          files.name=file[i].name;
          files.size=size;
          files.type=file[i].type;
          
          const reader = new FileReader();
          reader.readAsDataURL(file[i]);
          console.log(file);
          reader.onload = (event) => {
            files.content = event.target?.result as string;
            this.fileUpload.next(files);
          }
        }
        else if(!this.fileType.includes(file[i].type)){
          alert("Please select proper file")
        }
        else{
          alert("File Size is greater than 2MB");
        }
    }
  }
}
