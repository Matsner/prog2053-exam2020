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
          <form action="api/updateUser.php", methode="POST">
          <p> Brukernavn: ${this.user.uname}</p>
          <li> Endre brukernavn: <input type="text" id="brukernavn" name="brukernavn"></li>

        	<p> Fornavn: ${this.user.firstName}</p>
          <li> Endre fornavn: <input type="text" id="brukernavn" name="brukernavn"></li>

          <p> Etternavn: ${this.user.lastName}</p>
          <li> Endre etternavn: <input type="text" id="brukernavn" name="brukernavn"></li> <br>
          <li> Endre passord: <input type="text" id="passord" name="passord"></li>

          <button type="knapp" id="knapp">Utfør</button>
          
          <form>
        </div>
      `;
    }

}
customElements.define('edit-user', EditUser);
