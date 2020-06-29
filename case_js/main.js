let fullName = document.getElementById("full-name");
let anotherName = document.getElementById("another-name");
let dob = document.getElementById("birth");
let gender = document.getElementsByName('gender');
let address = document.getElementById("address");
let nationality = document.getElementById("nationality");
let height = document.getElementById("height");
let avatar = document.getElementById("avatar");
let studentSelected = -1 ;

function save() {
    let student = new Student(1, fullName.value, anotherName.value, dob.value, getGender(), address.value, nationality.value, height.value, avatar.value);
    studentManage.addStudent(student);
    saveData();
    studentManage.display();
}

function getGender() {
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value;
        }
    }
}

function deleteStudent(index) {
    studentManage.deleteStudent(index);
    saveData();
    studentManage.display();
}

function editStudent(index) {
    let id = index - 1;
    fullName.value = studentManage.students[id].fullname;
    anotherName.value = studentManage.students[id].anothername;
    dob.value = studentManage.students[id].birth;
    address.value = studentManage.students[id].address;
    nationality.value = studentManage.students[id].nationality;
    height.value = studentManage.students[id].height;
    avatar.value = studentManage.students[id].avatar;
    studentSelected = id;
}

function updateStudent() {
    studentManage.students[studentSelected].editStudent(fullName.value, anotherName.value, dob.value, getGender(), address.value, nationality.value, height.value, avatar.value);
    saveData();
    studentManage.display();
}

function saveData() {
    localStorage.setItem("id", JSON.stringify(studentManage.students));
}

function loadData() {
    if (localStorage.getItem("id") !== null) {
        let arr = JSON.parse(localStorage.getItem("id"));
        for (let i = 0; i < arr.length; i++) {
            let student = new Student (arr[i].id, arr[i].fullname, arr[i].anothername, arr[i].birth, arr[i].gender, arr[i].address, arr[i].nationality, arr[i].heights, arr[i].avatar);
            studentManage.addStudent(student);
        }

    }
}

 loadData();
 studentManage.display();
