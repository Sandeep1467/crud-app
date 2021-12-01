import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { title } from 'process';
import { PostClientService } from '../post-client.service';

@Component({
  selector: 'app-post-edit-form',
  templateUrl: './post-edit-form.component.html',
  styleUrls: ['./post-edit-form.component.css']
})
export class PostEditFormComponent implements OnInit {
myReactiveForm!: FormGroup;
  constructor(private route: ActivatedRoute, private postService: PostClientService, private fb: FormBuilder) { }
  id!: number;
  Detail!: any;
  value: any;
  ngOnInit(): void {
    this.myReactiveForm = this.fb.group({
      id: ["", Validators.required],
      userId: ["", Validators.required],
      title: ["", Validators.required],
      body: ["", Validators.required]
    });
    this.route.params.subscribe(param => {
      this.id= param['id'];
      console.log(this.id);
      this.postService.getPostOne(this.id).subscribe(res => {
        console.log(res);
        this.Detail = res;
        this.myReactiveForm.patchValue({
          id: this.Detail.id,
          userId: this.Detail.userId,
          title: this.Detail.title,
          body: this.Detail.body
        });
      });
    });
  }
  reset() {
    this.myReactiveForm.reset();
  }
  save() {
    this.postService.addPost(this.myReactiveForm.value).subscribe(data => {
      this.value = data;
      alert("Post Edited Successfully")
    });
    console.log(this.myReactiveForm.value);
  }
}
