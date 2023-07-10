const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getById);

router.post(
  "/",
  validateBody(schemas.schema, "Missing required name field"),
  ctrl.postContact
);

router.delete("/:contactId", ctrl.deleteContact);

router.put(
  "/:contactId",
  validateBody(schemas.schema, "Missing fields"),
  ctrl.putContact
);

module.exports = router;
