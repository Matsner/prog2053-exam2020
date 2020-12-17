import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
      return html`
        <div>
        	<li>${this.user.uname}</li>
        </div>
      `;
    }

}
customElements.define('edit-user', EditUser);
