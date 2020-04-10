<script>
  import { ContentLoader } from "vue-content-loader"
  export default {
    components: { ContentLoader }
  }
</script>

<template>
  <content-loader
    width="375"
    height="603"
    :speed="1"
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    id="skeleton-home"
  >
    <rect x="12" y="17" width="350" height="150" /> 
    <circle cx="52" cy="220" r="40" /> 
    <circle cx="142" cy="220" r="40" /> 
    <circle cx="232" cy="220" r="40" /> 
    <circle cx="322" cy="220" r="40" /> 
    <rect x="12" y="268" width="80" height="16" /> 
    <rect x="102" y="268" width="80" height="16" /> 
    <rect x="192" y="268" width="80" height="16" /> 
    <rect x="282" y="268" width="80" height="16" /> 
    <circle cx="52" cy="340" r="40" /> 
    <circle cx="142" cy="340" r="40" /> 
    <circle cx="232" cy="340" r="40" /> 
    <circle cx="322" cy="340" r="40" /> 
    <rect x="12" y="388" width="80" height="16" /> 
    <rect x="102" y="388" width="80" height="16" /> 
    <rect x="192" y="388" width="80" height="16" /> 
    <rect x="282" y="388" width="80" height="16" /> 
    <rect x="12" y="420" width="278" height="15" /> 
    <rect x="12" y="450" width="199" height="15" /> 
    <rect x="12" y="480" width="272" height="15" /> 
    <rect x="12" y="510" width="291" height="15" />
  </content-loader>
</template>
