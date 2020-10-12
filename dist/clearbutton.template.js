import { html } from 'lit-element';
export default function standardTemplate() {
    return html `
<sp-button type="clear" ?small="${this.small}" label="Clear" ?disabled="${this.disabled}"></sp-button>
   `;
}
//# sourceMappingURL=clearbutton.template.js.map