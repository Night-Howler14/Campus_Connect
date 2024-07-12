const router = require("express").Router();
const Thing = require("../models/thingModel");
// const User = require("../models/userModel");
const authMiddleware = require("../middlewares/authMiddleware");
const cloudinary = require("../config/cloudinaryConfig");
const multer = require("multer");
// const Notification = require("../models/notificationsModel");
// add a new thing
router.post("/add-thing", authMiddleware, async (req, res) => {
  try {
    const newThing = new Thing(req.body);
    await newThing.save();

    // send notification to admin
    // const admins = await User.find({ role: "admin" });
    // admins.forEach(async (admin) => {
    //   const newNotification = new Notification({
    //     user: admin._id,
    //     message: `New thing added by ${req.user.name}`,
    //     title: "New Thing",
    //     onClick: `/admin`,
    //     read: false,
    //   });
    //   await newNotification.save();
    // });

    res.send({
      success: true,
      message: "Thing added successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get all things
router.post("/get-things", async (req, res) => {
  try {
    const { seller, category = [], status } = req.body;
    let filters = {};
    if (seller) {
      filters.seller = seller;
    }
    if (status) {
      filters.status = status;
    }

    // filter by category
    if (category.length > 0) {
      filters.category = { $in: category };
    }

    // filter by age
    // if (age.length > 0) {
    //   age.forEach((item) => {
    //     const fromAge = item.split("-")[0];
    //     const toAge = item.split("-")[1];
    //     filters.age = { $gte: fromAge, $lte: toAge };
    //   });
    // }

    const things = await Thing.find(filters)
      .populate("seller")
      .sort({ createdAt: -1 });
    res.send({
      success: true,
      data: things,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get a thing by id
router.get("/get-thing-by-id/:id", async (req, res) => {
  try {
    const thing = await Thing.findById(req.params.id).populate("seller");
    res.send({
      success: true,
      data: thing,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// edit a thing
router.put("/edit-thing/:id", authMiddleware, async (req, res) => {
  try {
    await Thing.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      success: true,
      message: "Thing updated successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// delete a thing
router.delete("/delete-thing/:id", authMiddleware, async (req, res) => {
  try {
    await Thing.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
      message: "Thing deleted successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get image from pc
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

router.post(
  "/upload-image-to-thing",
  authMiddleware,
  multer({ storage: storage }).single("file"),
  async (req, res) => {
    try {
      // upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "Client",
      });

      const thingId = req.body.thingId;
      await Thing.findByIdAndUpdate(thingId, {
        $push: { images: result.secure_url },
      });
      res.send({
        success: true,
        message: "Image uploaded successfully",
        data: result.secure_url,
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  }
);

// update thing status
router.put("/update-thing-status/:id", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    // const updatedThing = await Thing.findByIdAndUpdate(req.params.id, {
    //   status,
    // });

    // // send notification to seller
    //     const newNotification = new Notification({
    //       user: updatedThing.seller,
    //       message: `Your thing ${updatedThing.name} has been ${status}`,
    //       title: "Thing Status Updated",
    //       onClick: `/profile`,
    //       read: false,
    //     });
    // await newNotification.save();

    await Thing.findByIdAndUpdate(req.params.id, { status });
    res.send({
      success: true,
      message: "Thing status updated successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
