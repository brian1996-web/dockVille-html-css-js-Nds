const express = require("express");

const Truck = require("../models/truckModel");

const router = express.Router();

const ensureloggedIn = require("connect-ensure-login");



// router.get("/employeeform", (req, res) => {
//   req.session.user = req.user;
//   if (req.session.user.role === "director" || req.session.user.role === "manager") {


//     res.render("employee.pug");
//   }
// else{
//   res.render("landing.pug", {alert:"Access is denied"});
// }
  
// });

router.get("/truckform", async(req, res) => {
  res.render('truck.pug');
});


// router.post("/regtruck", async (req, res) => {
//   try {
//     const truck = new Truck(req.body);
//     await truck.save();
//     res.redirect("/api/truckform");
//     console.log(req.body);
//   } catch (error) {
//     res.status(400).render("truck");
//     console.log(error);
//   }
// });

// router.get("/list", async (req, res) => {
//   try {
//     let items = await Truck.find();
//     let ages = await Truck.aggregate([
//       {"$group": {_id: "$all",
//       totalAge: {$sum: "$age"},
//     }}
   
//   ]);
// let genderCount = await Truck.aggregate([ 
//   {$match:{
//   gender: 'male'
// }}
// ]).count
//      //let ages =group{totalAge{sum}}
//     res.render("employeelist.pug", { trucks: items, truckAges: ages[0].totalAge, genderCount:ages[0].gender});
//     // res.render("employeelist.pug", { employees: items, empAges: ages[0].totalAge});
//   } catch (error) {
//     console.log(error);
//     return res.status(400).send({ message: "Sorry could not get employees" });
//   }
// });
// //deleting 
// router.post("/truck/delete", async (req, res) => {
//   try {
//     await Truck.deleteOne({ _id: req.body.id });
//     res.redirect("/back");
//   } catch (error) {
//     res.status(400).send("Unable to delete item from the database");
//   }
// });

//   //  how to update data
// router.get("/truck/edit/:id", async (req, res) => {
//   try {
    
//     const trk = await Truck.findOne({
//       _id: req.params.id,
//     });
//     res.render("edittruck", {truck: trk});
     
//   } 
//   catch (error) {
//     res.status(400).send("Couldn't find employee in database");
//     console.log(error);
//   }
// });
// // route for newly eduted data
// // router.post("/employee/edit" , ensureloggedIn("/api/login"), async (req, res) => {
//   router.post("/truck/edit" , async (req, res) => {
// try{
  
//     await Truck.findOneAndUpdate({_id: req.query.id},req.body);
//     res.redirect("/api/list")
   
//   }
  

//   catch(error){
//     res.status(400).send("Could not find employee data");
//     console.log(error);
//   }
// });

module.exports = router;