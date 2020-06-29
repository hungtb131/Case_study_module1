class StudentManage {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    display() {
        let str = '';
        this.students.forEach((student, index) => {
            index++;
            student.setId(index);
            str += student.getHtml();
        })
        document.getElementById("list-student").innerHTML = this.getTitle() + str;
    }

    getTitle() {
        let title = `<tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Another Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Nationality</th>
                        <th>Height</th>
                        <th>Avatar</th>
                        <th>Act</th>
                    </tr>`
        return title;
    }

    deleteStudent(id) {
        this.students.splice(id - 1, 1);
    }

    displayIndex(students) {
        let str = '';
        students.forEach((student, index) => {
            index++;
            student.setId(index);
            str += student.getStudent();
        })
        document.getElementById("list-student").innerHTML = str;
    }
}

let studentManage = new StudentManage();
