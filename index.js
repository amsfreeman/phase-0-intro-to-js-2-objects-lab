const employee = {
    name: "Amy",
    streetAddress: "123 Main St",
};
employee;

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "Bob",
    "987 Main",
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}
const newEmployeeTwo = destructivelyUpdateEmployeeWithKeyAndValue(
    employee, 
    key, 
    "Sam",
);

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
const newEmployeeThree = deleteFromEmployeeByKey(
    delete employee.name,
);

function destructivelyDeleteFromEmployeeByKey() {
    const newEmployeeFour = delete employee.name;
    Object.keys(employee);
    employee.streetAddress = "12 Broadway";
    return employee
};
