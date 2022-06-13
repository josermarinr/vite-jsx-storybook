import { FunctionalComponent } from "vue";

const FcComponent: FunctionalComponent<{msg: string}> = ({msg}) => {

    return (
      <div >{msg}</div>
    );
}

export default FcComponent;
