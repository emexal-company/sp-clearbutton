import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Clearbutton } from './clearbutton.component';

export default function standardTemplate(this: Clearbutton) {
    
return html`
<sp-button type="clear" ?small="${this.small}" label="Clear" ?disabled="${this.disabled}"></sp-button>
   `;
}
