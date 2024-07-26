class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
}

const student1 = new Student('Bob', 20, 'S12345');
console.log(student1.getStudentId());
