// Your code here

function createEmployeeRecord (array){
    let obj = {
        firstName : array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj
}

function createEmployeeRecords(arrayOfArrays){
    let ArrayOfObjects=[]
    arrayOfArrays.forEach(element => {
        const newObj = createEmployeeRecord(element)
        ArrayOfObjects.push(newObj)
    });
    return ArrayOfObjects;
}

function createTimeInEvent(employeeRecord, dateStamp){
    let ObjectWithInfo ={
        type:'TimeIn',
        hour:getHour(dateStamp),
        date:getDate(dateStamp)
    }
    employeeRecord.timeInEvents.push(ObjectWithInfo)
    return employeeRecord
}

function getHour(string){
    return Number(string.slice(11,15))
}
function getDate(string){
    return (string.slice(0,10))
}





function createTimeOutEvent(employeeRecord, dateStamp){
    let ObjectWithInfo ={
        type:'TimeOut',
        hour:getHour(dateStamp),
        date:getDate(dateStamp)
    }
    employeeRecord.timeOutEvents.push(ObjectWithInfo)
    return employeeRecord
}



function hoursWorkedOnDate(EmployeeRecord, date){

    let hourIn =EmployeeRecord.timeInEvents.find((obj)=> obj.date===date).hour;
    console.log(hourIn)
    let hourOut =EmployeeRecord.timeOutEvents.find((obj)=> obj.date===date).hour;
    console.log(hourOut)
    if (hourIn&& hourOut){
        return (hourOut-hourIn)/100;
    }
    return 0
}

function wagesEarnedOnDate(EmployeeRecord, date){
    return hoursWorkedOnDate(EmployeeRecord, date)*EmployeeRecord.payPerHour;
}




function allWagesFor(EmployeeRecord) {
    let wagesForEachDay = [];
    EmployeeRecord.timeInEvents.forEach( timeRecord =>{
        let wageForDay = wagesEarnedOnDate(EmployeeRecord, timeRecord.date)
        wagesForEachDay.push(wageForDay)
    })
    return wagesForEachDay.reduce((acc, curr) => acc + curr, 0);
}


function calculatePayroll(ArrayOfEmployeeRecords){
    const allWagess=ArrayOfEmployeeRecords.map(employeeRecord => allWagesFor(employeeRecord))
    return allWagess.reduce((acc, curr) => acc + curr, 0);
}


// let Khrystyna = createEmployeeRecord (['Khrystyna', 'Klapushchak', 'job', 16])//=
// createTimeInEvent(Khrystyna, '2023-03-19 0900')

// createTimeInEvent(Khrystyna, '2023-05-19 0900')
// Khrystyna
// createTimeOutEvent(Khrystyna, '2023-05-19 1800')
// createTimeOutEvent(Khrystyna, '2023-03-19 1800')
// hoursWorkedOnDate(Khrystyna, '2023-03-19')
// wagesEarnedOnDate(Khrystyna, '2023-03-19' ) 



// let obj = {
//     firstName : 'Khrystyna',
//     familyName: 'Klapushchak',
//     title: 'job',
//     payPerHour: 16,
//     timeInEvents: [
//         {
//             type:'TimeIn',
//             hour:9,
//             date:'03-05-1888'
//         },
//         {
//             type:'TimeIn',
//             hour:8,
//             date:'03-06-1888'
//         }   
//     ],
//     timeOutEvents: [
//         {
//             type:'TimeIn',
//             hour:15,
//             date:'03-05-1888'
//         },
//         {
//             type:'TimeIn',
//             hour:17,
//             date:'03-06-1888'
//         }
//     ]
// }

// hoursWorkedOnDate(obj, '03-06-1888') //=



