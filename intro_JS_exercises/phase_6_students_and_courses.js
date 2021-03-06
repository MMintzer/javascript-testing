// Write classes to model students and the courses they can enroll in.

function Student (fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.fname} ${this.lname}`;
}
//should just return if the student is already enrolled in the course
Student.prototype.enroll(course) = function() {
  if (!this.courses.includes(course)) {
    return;
  }else {
    this.courses.push(course);
    course.addStudent(this);
  }
};
// a hash of with key of departments and value of credits
Student.prototype.courseLoad = function (){
  let load = {};

  this.courses.forEach(course => {
    let dept = course.department;
    load[dept] = load[dept] || 0;
    load[dept] += course.credits;
  })
  return load;
}

// --------------------------COURSES----------------------------//
function Course (name, department, credits, students){
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = []
}
//adds student if not already enrolled in course
Course.prototype.addStudent(student){
  if (!this.students.include(student)){
    this.students.push(student);
    student.enroll(this);
  }
}
