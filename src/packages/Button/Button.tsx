import CSS from './Button.module.scss';
import { 
    reactive, 
    computed, 
    FunctionalComponent, 
} from 'vue';
import classNames from 'classnames';

export interface FujiButtonProps {
    onclick?: () => void;
    label?: string;
    classes?: string[];
    primary?: boolean;
    size?: ['small', 'medium', 'large'];
    backgroundColor?: string;
}

export const Button: FunctionalComponent<FujiButtonProps> = ({
    onclick, 
    label, 
    primary, 
    size, 
    backgroundColor
}) => {
    
    return (
    <button
    type="button"
    class={classNames(CSS.storybookButton, primary? CSS["storybookButton--primary"]: CSS["storybookButton--secondary"], CSS[`storybookButton--${size || 'medium'}`]) }
    style={{backgroundColor: backgroundColor}}
    onClick={onclick}
  >
    { label }
  </button>
  )
}

Button.emits = ['click']