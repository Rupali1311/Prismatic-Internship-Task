let userProfile: {[key:string]:string | number}= {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    address: "123 Main St",
};
console.log(userProfile);


//1. Print all the keys and their values in the profile.
console.log("User Profile Details:");
Object.entries(userProfile).forEach(([key, value]) => {
    console.log(key,":", value);
});

// 2.Check if a specific key exists (e.g., "email").
const keyToCheck = "email";
if (keyToCheck in userProfile) {
    console.log("Key ",keyToCheck," exists in the profile.");
} else {
    console.log("Key ",keyToCheck," does not exist in the profile.");
}
//3. Update the user's phone number if it exists, otherwise add it.
const newPhoneNumber = "123-456-7890";
if ("phone" in userProfile) {
    userProfile.phone = newPhoneNumber;
    console.log("Phone number updated.");
} else {
    userProfile.phone = newPhoneNumber;
    console.log("Phone number added.");
}
console.log(userProfile);
//4. Remove a specific key (e.g., "age") if it exists.
const keyToRemove = "age";
if (keyToRemove in userProfile) {
    delete userProfile[keyToRemove];
    console.log("Key ",keyToRemove," removed from the profile.");
} else {
    console.log("Key ",keyToRemove," does not exist in the profile.");
}
//5. Count the total number of keys in the user's profile.
const totalKeys = Object.keys(userProfile).length;
console.log("Total number of keys in the user's profile: ",totalKeys);


