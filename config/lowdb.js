import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

let db;

async function initLowDB() {
  const adapter = new JSONFile("db.json");
  const defaultData = { users: [], posts: [] };
  db = new Low(adapter, defaultData);

  await db.read();
  console.log(db.data); // { users: [], posts: [] }
  // db.data ||= {
  //    users: [],
  //    cartas: []
  // };
  await db.write();
  console.log("DB cargada correctamente", db.data);
}

export { db, initLowDB };