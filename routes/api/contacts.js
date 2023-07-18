const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", isValidId, ctrl.getById);

router.post(
  "/",
  validateBody(schemas.addSchema, "Missing required name field"),
  ctrl.postContact
);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema, "Missing fields"),
  ctrl.putContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.favoriteShema, "Missing field favorite"),
  ctrl.patchContacts
);

module.exports = router;
