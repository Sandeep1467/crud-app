import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlbumClientService } from '../album-client.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor( private albumClient:AlbumClientService) {}
  albums: any;

  ngOnInit(): void {
    console.log("0");
    this.albumClient.getAll().subscribe(data => {
      this.albums = data;
      console.log("1");
    });
  }
  get totalRows(): number {
    return this.albums.length;
  }
}