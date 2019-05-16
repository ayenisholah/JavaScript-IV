class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(subject){
        return `${this.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(function(element) {
            console.log(element);
        });
    }
    prAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @${channel} standup time`
    }
    debugsCode(subject){
        return `${this.name} debugs ${this.name}'s code on ${subject}`
    }
}
const shola = new Student({
    name: 'Shola',
    location: 'Nigeria',
    age: 24,
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    className: 'WEBEU2',
    previousBackground: 'Data Analyst'
})

const jayne = new Student({
    name: 'Jayne',
    location: 'Scotland',
    age: 28,
    favSubjects: ['Python', 'C', 'C++'],
    className: 'WEBEU2',
    previousBackground: 'Python Developer'
})

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const gabe = new Instructor({
    name: 'Gabriel',
    location: 'Spain',
    age: 38,
    favLanguage: 'C',
    specialty: 'Back-end',
    catchPhrase: `Let's go!`
})

const matt = new ProjectManager({
    name: 'Matt',
    location: 'England',
    age: 30,
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS1',
    favInstructor: 'Sean',
    favLanguage: 'C#'

})

console.log(fred);
console.log(jayne);
console.log(jayne.sprintChallenge('JavaScript Fundamental'));
console.log(jayne.prAssignment('JavaScript Fundamental'));
console.log(gabe);
console.log(gabe.demo('Applied JavaScript'));
console.log(gabe.grade.call(jayne, 'Applied JavaScript'));
console.log(jayne.prAssignment('JavaScript Fundamental'));
console.log(gabe.demo.call(jayne,'Applied JavaScript'))
console.log(matt);
console.log(matt.standUp('Webeu2_sprint03'))
console.log(matt.debugsCode('Applied JavaScript'))
console.log(jayne.listsSubjects())