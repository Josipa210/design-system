<template>
    <q-page padding>
        <div class="column q-gutter-md">
            <h4>Badges</h4>
            <p>Badge examples:</p>
            <div class="row q-gutter-md">
                <ds-badge label="New" color="primary" />
                <ds-badge label="Sale" color="negative" />
                <ds-badge label="Featured" color="accent" />
            </div>
        </div>
    </q-page>
</template>

<script setup>
import DsBadge from 'src/components/DsBadge.vue';
</script>
