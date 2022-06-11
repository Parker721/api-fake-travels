import Driver from "../models/driver.js";


export const get_allDrivers = async (req, res) => {
    try{
        const drivers = await Driver.find({})
        const driver = await Driver.findOne({name:"Daniel" ,active:true})
        res.json(drivers)
        console.log(driver)
    }catch(err){
         console.log(err)
   }
   
}

export const get_Driver = async (req, res) => {
    try{
        const driver = await Driver.findById(req.params.id)
        if(!driver){
            return res.status(404).send({
                message: 'Driver not found'
            })
        }
        res.send(driver)

    }catch(err){
         console.log(err)
   }
}

export const post_Driver = async (req, res) => {
    try{
        const {name} = req.body
        const driverExists = await Driver.findOne({name})

        if(driverExists){
            return res.status(400).send({
                message: 'Driver already exists'
            })
        }

        const driver = new Driver(req.body)
        await driver.save()

        res.json(driver)
    }catch(err){
        console.log(err)
    }
    
}

export const put_Driver = async (req, res) => {
    try{
        const{id}= req.params
        const driver = await Driver.findByIdAndUpdate({_id:id}, req.body, {new:true})
        if(!driver){
            return res.status(404).send({
                message: 'Driver not found'
            })
        }
        res.send(driver)

    }catch(err){
        console.log(err)
    }
}





export const delete_Driver = async (req, res) => {
    try{
        const{id}= req.params
        const driver = await Driver.findByIdAndDelete({_id:id})
        if(!driver){
            return res.status(404).send({
                message: 'Driver not found'
            })
        }
        res.send({message: 'Driver deleted successfully'})

    }catch(err){
        console.log(err)
    }

}

