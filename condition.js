// ithu
const department = ["MSM","SMS","VMS","WPS",];// naan department nu naan constant ah kuduthu irruken
for (const dept of department)// iniga naan department ah naan dept nu costrain pannuren da ithu naan antha yella data um call and print panna use aagum da
    {
    console.log(dept);// ippo naan antha value set pannen la atha vechi naan call panni priint panni irruken da so yenakku easy ya print aagum da 
}

///
const college = { name:"MSM",year:"1999",course:"tamil , english ,botany,cs,b.com"};
for (const key in college)
    {
    console.log(key+":"+college[key]);
    }
/////

let students = [
    { name: "Arun", time: 9 },
    { name: "Karthi", time: 10 },
    { name: "Vijay", time: 8 }]

for (let student of students) {

    if (student.time <= 9) {
        console.log(student.name + " - Present");
    } else {
        console.log(student.name + " - Absent");
    }

}
//////

let voter = [
    { name: "Arun", age: 18},
    { name: "Karthi", age: 17 },
    { name: "Vijay", age: 21 }]

for (let vote of voter) {

    if (vote.age <= 18) {
        console.log(vote.name +":"+  vote.age,"is enough to vote");
    } else {
        console.log(vote.name +":" + vote.age, "is not enough to vote");
    }

}
