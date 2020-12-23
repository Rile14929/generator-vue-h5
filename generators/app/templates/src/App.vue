<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="less">
@import './assets/less/index.less';

#app {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
</style>
