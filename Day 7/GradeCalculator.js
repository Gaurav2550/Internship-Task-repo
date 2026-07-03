let students = Number(prompt("Enter number of students:"));

for (let i = 1; i <= students; i++) {

    let marks = Number(prompt("Enter marks of Student " + i));

    let grade = "";

    // If Else
    if (marks >= 90) {
        grade = "A+";
    }
    else if (marks >= 80) {
        grade = "A";
    }
    else if (marks >= 70) {
        grade = "B";
    }
    else if (marks >= 60) {
        grade = "C";
    }
    else if (marks >= 35) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    // Switch
    switch (grade) {
        case "A+":
            console.log("Student " + i + " : Grade A+ (Excellent)");
            break;

        case "A":
            console.log("Student " + i + " : Grade A (Very Good)");
            break;

        case "B":
            console.log("Student " + i + " : Grade B (Good)");
            break;

        case "C":
            console.log("Student " + i + " : Grade C (Average)");
            break;

        case "D":
            console.log("Student " + i + " : Grade D (Pass)");
            break;

        default:
            console.log("Student " + i + " : Grade F (Fail)");
    }
}