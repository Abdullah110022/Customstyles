import { Controller } from "@hotwired/stimulus"
import { ripple } from "./custom";

export default class extends Controller {

  connect() {
    ripple(this.element,"ripple", false);
    this.element.classList.add("ripple-effect");
  }
}
