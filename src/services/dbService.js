const { Low, JSONFile } = require('lowdb');
const path = require('path');
const config = require('../config');

const file = path.resolve(process.cwd(), config.dbFile);
const adapter = new JSONFile(file);
const db = new Low(adapter);

async function init(){
  await db.read();
  db.data ||= { patients: [], claims: [] };
  await db.write();
}
async function getAllPatients(){ await db.read(); return db.data.patients; }
async function addPatient(p){ await db.read(); db.data.patients.push(p); await db.write(); return p; }
async function findPatientById(id){ await db.read(); return db.data.patients.find(x=> x.id===id); }
async function getAllClaims(){ await db.read(); return db.data.claims; }
async function addClaim(c){ await db.read(); db.data.claims.push(c); await db.write(); return c; }

module.exports = { init, getAllPatients, addPatient, findPatientById, getAllClaims, addClaim };
