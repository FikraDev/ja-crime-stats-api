const getAllCrimes = "SELECT * FROM tbl_crimedata";

const getCrimeById = "SELECT * FROM tbl_crimedata WHERE id = $1"




module.exports = {
    getAllCrimes,
    getCrimeById,
}