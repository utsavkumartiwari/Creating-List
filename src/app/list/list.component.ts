import { Component, OnInit , Input } from '@angular/core';
import { FormArray, FormBuilder , FormGroup , FormControl , Validator , FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  booking = {
    listingPrice: '',
    propertyType: '',
    streetAddress: '',
    stateProvince:'',
    zipCode: '',
    squareFootage:'',
    noOfBeedrooms:'',
    noOfBathrooms:'',
    description:''
    
    
  };
  
  constructor() { }

  ngOnInit(): void {
  }
saveList(){
  alert("Record Added Successfully")
  let data = [];
  //var temp = JSON.parse(localStorage.getItem('myLSkey') || '{}');
  localStorage.setItem('myLSkey', JSON.stringify(this.booking));

  

  //console.log(this.booking);
  //localStorage.setItem("datas", JSON.stringify(this.booking));
   //let data = localStorage.getItem("datas");
   //console.log(data);
//  localStorage.setItem('events', JSON.stringify([{ listingPrice: "", propertyType: '2020-08-05',
//   streetAddress:"pink",zipCode:"", squareFootage:"",noOfBeedrooms:"", noOfBathrooms:"", description:"",
//    stateProvince:"" },
   
//]));
 //let events = localStorage.getItem('events');
//console.log(events);
  
}

}


