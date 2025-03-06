import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root', 
  standalone: true,  
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  userName: string = "";
  title: string = " Ajeet AngularJS"; 
  ImageURL = "https://github.com/user-attachments/assets/eccf9b76-5291-493b-a9be-b0ef482bbe92"; 
  url: string = "https://www.bridgelabz.com";
   errorMessage: string = "";  

  

   onInput(event : Event): void { 
    const regex = RegExp ('^[A-Z]{1}[a-zA-Z\\s]{2,}$');  
    if(regex.test(this.userName)){
      this.errorMessage = "";
      return;
    }
     this.errorMessage = "Name is Incorrect";
  }
  
  ngOnInit(): void {
    this.title = " Hello from BridgeLabz";  
  }

  // This function will open the website on image click
  onClick(): void {
    window.open(this.url, "_blank");
  }
}