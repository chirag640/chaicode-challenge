class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    static getStudentCount() {
        return `Total number of students: ${Student.studentCount}`;
    }
}

const student1 = new Student('Bob', 20, 'S12345');
const student2 = new Student('Alice', 22, 'S67890');
console.log(Student.getStudentCount());
