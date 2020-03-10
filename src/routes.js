import { Router } from "express";

import multer from "multer";

import MulterConfig from "./config/multer";

import Usercontroler from "./app/controllers/UserController";

import FileController from "./app/controllers/FileController";
import ProviderController from "./app/controllers/ProviderController";
import SessionController from "./app/controllers/SessionController";
import AppointmentController from "./app/controllers/AppointmentController";
import ScheduleController from "./app/controllers/ScheduleController";
import NotificationsController from "./app/controllers/NotificationsController";
import AvailableController from "./app/controllers/AvailableController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(MulterConfig);

routes.post("/users", Usercontroler.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.put("/users", Usercontroler.update);

routes.get("/providers", ProviderController.index);

routes.get("/providers/:providerId/available", AvailableController.index);

routes.post("/appointments", AppointmentController.store);

routes.get("/appointments", AppointmentController.index);

routes.delete("/appointments/:id", AppointmentController.delete);

routes.get("/schedule", ScheduleController.index);

routes.get("/notifications", NotificationsController.index);

routes.put("/notifications/:id", NotificationsController.update);

routes.post("/files", upload.single("file"), FileController.store);

export default routes;
