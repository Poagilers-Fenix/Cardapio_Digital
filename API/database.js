import { firebase } from "./config";

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
  let cliente_ref = firebase.database().ref("/client/" + user[0].userId);

  cliente_ref.remove().catch(function (error) {
    return { success: false, message: `Removed failed: ${error.message}` };
  });
}

export async function getEstab() {
  var arraylistEstab = [];
  var db = firebase.database().ref().child("estab/");
  db.on("child_added", (snapshot) => {
    arraylistEstab.push(snapshot.val());
  });
  return arraylistEstab;
}

export async function getRequests() {
  var arrayUserRequest = [];
  var db = firebase.database().ref().child("requests/");
  db.on("child_added", (snapshot) => {
    arrayUserRequest.push(snapshot.val());
  });
  return arrayUserRequest;
}
