<template>
    <section class="sanButton">
        <span>
            <slot name="icon"></slot>
        </span>
        <span>
            <slot></slot>
        </span>
    </section>
</template>
<script>
export default {};
</script>
<style scoped>
.sanButton {
  box-sizing: border-box;
  background-color: #2666e8;
  padding: 7px 12px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;
}
.sanButton > span:nth-child(1) > i {
  font-size: 16px;
  display: inline-block;
  transform: translateY(2px);
  backface-visibility: hidden;
}
</style>

