//console.log(1)
//console.log("Hello JavaScript!")

//let a=7
//let text="Petro"
//let h=[1,2,6,7]
//console.log(h);
//console.log(text)
//console.log(a)

/* console.log(login.login.name);
console.log(login.login.surname);

if ( login.class == 5 && login.age ==  45 ) {
    console.log("" + login.login.name + " " +  login.class);
}
else {
    console.log(" FIND!!! ")
}
 let inputed_password = 999
 let isLogined = false
 for ( let i=0; i<login.password.length; i++) {
    if ( inputed_password == login.password[i] ) {
        isLogined = true
    }
 }

console.log(isLogined); */


let users_familyMovchkos = [
    {
        password : "Pol&8!",
        answers : [12,34,56,78,2,3,4],
        age : 10,
        class : 5,
        phoneNumber : "+380963213304",
    
        mainInfo : {
            name : "Petro",
            surname : "Movchko",
            result : null,
        },
    },
    {
        password : "Pol&9!",
        answers : [15,31,52,73,2,3,4],
        age : 10,
        class : 5,
        phoneNumber : "+380963913304",
    
        mainInfo : {
            name : "Roman",
            surname : "Movchko",
            result : null,
        },
    },
    {
        password : "Pol&10!",
        answers : [12,39,76,74,2,54,4],
        age : 10,
        class : 5,
        phoneNumber : "+380963313304",
    
        mainInfo : {
            name : "Sviat",
            surname : "Movchko",
            result : null,
        },
    },
]


let correctAnswers = [
    {
        answer : 12,
        mark : 1,
    },
    {
        answer : 30,
        mark : 1,
    },
    {
        answer : 56,
        mark : 2,
    },
    {
        answer : 26,
        mark : 2,
    },
    {
        answer : 16,
        mark : 2,
    },
    {
        answer : 3,
        mark : 3,
    },
    {
        answer : 4,
        mark : 3,
    },
]

function calculateResult (answers,correctAnswers) {
    let sum = 0
    for ( let i=0; i<answers.length; i++) {
        if ( correctAnswers[i].answer == answers[i]) {
            sum += correctAnswers[i].mark
        }
    }
    return sum
}
function addContastant(name,surname,answers,age) {
    let Movchko = {
        answers : answers,
        age : age,
        mainInfo : {
        name : name,
        surname : surname,
        result : null,
        },
    }
    return users_familyMovchkos.push(Movchko)
}
addContastant("Vasil", "Movchko",[12,39,74,74,2,53,1],10)

function smartestMovcko(result) {
    let max = 0
    let integer = 0
    for ( let i=0; i<result.length; i++){
        if ( result[i] > max) {
            max = result[i]
            integer = i
        }
    }
    return users_familyMovchkos[integer].mainInfo
}

let results = [ ]

for ( let i=0; i<users_familyMovchkos.length; i++) {
    users_familyMovchkos[i].mainInfo.result= calculateResult(users_familyMovchkos[i].answers,correctAnswers)
    results.push(users_familyMovchkos[i].mainInfo.result)
    console.log(users_familyMovchkos[i].mainInfo);
}
console.log("Найрозумніший з Мовчків:");
console.log(smartestMovcko(results));
