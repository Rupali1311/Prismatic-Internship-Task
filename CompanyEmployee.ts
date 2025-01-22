const company = {
    departments: [
        {
            name: "Engineering",
            employees: ["Rupali", "Meena", "Vikram"]
        },
        {
            name: "Sales",
            employees: ["Sarthak", "Swarali"]
        },
        {
            name: "HR",
            employees: ["Swati", "Sakshi"]
        }
    ]
};

// 1. Print all departments and their employees
console.log("Departments and their Employees:");

company.departments.forEach(department => {
    console.log("Department: ",department.name);
    console.log("Employees:", department.employees);
});

// 2. Add a new employee to a specific department
const newEmployee = "Ritika";
const departmentToAdd = "Engineering";

const targetDepartment = company.departments.find(dept => dept.name === departmentToAdd);
if (targetDepartment) {
    targetDepartment.employees.push(newEmployee);
    console.log("Added " ,newEmployee," to the ",departmentToAdd," department.");
} else {
    console.log("Department ",departmentToAdd," not found.");
}
console.log("After added new employee");
company.departments.forEach(department => {
    console.log("Department: ",department.name);
    console.log("Employees:", department.employees);
});

// 3. Create a list of all employees in the company
const allEmployees: string[] = [];
for (const department of company.departments) {
    for (const employee of department.employees) {
        allEmployees.push(employee);
    }
}
console.log("\nAll Employees in the Company:", allEmployees.join(", "));

