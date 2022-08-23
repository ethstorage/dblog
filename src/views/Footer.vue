<template>
  <footer class="footer">
    <div class="content has-text-right">
      <a href="mailto:contact@web3q.io" target="_blank">
        <font-awesome-icon :style="{color: this.color}" size="2x" :icon="['fas', 'envelope']"/>
      </a>
      <a href="https://t.me/Web3Q" target="_blank">
        <font-awesome-icon :style="{color: this.color}" size="2x" :icon="['fab', 'telegram']"/>
      </a>
      <a href="https://medium.com/@Web3Q_io" target="_blank">
        <font-awesome-icon :style="{color: this.color}" size="2x" :icon="['fab', 'medium']"/>
      </a>
      <a href="https://discord.gg/mZqqUZxjed" target="_blank">
        <font-awesome-icon :style="{color: this.color}" size="2x" :icon="['fab', 'discord']"/>
      </a>
      <a href="https://twitter.com/Web3Q_io" target="_blank">
        <font-awesome-icon :style="{color: this.color}" size="2x" :icon="['fab', 'twitter']"/>
      </a>
      <a href="https://github.com/web3q" target="_blank">
        <font-awesome-icon :style="{color: this.color}" size="2x" :icon="['fab', 'github']"/>
      </a>
      <a href="https://docs.web3q.io" target="_blank">
        <font-awesome-icon :style="{color: this.color}" size="2x" :icon="['fas', 'book']"/>
      </a>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  props: {
    color: {
      type: String,
      default: '#ffffff',
    }
  },
  components: {},
};
</script>

<style>
.footer {
  padding-top: 40px !important;
  padding-bottom: 50px !important;
  background-color: transparent !important;
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer a {
  color: #000;
  font-size: 13px;
  padding: 10px;
  vertical-align: middle;
}
</style>
