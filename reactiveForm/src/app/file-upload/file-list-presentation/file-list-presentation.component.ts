import { Component, Input, OnInit } from '@angular/core';
import { Files } from '../model/file.model';

@Component({
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  styleUrls: ['./file-list-presentation.component.scss']
})
export class FileListPresentationComponent implements OnInit {

  @Input() public set fileList(value: Files[] | null) {
    if (value) {
      this._fileList = value;
    }
  }
  public get fileList(): Files[] {
    return this._fileList;
  }

  private _fileList: Files[];
  constructor() { }

  ngOnInit(): void {
  }

}
