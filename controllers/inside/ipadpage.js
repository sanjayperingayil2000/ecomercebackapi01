const {findAllFromDb} = require("../connection")

const ipadpageData=async(req,res)=>{
    try {
        const data = await findAllFromDb("ipadpageData");
        return res.status(200).send({ipadpageData :data});
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
}

module.exports.getipadpageData=ipadpageData;