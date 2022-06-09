import { FunctionalComponent } from "vue"
import data from './data.json'

 export const LazyLoad: FunctionalComponent<{ numberOfImage: Number}> = ({ numberOfImage }, slots) => {
 
    return  <>{data.wolves.map(wolf => <img v-lazy={{src:wolf.images[0]}}/>)}</>

 }
 