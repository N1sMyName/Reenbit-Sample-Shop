import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.sass'],
  viewProviders:[{provide: ControlContainer,useExisting: FormGroupDirective}]
})
export class AdditionalInfoComponent implements OnInit {
  constructor(private fb:FormBuilder,public parent: FormGroupDirective) { }

  ngOnInit(): void {
    
    this.buildForm()
    console.log(this.parent.form) 
  }
  buildForm(){
    this.parent.form.addControl('addInfo',this.fb.control(''))
  }

}
