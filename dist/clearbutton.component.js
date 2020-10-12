import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './clearbutton.styles';
import standardTemplate from './clearbutton.template';
let Clearbutton = class Clearbutton extends Base {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.small = false;
    }
    render() {
        return standardTemplate.call(this);
    }
};
Clearbutton.componentStyles = [labelStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Clearbutton.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Clearbutton.prototype, "small", void 0);
Clearbutton = __decorate([
    customElement('sp-clearbutton')
], Clearbutton);
export { Clearbutton };
//# sourceMappingURL=clearbutton.component.js.map