<script>
  export let text = "MyText";
  export let ref;
</script>
<button bind:this={ref} {...$$restProps}>{text}</button>