import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { Observable }    from 'rxjs/Observable';


@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent implements OnInit {

  technology: FormGroup;
  vehicle: FormGroup;

  technologyForm:boolean = true;
  vehicleForm:boolean = false;
  houseForm:boolean = false;


  defaultForm = "technology";


  /* technology show */

  pcShow: boolean = false;
  laptopShow: boolean = false;
  mobileShow: boolean = false;


  /* brand show */

  brandShow: boolean = false;


  startDate = new Date();



  technologyArr = [
    "pc",
    "laptop",
    "mobile"
  ];

  pcArr = [
    "asus",
    "hcl",
    "aoc",
    "others"
  ];

  laptopArr = [
    "hp",
    "dell",
    "asus",
    "acer",
    "others"
  ];

  mobileArr = [
    "motorola",
    "samsung",
    "mi",
    "others"
  ];



  constructor(private technologyFb: FormBuilder, private vehicleFb: FormBuilder) { }

  ngOnInit() {

    this.createTechnologyForm();

    this.createVehicleForm();


  }

  createTechnologyForm() {


    this.technology = this.technologyFb.group({

      name: [null, Validators.required],
      technology: ['',Validators.required],
      brand: ['',Validators.required],
      typeOfService: [{value:"Sell", disabled:true}, Validators.required],
      description: ['',Validators.required],
      startDate: ['',Validators.required],
      dateOfPost: [new Date(), Validators.required],
      contact: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      comments: [''],
      fileToUpload: []

    }
    )

  }

  createVehicleForm() {


    this.vehicle = this.vehicleFb.group({

      name: [null, Validators.required],
      technology: ['',Validators.required],
      brand: ['',Validators.required],
      typeOfService: [{value:"Sell", disabled:true}, Validators.required],
      description: ['',Validators.required],
      startDate: ['',Validators.required],
      dateOfPost: [new Date(), Validators.required],
      contact: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      comments: [''],
      fileToUpload: []

    }
    )


  }

  onSubmit() {

    console.log(this.technology);
    console.log(this.vehicle);

  }

  get f() {
    
    // console.log(this.technology.controls);

    return this.technology.controls;

  }


  onChangeForm(data) {

    let formSelect = data.value;

    console.log(formSelect);

    switch(formSelect) {

      case'technology' : this.technologyForm = true;
                            this.vehicleForm = false;
                            this.houseForm = false;
                            this.defaultForm = "technology";
                            console.log(formSelect);
                            break;
      
                            
      case('vehicle') : this.technologyForm = false;
                            this.vehicleForm = true;
                            this.houseForm = false;
                            this.defaultForm = "vehicle";
                            break;

      
      case('house') : this.technologyForm = false;
                            this.vehicleForm = false;
                            this.houseForm = true;
                            this.defaultForm = "house";
                            break;


    }

    console.log("tecno",this.technologyForm,
     "vehicle", this.vehicleForm,
      "house",this.houseForm)

  }


  technologyHandler() {

    let brand = this.technology.get('technology').value;

    console.log(brand);

    switch (brand) {

      case ("pc"): this.pcShow = true;
        break;
      case ("laptop"): this.laptopShow = true;
        break;
      case ("mobile"): this.mobileShow = true;
        break;

    }

  }

  brandHandler() {

    let brand = this.technology.get('brand').value;

    console.log(brand);


    if (brand == "others") {

      this.brandShow = true;

    }
    else{

      this.brandShow = false;

    }

  }

}
