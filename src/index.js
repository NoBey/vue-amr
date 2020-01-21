import Amr from './vue-amr.vue';
export default Amr;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('amr', Amr);
}
