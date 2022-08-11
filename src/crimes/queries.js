const getAllCrimes = "SELECT * FROM tbl_crimedata";

const getCrimeById = "SELECT * FROM tbl_crimedata WHERE id = $1";

const checkYear = "SELECT s FROM tbl_crimedata s WHERE s.year = $1";

const addData = "INSERT INTO tbl_crimedata (id,year,murder,shooting,rape,aggr_assault,robbery,breakins,larceny) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

const deleteData = "DELETE FROM tbl_crimedata WHERE id = $1";

const updateData = "UPDATE tbl_crimedata SET year = $1, murder = $2, shooting = $3, rape = $4, aggr_assault = $5, robbery = $6, breakins = $7, larceny = $8 WHERE id = $9";


module.exports = {
    getAllCrimes,
    getCrimeById,
    checkYear,
    addData,
    deleteData,
    updateData,
}

