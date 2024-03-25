// const jwt = require("jsonwebtoken")
// const secretKey="Rider"
// const userData={name:"vidya",age:23,address:"delhi"}
// //generate tokem
// const token=jwt.sign(userData,secretKey,{expiresIn: 30 })
// console.log(token)

// //verify token
// // const jwt_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmlkeWEiLCJhZ2UiOjIzLCJhZGRyZXNzIjoiZGVsaGkiLCJpYXQiOjE3MTEzNDkxMjh9.RaHhSZlUrXgLsYphp3AUyXU_NaNnIjk0kBFmpUtjlrI"
// const result=jwt.verify(token,secretKey,(err,data)=>{
//     if(err){
//         console.log("token expired")
//     }

//     else {
//         return data  
//     }
// })
// console.log(result);


const bcrypt= require("bcrypt")




const salt = 10

bcrypt.hash("THIS IS PASSWORD",salt,(err,hash)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(hash);
    }
})




//OR


// const hashedPass = bcrypt.hashSync(password, salt)
// console.log(hashedPass);

const hashedPass ="$2b$10$SAlbG36JSAC75QCnAcTeA.OZL1pl2ihIKkN64hWrEiGKbqCGK0p4K"
// -------------

bcrypt.compare("THIS IS PASSWORD", hashedPass, (err, result) => {
    if (err) {
        console.log(err);
    }
    else 
    {
        console.log(result)

    }  
})

//OR

const isMatched=bcrypt.compareSync("THIS IS PASSWORD",hashedPass)
console.log(isMatched);
