import { Controller } from "@hotwired/stimulus"
import { addPlaceholder } from "./custom";

export default class extends Controller {

  connect() {
    addPlaceholder(this.element);
    this.element.classList.add("focus-field")
    this.element.classList.add("jus-s-item-c")
  }
}
