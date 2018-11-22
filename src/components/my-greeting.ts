import { customElement, LitElement, property } from '@polymer/lit-element';
import { html } from 'lit-html';

@customElement('my-greeting' as any)
class MyGreeting extends LitElement {
  @property({ type: String })
  msg: string = 'world';

  render() {
    return html`
      <h1>Hello ${this.msg}!</h1>
    `;
  }
}
