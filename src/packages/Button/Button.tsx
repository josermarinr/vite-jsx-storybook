import './button.css';
import { 
    reactive, 
    computed, 
    FunctionalComponent, 
} from 'vue';

export interface FujiButtonProps {
    onclick?: () => void;
    label?: string;
    classes?: string[];
    primary?: boolean;
    size?: ['small', 'medium', 'large'];
    backgroundColor?: string;
}

const classNames = (primary?: boolean,  size?: ['small', 'medium', 'large']) => computed(()=>({
    'storybook-button': true,
    'storybook-button--primary': primary,
    'storybook-button--secondary': !primary,
    [`storybook-button--${size || 'medium'}`]: true,
  }))

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
    class={`storybook-button storybook-button--primar storybook-button--secondary` }
    style={{backgroundColor: backgroundColor}}
    onClick={onclick}
  >
    {{ label }}
  </button>
  )
}

Button.emits = ['click']