const pool = require('../../dbconnect');
const queries = require('./queries')

const getAllCrimes = (req, res)=>{
    pool.query(queries.getAllCrimes, (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getCrimeById = (req,res)=>{
    const id = parseInt(req.params.id)

    pool.query(queries.getCrimeById, [id], (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getAllCrimes,
    getCrimeById,
}