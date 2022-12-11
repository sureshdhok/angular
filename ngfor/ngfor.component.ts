import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title: string = 'Top 3 Bollywood movies';

  movies: Movie[] = [
    { title: '3 Idiots', director: 'Rajkumar Hirani', cast: 'Amir khan', releaseDate: 2009},
    { title: 'Lagaan', director: 'Ashutosh', cast: 'Amir khan', releaseDate: 2002},
    { title: 'Tanhaji : The unsung Warrior', director: 'Om raut', cast: 'Ajay Devgan', releaseDate: 2020}

  ]

  title1: string = 'Top 3 singers';
  singers:Singer[]=[
    {name:'Arijit Singh', num_of_songs:162 },
    {name:'Neha Kakkar', num_of_songs:40 },
    {name:'Sonu Nigam', num_of_songs:45 }
  ]


  products:Product[]=[
    {name:'mobile',price:13000,company:'TATA'},
    {name:'shoes',price:1000,company:'Hytech'},
    {name:'TV',price:11000,company:'SONY'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
class Movie {
  title: string;
  director: string;
  cast : string;
  releaseDate: number;
}


class Singer {
   name:string;
   num_of_songs:number;

}


class Product{
name:string;
price:number;
company:string
 
}