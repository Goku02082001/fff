const fs=require('fs');
// const path=require('path');
const Log=require('../models/Logs');
const Controller=require('../controllers/log');
const dataFile=process.env.DATA_FILE_PATH;

const Uploaddata=async()=>{
    try {
        const data=JSON.parse(fs.readFileSync(dataFile,'utf8'));

        for (const entry of data)
            {
                const Entry=await DataModel.findOne({id:entry.id});

                if(!Entry)
                    {
                        await DataModel.create(entry);
                        Controller.log('Succesfully Data uploaded');
                    }
            }
    } catch (err) {
        Controller.log('err' ,`Error uploading data : ${error.message} `);
    }
}


module.exports={
    Uploaddata
}