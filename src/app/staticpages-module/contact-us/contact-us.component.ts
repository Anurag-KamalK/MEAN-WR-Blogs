import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, AfterViewInit {

  @ViewChild(ContactUsComponent) salaryComponent:ContactUsComponent
  @ViewChild("userNameRef") userNameRef:ElementRef;
  
  constructor() { }
  ngAfterViewInit(): void {
    this.userNameRef.nativeElement.focus();
  }

  ngOnInit(): void {
  }

}
