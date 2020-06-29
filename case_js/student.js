class Student {
    constructor(id, fullName, anotherName, birth, gender, address, nationality, heights, avatar) {
        this.id = id;
        this.fullname = fullName;
        this.anothername = anotherName;
        this.birth = birth;
        this.gender = gender;
        this.address = address;
        this.nationality = nationality;
        this.heights = heights;
        this.avatar = avatar;
    }

    setId(id) {
        this.id = id;
    }

    getGender() {
        return parseInt(this.gender) === 0 ? "Nữ" : "Nam";
    }

    getHtml() {
        let str = `<tr>
               <th>${this.id}</th>
               <th>${this.fullname}</th>
               <th>${this.anothername}</th>
               <th>${this.birth}</th>
               <th>${this.getGender()}</th>
               <th>${this.address}</th>
               <th>${this.nationality}</th>
               <th>${this.heights}</th>
               <th>${this.avatar}</th>
               <th>
                    <button id="edit" onclick="editStudent(${this.id});">Edit</button> | <button id="delete" onclick="deleteStudent(${this.id});">Delete</button>
               </th>
               </tr>`;
        return str;
    }
    getStudent(){
        let info = `${this.fullname}<br>${this.anothername}<br>${this.birth}<br>${this.getGender()}<br>${this.address}<br>${this.nationality}<br>${this.heights}<br>`;
        let str = `<div class="student" onclick='imgStudent("${this.avatar}", "${info}")'>
            <img src="${this.avatar}">
            <p>${this.fullname}</p>
        </div>`;
        return str;
    }
    editStudent(fullName, anotherName, birth, gender, address, nationality, heights, avatar){
        this.fullname = fullName;
        this.anothername = anotherName;
        this.birth = birth;
        this.gender = gender;
        this.address = address;
        this.nationality = nationality;
        this.heights = heights;
        this.avatar = avatar;
    }
}