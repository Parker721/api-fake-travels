import Bus from "../models/bus.js";

export const get_AllBuses = async (req, res) => {
    const buses = await Bus.find({}).populate({path:'Driver', select:'name'})
    
       
    if (!buses)
    {
        return res.status(404).send("No buses found");
    }
    const {Driver} = buses[0];

    const conductor =  buses.map(bus => bus.Driver.name);
    console.log(buses[0].Driver.name);
    res.json(buses);
}

export const get_Bus=async(req,res)=>{
    const bus = await Bus.findById(req.params.id);
    if (!bus)
    {
        return res.status(404).send("No bus found");
    }
    res.send(bus);
}

export const post_Bus=async(req,res)=>{
    const bus = new Bus(req.body);
    if (!bus)
    {
        return res.status(400).send("bad request");
    }
    await bus.save();
    res.send(bus);
}

export const put_Bus=async(req,res)=>{
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!bus)
    {
        return res.status(404).send("No bus found");
    }
    res.json(bus);
}

export const delete_Bus=async(req,res)=>{
    const bus = await BUS.findByAndDelete(req.params.id);
    if (!bus)
    {
        return res.status(404).send("No bus found");
    }
}