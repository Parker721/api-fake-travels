import Travel from '../models/travels.js'

export const get_AllTravels =async(req, res)=>
{
    travels = await Travel.find({})
    if(!travels)
    {
        return res.status(404).send({
            message:"No travels found"
        })

    }

    res.json(travels)
}


export const get_Travel = async(req, res)=>
{
    const travel = await Travel.findById(req.params.id)
    if(!travel){
        return res.status(404).send({
            message:"Travel not found"
        })
    }
    res.json(travel)
}

export const travels_for_date = async(req, res)=>
{

    const {initial_date, final_date,origin,destination} = req.body
    const buses = await Bus.findOne({Date: {
        $gte: initial_date,
        $lt: final_date
    
    },origin:origin,destination:destination})
    if(!buses)
    {
        return res.status(404).send({
            message:"No travels found in this dates"
        })
    }
}

export const travels_for_price= async(req, res)=>{
    const{origin,destination,price_min,price_limit} = req.body
    travels = await Travel.find({origin:origin,destination:destination,price:{$gte:price_min,$lte:price_limit}})
        if(!travels)
        {
            return res.status(404).send({message:"No travels found in this price range"})
        }
        res.json(travels)
}    



export const buy_Travel = async (req, res) => {

    try{
        const {origin,destination,price,date,bus_id,user_id} = req.body
        const travel_Avalaible = await Travel.findOne({origin:origin,destination:destination,price:price,date:date,bus_id:bus_id,full:false}).populate('users')
        if(!travel_Avalaible || travel_Avalaible.users.length < travel_Avalaible.capacity_of)
        {
            return res.status(404).send({message:"Travel not available"})
        }
        travel_Avalaible.users.push(req.user.user_id)
    
        res.send({message:"purchase travel successfuly"})

    }catch(err){
        console.log(err)
    }
}