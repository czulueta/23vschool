const employees = []

function Employee(name, salary, title, status = "Full-time") {
  this.name = name
  this.salary = salary
  this.title = title
  this.status = status
  // this.printEmployeeForm = function(){
  //   console.log(`Name: ${this.name}, Title: ${this.title}, Salary: ${this.salary}, Status: ${this.status}`)
  // }
}

Employee.prototype.printEmployeeForm = function() {
  console.log(`Name: ${this.name}, Title: ${this.title}, Salary: ${this.salary}, Status: ${this.status}`)
}

const cesar = new Employee("cesar", "100k", "junior web developer")
employees.push(cesar)
const jj = new Employee("JJ", "game developer", "120k", "contract")
employees.push(jj)
const lolo = new Employee("grandpa", "senior web developer", "150k", "part-time")
employees.push(lolo)

console.log(employees)


