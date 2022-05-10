import TourModal from "../models/tour.js";

export const createTour = async (req, res) => {
    const tour = req.body;
    const newTour = new TourModal({
        ...tour,
        creator:req.userId,
        createdAt: new Date().toISOString(),
    });

    try{
        await newTour.save();
        res.status(201).json(newTour);
    }catch(error){
       res.status(404).json({ message: "Something went wrong"});
    }
};

export const getTours = async (req,res) => {
    try{
        const tours = await TourModal.find();
        res.status(200).json(tours); 
    }catch(error){
        res.status(404).json({message: "Something went wrong"});
    }
};

export const getTour = async (req, res) => {
    const {id} = req.params;
  
    try {
      const tour = await TourModal.findOne({_id:id});  
      res.status(200).json(tour);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };

  export const getToursByUser = async (req, res) => {
    const {id} = req.params;
  
    try {
      const tours = await TourModal.find({_id:id});  
      res.status(200).json(tours);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };