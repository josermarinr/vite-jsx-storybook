import { withModifiers, defineComponent, ref } from "vue";

const WithDefineComponent = defineComponent({
  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
    };

    return () => (
      <div onClick={(e)=>withModifiers(inc, ["self"])}>{count.value}</div>
    );
  },
});

export default WithDefineComponent