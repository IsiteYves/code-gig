const { Gig } = require("../models/Gig");

exports.getAllGigs = async (req, res) => {
  await Gig.findAll()
    .then((gigs) => res.status(200).json(gigs))
    .catch((err) =>
      res.status(500).send({ message: `Inter server error: ${err}` })
    );
};

exports.createNewGig = async (req, res) => {
  try {
    const { title, technologies, description, budget, contact_email } =
      req.body;
    await Gig.create({
      title,
      technologies,
      description,
      budget,
      contact_email,
    }).then((gig) => res.status(201).json(gig));
  } catch (err) {
    res.status(500).send({ message: `Error: ${err}` });
  }
};

exports.deleteGig = async (req, res) => {
  try {
    await Gig.destroy({ where: { id: req.params.id } }).then(() =>
      res.status(200).send({ message: "Successfully delete the gig." })
    );
  } catch (err) {
    res.status(500).send({ message: `Error deleting the gig: ${err}` });
  }
};
