const Listing = require("../models/listing.js");
const getCoordinates = require(`../geoCode.js`);


module.exports.index = async (req, res) => {
   const allListings = await Listing.find({});
   res.render("./listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req, res) => {
   {
      res.render("./listings/new.ejs")
   }
}

module.exports.createListings = async (req, res, next) => {
   let url = req.file.path;
   let filename = req.file.filename;
   const newListing = new Listing(req.body.listing);
   newListing.owner = req.user._id;
   newListing.image = { url, filename };

   const { location, country } = req.body.listing;
    
   const coords = await getCoordinates(location, country);
   if (!coords) {
   req.flash("error", "Invalid location. Please enter a valid city and country.");
   return res.redirect("/listings/new");
   }

    if (coords) {
      newListing.lat = coords.lat;
      newListing.lng = coords.lng;
    }
    
   await newListing.save();
   req.flash("success", "New Listing Created");
   res.redirect("/listings");
}


module.exports.showListings = (async (req, res) => {
   let { id } = req.params;
   const listing = await Listing.findById(id)
      .populate({
         path: "reviews",
         populate: {
            path: "author",
         }
      })
      .populate("owner");
   if (!listing) {
      req.flash("error", "Listing you requested for does not exists!");
      res.redirect("/listings");
   }
   res.render("./listings/show.ejs", { listing });
})

module.exports.renderEditForm = async (req, res) => {
   let { id } = req.params;
   const listing = await Listing.findById(id);

   let orignalImageUrl = listing.image.url;
   orignalImageUrl = orignalImageUrl.replace("/upload", "/upload/h_300,w_250")
   res.render("listings/edit.ejs", { listing, orignalImageUrl });
}

module.exports.updateListings = async (req, res) => {
   let { id } = req.params;

   const { location, country } = req.body.listing;
   const coords = await getCoordinates(location, country);

   if (!coords) {
   req.flash("error", "Invalid location. Please enter a valid city and country.");
   return res.redirect(`/listings/${id}/edit`);
    }

   let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (coords) {
      listing.lat = coords.lat;
      listing.lng = coords.lng;
      await listing.save();
    }

    console.log(coords);

   if (typeof req.file !== "undefined") {

      let url = req.file.path;
      let filename = req.file.filename;
      listing.image = { url, filename };
      await listing.save();
   }

   req.flash("success", "Listing Updated");
   res.redirect(`/listings/${id}`);
}

module.exports.distroyListings = async (req, res) => {
   let { id } = req.params;
   let deletedListing = await Listing.findByIdAndDelete(id);
   req.flash("success", "Listing Deleted!");
   console.log(deletedListing);
   res.redirect("/listings");
}

