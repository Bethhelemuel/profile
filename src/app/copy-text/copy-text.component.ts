import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import ClipboardJS from 'clipboard';

@Component({
  selector: 'app-copy-text',
  templateUrl: './copy-text.component.html',
  styleUrls: ['./copy-text.component.css'],
  standalone: true,  // This tells Angular it's a standalone component
  imports: [CommonModule]  // Import CommonModule here
})
export class CopyTextComponent implements AfterViewInit {

  public showDefaultMessage: boolean = true;
  public showSuccessMessage: boolean = false;
  public clipboardText: string = 'tmphugo@gmail.com';

  constructor() { }

  ngAfterViewInit(): void {
    const $defaultMessage = document.getElementById('default-message');
    const $successMessage = document.getElementById('success-message');

    const clipboard = new ClipboardJS('.copy-button');

    clipboard.on('success', () => {
      this.showSuccess();
      setTimeout(() => {
        this.resetToDefault();
      }, 2000);
    });
  }

  showSuccess() {
    this.showDefaultMessage = false;
    this.showSuccessMessage = true;
  }

  resetToDefault() {
    this.showDefaultMessage = true;
    this.showSuccessMessage = false;
  }
}
