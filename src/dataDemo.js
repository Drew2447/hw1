const { user1, user2, user3, user4, user5, user6 } = require("./data");


const addFriens= ()=> {
  user1.friends.push(user2, user3, user4);
  user2.friends.push(user1, user3);
  user3.friends.push(user1, user2);
  user4.friends.push(user1);
  console.log(user1.friends.length);
}

function userInfo(user){
  return {name: user.name, postCount:user.posts.length}

}
function getNames(users){
return user.map(user=>{
  return user.names
})
}

// let user1: {
//   id: number;
//   dateJoined: Date;
//   name: string;
//   friends: any[];
//   posts: {
//       text: string;
//       likes: number;
//       comments: string[];
//   }[];
// }


module.exports = {
    userInfo
}