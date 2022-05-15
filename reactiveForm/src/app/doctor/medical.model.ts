export class Medical {
    public medical: string;
    public number: number;
    public address: string;
    

    constructor(
      medical: string,
      number: number,
      address: string
    ) {
      this.medical = medical;
      this.number = number;
      this.address = address;
    }
};
export class Prescription {
    public name: string;
    public diseas: string;
    public status: string;
    public medical: string;
    public time: string;

    constructor(
      name: string,
      diseas: string,
      status: string,
      medical: string,
      time: string
    ) {
      this.name = name;
      this.diseas = diseas;
      this.status = status;
      this.medical = medical;
      this.time = time;  
    }
};