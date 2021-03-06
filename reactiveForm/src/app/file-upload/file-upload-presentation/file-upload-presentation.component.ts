import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';
import { Files } from '../model/file.model';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss']
})
export class FileUploadPresentationComponent implements OnInit {

  public file: FileList;
  public startDate:string;
  public endDate:string;

  @Output() fileUpload:EventEmitter<Files>;

  constructor(private fileUploadPrensenter: FileUploadPresenterService) {
    this.fileUpload = new EventEmitter<Files>();
   }

  ngOnInit(): void {
    this.fileUploadPrensenter.fileUpload$.subscribe({
      next: (file) => {
        this.fileUpload.emit(file);
      },
      error: (e) => { console.log(e) }
    })
  }

  readFile(files: any) {
    // console.log(files.files);
    this.file = files.files;
  }
  uploadFile() {
    // debugger
    if (this.file) {
      // console.log(this.file);
      this.fileUploadPrensenter.uploadFile(this.file)
    }
    else {
      alert("No File is Selected")
    }
  }

  readStartDate(input:any){
    this.startDate=input.target.value;
  }

  readEndDate(input:any){
    this.endDate=input.target.value;
  }

}
