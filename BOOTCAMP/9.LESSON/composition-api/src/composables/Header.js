import {computed, ref} from "vue";
export default function(){
    const title = ref("Hallooo");
    const titleLengthMessage=computed(()=>`You printed ${title.value.length} character`)
    console.log(titleLengthMessage.value) // we get titleLengthMessage's value from it's value property
    return {title, titleLengthMessage}
}