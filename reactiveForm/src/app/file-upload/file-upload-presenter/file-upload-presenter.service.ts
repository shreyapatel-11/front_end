import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Files } from '../model/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadPresenterService {

  private file:Files;
  private fileUpload:Subject<Files>;
  public fileUpload$:Observable<Files>;

  constructor() { 
    this.file={} as File;
    this.fileUpload=new Subject<Files>();
    this.fileUpload$=new Observable<Files>();
    this.fileUpload$=this.fileUpload.asObservable();
  }

  uploadFile(file:File){
    let size=Math.round(file.size/1024/1024)
    if(size<=2){
      this.file.name=file.name;
      this.file.size=size;
      this.file.type=file.type;

      this.fileUpload.next(this.file);
    }
    else{
      alert("File Size is greater than 2MB");
    }
  }
}
