const { nanoid } = require('nanoid');
const db = require('../services/dbService');
const { patientSchema } = require('../utils/validators');

exports.createPatient = async (req,res,next)=>{
  try{
    const { error, value } = patientSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });
    const p = { id: nanoid(), ...value, createdAt: new Date().toISOString() };
    await db.addPatient(p);
    return res.status(201).json(p);
  }catch(err){ next(err); }
};

exports.listPatients = async (req,res,next)=>{
  try{
    const patients = await db.getAllPatients();
    res.json(patients);
  }catch(err){ next(err); }
};
