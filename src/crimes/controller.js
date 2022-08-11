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
  const {
    id,
    year,
    murder,
    shooting,
    rape,
    aggr_assault,
    robbery,
    breakins,
    larceny,
  } = req.body;

  //check if year exists in email
  pool.query(queries.checkYear, [year], (error, results) => {
    if (results.rows.length) {
      res.send("The year selected is already in the database");
    } else {
      pool.query(
        queries.addData,
        [
          id,
          year,
          murder,
          shooting,
          rape,
          aggr_assault,
          robbery,
          breakins,
          larceny,
        ],
        (error, results) => {
          if (error) throw error;
          res.status(201).send("Data Added Successfully!!");
        }
      );
    }
  });
};

const deleteData = async(req, res)=>{
  const id = await parseInt(req.params.id);

  pool.query(queries.getCrimeById,[id], (error, results)=>{
    const doesNotExist = !results.rows.length;

    if(doesNotExist){
      res.status(404)
      res.send("Resource does not exist")
    } 
    else
    {
      pool.query(queries.deleteData,[id],(error, results)=>{
        if(error) throw error;
        res.status(200).send("Resource deleted successfully");
      })
    }
  })
}

const updateData = (req, res) =>{
  const id = parseInt(req.params.id);

  const {year, murder, shooting, rape, aggr_assault,robbery, breakins, larceny} = req.body;


  pool.query(queries.getCrimeById, [id], (error, results)=>{
    const doesNotExist = !results.rows.length;

    if(doesNotExist){
      res.status(404).send('Resource does not exist in database')
    }
    else{
      pool.query(queries.updateData,[year, murder, shooting, rape, aggr_assault,robbery, breakins, larceny, id],(error, results)=>{
        if(error) throw error;
        res.status(200).send("Update Successful")
      })//note where your id falls in your sql query and place in the same place, above the id comes last
    }
  })
}

module.exports = {
  getAllCrimes,
  getCrimeById,
  addData,
  deleteData,
  updateData,
};
