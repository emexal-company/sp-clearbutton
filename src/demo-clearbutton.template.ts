import { html } from 'lit-element';
import { DemoClearbutton } from './demo-clearbutton.component';

import '@spectrum/sp-clearbutton';
import '@spectrum/sp-container';


export default function template(this: DemoClearbutton) {
  return html`
  <sp-container>
    <sp-rule medium label="Standard"></sp-rule>
      <sp-demo width="180">
        <pre><sp-clearbutton></sp-clearbutton></pre>
      </sp-demo>
      <sp-demo width="180">
        <pre><sp-clearbutton disabled></sp-clearbutton></pre>
      </sp-demo>
      <sp-rule medium label="Small"></sp-rule>
      <sp-demo width="180">
        <pre><sp-clearbutton small></sp-clearbutton></pre>
      </sp-demo>
      <sp-demo width="180">
        <pre><sp-clearbutton small disabled></sp-clearbutton></pre>
      </sp-demo>
  </sp-container>
  `;
  
}
