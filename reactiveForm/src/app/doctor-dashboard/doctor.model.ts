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