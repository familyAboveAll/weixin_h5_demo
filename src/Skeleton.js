import Vue from 'vue'
import skeletonHome from './components/Skeleton.vue'
export default new Vue({
  components: {
    skeletonHome,
  },
  template: `
    <div>
      <skeletonHome id="skeleton-home" style="display:none"/>
    </div>
  `
})