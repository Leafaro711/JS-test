let userName = prompt('say your name.', 'jon');
// console.log(userName);

// if(userName) {
//     console.log(`glad to see you ${userName}`)
// } else {
//     console.log(`i dont know you`)
// };

switch(userName) {
    case "tural":
         console.log(`salam ${userName}`);
         break;
    case "samir":
         console.log(`privet ${userName}`);
         break;
    case "david":
         console.log(`hello ${userName}`);
         break;
    default:
        console.log(`i dont know you`);

}