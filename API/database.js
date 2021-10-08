import { firebase } from "../util/config";

export function createUser(records) {
  const userId = firebase.database().ref().child("client/").push().key;
  records = { ...records, userId };
  let updates = {};
  updates["/client/" + userId] = records;
  firebase.database().ref().update(updates);
}

export async function updateUser(user, email) {
  var userByEmail = await getUserByEmail(email);
  user = { ...user, userId: userByEmail[0].userId, uid: userByEmail[0].uid };
  firebase
    .database()
    .ref("/client/" + userByEmail[0].userId)
    .set(user);
}
export async function getUserByEmail(email) {
  let arrayUsers = [];
  arrayUsers = await getUsers();
  return arrayUsers.filter((obj) => {
    return obj.email == email;
  });
}
export async function getUsers() {
  var arraylistClients = [];
  var db = firebase.database().ref().child("client/");
  db.on("child_added", (snapshot) => {
    arraylistClients.push(snapshot.val());
  });
  return arraylistClients;
}

export async function removeUser(email) {
  let user = await getUserByEmail(email);
  let cliente_ref = firebase.database().ref("client/" + user[0].userId);

  cliente_ref.remove().catch(function (error) {
    return { success: false, message: `Removed failed: ${error.message}` };
  });
}
