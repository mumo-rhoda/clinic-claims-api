const { nanoid } = require('nanoid');
const db = require('../services/dbService');

exports.createClaim = async (req,res,next)=>{
  try{
    const { patient_id, amount, services=[] } = req.body;
    if (!patient_id || !amount) return res.status(400).json({ error: 'patient_id and amount required' });
    const patient = await db.findPatientById(patient_id);
    if (!patient) return res.status(404).json({ error: 'patient not found' });
    const c = { id: nanoid(), patient_id, amount, services, status: 'submitted', createdAt: new Date().toISOString() };
    await db.addClaim(c);
    res.status(201).json(c);
  }catch(err){ next(err); }
};

exports.listClaims = async (req,res,next)=>{
  try{
    const claims = await db.getAllClaims();
    res.json(claims);
  }catch(err){ next(err); }
};
