import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import data from '../assets/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formData: any
  areaCalculated
  form: FormGroup;
  tableForm: FormGroup
  jsonData = data
  isEdit = false
  editButton = 'Add Details'
  id: number
  tabledata = {
    id: null,
    name: null,
    age: null,
  }
  ngOnInit() {
    this.selected()

    this.form = new FormGroup({
      height: new FormControl('', Validators.required),
      width: new FormControl('', Validators.required)
    })
    this.tableForm = new FormGroup({
      name: new FormControl(this.tabledata.name, Validators.required),
      age: new FormControl(this.tabledata.age, Validators.required)
    })
  }

  calculate() {

  }
  recivedData(value) {
    this.areaCalculated = value

  }

  addTable(buttonStatus) {

    if (buttonStatus == 'Add Details') {
      let addJson = {
        id: this.jsonData.length + 1,
        name: this.tableForm.value.name,
        age: this.tableForm.value.age
      }
      data.push(addJson)
      this.tableForm.reset()

    }
    else if (buttonStatus == 'Edit Details') {
      let editJson = {
        id: this.id,
        name: this.tableForm.value.name,
        age: this.tableForm.value.age
      }
      data.splice(this.id - 1, 1, editJson)
      this.isEdit = false

      this.editButton = 'Add Details'
      this.tableForm.reset()
    }
  }
  @ViewChild('nameInput') name: ElementRef
  @ViewChild('ageInput') age: ElementRef
  editTable(data) {

    this.name.nativeElement.value = data.name
    this.age.nativeElement.value = data.age
    this.tabledata.name = data.name
    this.tabledata.age = data.age
    this.tabledata.id = data.id
    this.id = data.id
    this.ngOnInit()

    this.isEdit = !this.isEdit
    if (this.isEdit == true) {
      this.editButton = "Edit Details"
    }
    else if (this.isEdit == false) {
      this.editButton = "Add Details"
    }



  }

  deleteTable(index) {
    data.splice(index, 1)


  }
  selectedData = 0
  viewData = {
    case1: 'Hi case 1 is selected',
    case2: 'Hi case 2 is selected',
    case3: 'Hi case 3 is selected',
    default: 'Hi Default case was selected Please select above drop down to change case'
  }

  viewedData
  selected() {
    switch (Number(this.selectedData)) {
      case 1: {
        this.viewedData = this.viewData.case1
        break;
      }
      case 2: {
        this.viewedData = this.viewData.case2
        break;
      }
      case 3: {
        this.viewedData = this.viewData.case3
        break;
      }
      default: {
        this.viewedData = this.viewData.default
        break;
      }
    }


  }
}
