import Contact from "../model/contact.js";

export const addContact = async(req, res)=>{
    try{
        const contact = await new Contact(req.body);
        contact.save();

        return res.status(200).json({msg:"Successfully saved contact"});
    }catch(error){
        return response.status(500).json(error);
    }
}