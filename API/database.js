import { firebase } from "../util/config";

export function createUser(records) {
  const userId = firebase.database().ref().child("client/").push().key;
  records = { ...records, userId };
  let updates = {};
  updates["/client/" + userId] = records;
  firebase.database().ref().update(updates);
}

export async function updateUser(user, phone) {
  var userByPhone = await getUserByPhone(phone);
  user = { ...user, userId: userByPhone[0].userId };
  firebase
    .database()
    .ref("/client/" + userByPhone[0].userId)
    .set(user);
}
export async function getUsers() {
  var arraylistClients = [];
  var db = firebase.database().ref().child("client/");
  db.on("child_added", (snapshot) => {
    arraylistClients.push(snapshot.val());
  });
  return arraylistClients;
}

export async function getUserByPhone(phone) {
  let arrayUsers = [];
  arrayUsers = await getUsers();
  return arrayUsers.filter((obj) => {
    return obj.telefone == phone;
  });
}

export async function removeUser(phone) {
  let user = await getUserByPhone(phone);
  let cliente_ref = firebase.database().ref("client/" + user[0].userId);

  cliente_ref.remove().catch(function (error) {
    return { success: false, message: `Removed failed: ${error.message}` };
  });
}
