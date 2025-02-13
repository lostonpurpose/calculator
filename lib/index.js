/* eslint-disable import/extensions */

import { Application } from "@hotwired/stimulus";

import CalculatorController from "./controllers/calculator_controller.js";

window.Stimulus = Application.start();

window.Stimulus.register("calculator", CalculatorController);
