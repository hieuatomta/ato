import {Component, ViewEncapsulation} from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadFileService} from '../../../@core/services/UploadFileService.service';

class RequestOptions {
  constructor(param: { headers: Headers }) {

  }

}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-image-management',
  styleUrls: ['./image-management.component.scss'],
  templateUrl: './image-management.component.html',
})
export class ImageManagementComponent {
  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = {percentage: 0};
  selectedFile = null;
  changeImage = false;

  constructor(private uploadService: UploadFileService) {
  }

  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '_File_Saved_Path');
    link.setAttribute('download', 'file_name.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  change($event) {
    this.changeImage = true;
  }

  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          alert('File Successfully Uploaded');
        }
        this.selectedFiles = undefined;
      }
    );
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
