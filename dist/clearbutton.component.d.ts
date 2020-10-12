import { Base } from '@spectrum/sp-base';
export declare class Clearbutton extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    disabled: boolean;
    small: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-clearbutton': Clearbutton;
    }
}
