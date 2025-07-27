<script>
  export let component;
  export let fallback;
  
  let loadedComponent = null;
  
  import(`./${component}.svelte`)
    .then(module => {
      loadedComponent = module.default;
    })
    .catch(() => {
      loadedComponent = fallback;
    });
</script>

<svelte:component this={loadedComponent} />
