import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostClientService } from '../post-client.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  myReactiveForm!: FormGroup;
  value: any;
  constructor(private postClientService: PostClientService) { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'id': new FormControl(null),
      'userId': new FormControl(null),
      'title': new FormControl(null),
      'body': new FormControl(null)
    });
  }
  addValue(){
    this.postClientService.addPost(this.myReactiveForm.value).subscribe(data => {
      this.value = data;
      alert("Post Added Successfully");
    })
    console.log(this.myReactiveForm.value);
  }
  reset(){
    this.myReactiveForm.reset();
  }
}

