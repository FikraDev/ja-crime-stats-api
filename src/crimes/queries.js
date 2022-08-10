const getAllCrimes = "SELECT * FROM tbl_crimedata";

const getCrimeById = "SELECT * FROM tbl_crimedata WHERE id = $1";

const checkYear = "SELECT s FROM tbl_crimedata WHERE s.year = $1";

const addData = "INSERT INTO tbl_crimedata (year,murder,shooting,rape,aggr_assault,robbery,breakins,larceny) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";




module.exports = {
    getAllCrimes,
    getCrimeById,
    checkYear,
    addData,
}

