import { FunctionalComponent, ref } from "vue";
import FcComponent from "./experimentation/fcComponent";
import RenderComponent from "./experimentation/RenderComponent";
import WithDefineComponent from "./experimentation/WithDefineComponent";

import App from "./experimentation/WithDefineComponent";

const count = ref(0)
const HelloWorld: FunctionalComponent<{ msg: string}> = ({ msg }, slots) => {

    return (
        <>
            <h1>{{ msg }}</h1>

            <button type="button" onClick={() => count.value++}>count is: {count.value }</button>
            <p>
                Edit
                <code>components/HelloWorld.vue</code> to test hot module ryarn --versioneplacement.
            </p>
            <FcComponent msg="aaa"/>
            <RenderComponent />
            <WithDefineComponent />
            
        </>
    )
}

export default HelloWorld;