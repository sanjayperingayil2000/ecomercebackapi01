const {findAllFromDb} = require("../connection")

const macbookpageData=async(req,res)=>{
    try {
        const data = await findAllFromDb("macbookpageData");
        return res.status(200).send({macbookpageData :data});
    } catch (error) {
        console.log("error occured while fetching",error);
        return res.status(500).send({message:"something went wrong"});
    }
}

module.exports.getmacbookpageData=macbookpageData;