import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './clearbutton.styles';
import standardTemplate from './clearbutton.template';

@customElement('sp-clearbutton')
export class Clearbutton extends Base {
  public static componentStyles = [labelStyles];

  @property({ type: Boolean }) public disabled: boolean = false;
  @property({ type: Boolean })  public small: boolean = false;

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-clearbutton': Clearbutton;
  }
}
