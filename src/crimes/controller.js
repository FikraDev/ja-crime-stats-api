const pool = require("../../dbconnect");
const queries = require("./queries");

const getAllCrimes = (req, res) => {
  pool.query(queries.getAllCrimes, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getCrimeById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getCrimeById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};


const addData = (req, res) => {
  const {year, murder, 
    shooting,
    rape,
    aggr_assault,
    robbery,
    breakins,
    larceny,
  } = req.body;

  //check if year exists in email
  pool.query(queries.checkYear, [year], (error, results) => {
    if (results.rows.length){
        res.send("The year selected is already in the database");
    }

    else{
        pool.query(
            queries.addData,
            [year, murder, shooting, rape, aggr_assault, robbery, breakins, larceny],
            (error, results) => {
              if (error) throw error;
              res.status(201).send("Data Added Successfully!!");
            }
          );
    }
  });
};

module.exports = {
  getAllCrimes,
  getCrimeById,
  addData,
};
