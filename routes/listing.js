 const express =require("express");
 const router= express.Router();
 const wrapAsync = require("../utils/wrapAsync.js");
 const Listing = require("../models/listing.js");
 const {isLoggedIn, isOwner ,validateListing} = require("../middlewear.js");
 const listingControllers = require("../controllers/listings.js");

const multerModule = require("multer");
const multer = multerModule.default || multerModule;
const {storage}= require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(listingControllers.index)
  .post(isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync( listingControllers.createListings )
   );

 //New Route
 router.get("/new",listingControllers.renderNewForm);

router
  .route("/:id")
  .get(listingControllers.showListings)
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingControllers.updateListings)
   )
   .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingControllers.distroyListings)
   );

//Edit route
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingControllers.renderEditForm)
   );



 //index route
// router.get("/",listingControllers.index);

//New Route
// router.get("/new",listingControllers.renderNewform);

//Create Route
// router.post("/",isLoggedIn,
//     validateListing,
//     wrapAsync( listingControllers.createListings )
//    );

//Show Route
// router.get("/:id", listingControllers.showListings);

//Edit route
// router.get("/:id/edit",
//     isLoggedIn,
//     isOwner,
//     wrapAsync(listingControllers.renderEditform)
//    );

//Update Route
// router.put("/:id",
//     isLoggedIn,
//     isOwner,
//     validateListing,
//     wrapAsync(listingControllers.updateListings)
//    );

//Delete route
// router.delete("/:id",
//     isLoggedIn,
//     isOwner,
//     wrapAsync(listingControllers.distroyListings)
//    );

module.exports = router;