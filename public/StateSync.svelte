<script>
  import { onMount, beforeUpdate, afterUpdate } from 'svelte';

  let syncState = 'idle';
  let lastSync = null;

  onMount(() => {
    syncState = 'mounting';
    setTimeout(() => syncState = 'ready', 150);
  });

  beforeUpdate(() => {
    syncState = 'updating';
  });

  afterUpdate(() => {
    lastSync = new Date().toISOString();
    syncState = 'ready';
  });
</script>

<div class="sync-indicator" class:syncing={$syncState !== 'ready'}>
  <slot {syncState} {lastSync} />
</div>
