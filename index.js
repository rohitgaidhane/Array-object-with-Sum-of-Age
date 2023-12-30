let arr = [
    { name: "user1", age: 28, isVerified: true }, // arr[0]
    { name: "user2", age: 25, isVerified: false }, // arr[1]
    { name: "user3", age: 38, isVerified: true }, // arr[2]
    { name: "user4", age: 25, isVerified: true }, // arr[3]
  ];
  
  function sum() {
    let sum_Age = 0; 
    for (let i = 0; i < arr.length; i++) {
      sum_Age =    sum_Age + arr[i].age;
    }
    return sum_Age
  }
  
  let age = sum();
  console.log("Sum of all user Age is "+age);