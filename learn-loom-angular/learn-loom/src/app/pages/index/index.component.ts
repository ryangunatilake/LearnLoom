import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzMessageModule, NzMessageService} from 'ng-zorro-antd/message';
import {NzUploadChangeParam, NzUploadModule} from 'ng-zorro-antd/upload';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzIconModule, NzLayoutModule, NzListModule, NzMenuModule, NzMessageModule, NzUploadModule, NzGridModule, NzCardModule, NzDividerModule, NzButtonModule, NzToolTipModule, NzModalModule, NzTabsModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  listOfVideos: any = [];
  isVisible = false;
  notes: any = "";
  questions: any = "";
  flashCards: any = "";
  originalVideoName: any = "";
  tabAnimation: boolean = false;
  selectedVideoId: any;

  constructor(private msg: NzMessageService, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any>('http://127.0.0.1:5000/api/video')
      .subscribe(
        response => {
          debugger;
          console.log('Response:', response);
          this.listOfVideos = response
        },
        error => {
          console.error('Error:', error);
          // Handle error as needed
        }
      );
  }

  handleChange({file, fileList}: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      debugger
      this.listOfVideos.push(file.response)
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  startVideoProcessing(videoId: string, event: any) {
    this.http.post<any>('http://127.0.0.1:5000/api/process-video', {video_uuid: videoId})
      .subscribe(
        response => {
          console.log('Response:', response);
          event.target.disabled = true;
        },
        error => {
          console.error('Error:', error);
          // Handle error as needed
        }
      );
  }

  getVideoIndex(videoId: string, event: any) {
    this.http.post<any>('http://127.0.0.1:5000/api/process', {video_uuid: videoId})
      .subscribe(
        response => {
          console.log('Response:', response);
          if (response.state === 'Processed') {
            event.target.disabled = true;
          } else {
            this.msg.success(`Video is indexing. Please try after sometime.`);
          }
        },
        error => {
          console.error('Error:', error);
          // Handle error as needed
        }
      );
  }

  getVideoResults(videoId: string, event: any) {
    this.http.get<any>('http://127.0.0.1:5000/api/video/' + videoId)
      .subscribe(
        response => {
          console.log('Response:', response);
          this.isVisible = true;
          this.questions = response.question;
          this.notes = response.note;
          this.flashCards = response.flash_card;
          this.originalVideoName = response.original_video_name;
          this.selectedVideoId = videoId;
        },
        error => {
          console.error('Error:', error);
          // Handle error as needed
        }
      );
  }

  downloadPDF(type: string) {
    this.http.get('http://127.0.0.1:5000/api/video/' + this.selectedVideoId + '/pdf?type=' + type, {responseType: 'blob'}).subscribe(response => {
      const blob = new Blob([response], {type: 'application/pdf'});
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.setAttribute('download', this.selectedVideoId + '_' + type + '.pdf');
      document.body.appendChild(downloadLink);
      downloadLink.click();
    }, error => {
      console.error('Error downloading PDF:', error);
    });
  }

  downloadWordDoc(type: string) {
    this.http.get('http://127.0.0.1:5000/api/video/' + this.selectedVideoId + '/word-doc?type=' + type, {responseType: 'blob'}).subscribe(response => {
      const blob = new Blob([response], {type: 'application/docx'});
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.setAttribute('download', this.selectedVideoId + '_' + type + '.docx');
      document.body.appendChild(downloadLink);
      downloadLink.click();
    }, error => {
      console.error('Error downloading PDF:', error);
    });
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
