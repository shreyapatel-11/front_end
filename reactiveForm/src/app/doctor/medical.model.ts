export class Medical {
    public medical: string;
    public mobile: number;
    public address: string;
    

    constructor(
      medical: string,
      mobile: number,
      address: string
    ) {
      this.medical = medical;
      this.mobile = mobile;
      this.address = address;
    }
};
export class Prescription {
    public name: string;
    public disease: string;
    public status: string;
    public medical: string;
    public time: string;

    constructor(
      name: string,
      disease: string,
      status: string,
      medical: string,
      time: string
    ) {
      this.name = name;
      this.disease = disease;
      this.status = status;
      this.medical = medical;
      this.time = time;  
    }
};
export class Patient {
    public name: string;
    public gender: string;
    public age: number;
    public time: string;
    public mobile: number;

    constructor(
      name: string,
      gender: string,
      age: number,
      time: string,
      mobile: number,
    ) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.time = time;  
      this.mobile = mobile;
    }
};