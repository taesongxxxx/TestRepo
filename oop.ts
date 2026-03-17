class Employee {
  constructor(
    private _empName : string, 
    private _age : number, 
    private _empJob: string
  ) {}

  get empName() {
    return this._empName;
  }

  get age() {
    return this._age;
  }

  get empJob() {
    return this._empJob;
  }

  set empName(name: string) {
    this._empName = name;
  }

  set age(age: number) {
    this._age = age;
  }

  set empJob(job: string) {
    this._empJob = job;
  }


  printEmp = () : void => {
    console.log(`이름: ${this._empName}, 나이: ${this._age}, 직업: ${this._empJob}`);
  }
}

let employee1 = new Employee('choi', 27, '프론트엔드 개발자');
employee1.empName = 'kim';
employee1.printEmp();
