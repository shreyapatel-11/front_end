export class Mentor {
    public id: number;
    public name: string;
    public age: string;
    public gender: string;
  static value: Mentor;
    constructor(
      id: number,
      name: string,
      age: string,
      gender: string
    ) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
};

export class MentorForm {
    
    public name: string;
    public age: string;
    public gender: string;

  }