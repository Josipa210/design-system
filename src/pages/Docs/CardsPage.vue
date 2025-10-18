<template>
    <q-page padding>
        <div class="column q-gutter-md">
            <h4>Cards</h4>
            <p>Reusable card components with different layouts:</p>

            <!-- Default cards -->
            <div class="row q-gutter-md">
                <!-- Image on left -->
                <ds-card title="Left Image" img-src="https://picsum.photos/120/120" img-position="left" color="primary">
                    <p>Text content goes on the right side, next to the image.</p>
                    <template #footer>
                        <q-btn label="Action" color="secondary" flat />
                    </template>
                </ds-card>

                <!-- Image on right -->
                <ds-card title="Right Image" img-src="https://picsum.photos/120/120" img-position="right" >
                    <p>Text content goes on the left side, next to the image.</p>
                    <template #footer>
                        <q-btn label="Action" color="primary" flat />
                    </template>
                </ds-card>

                <!-- Image on top -->
                <ds-card title="Top Image" img-src="https://picsum.photos/300/150" img-position="top">
                    <p>Image on top, text below.</p>
                     <template #footer>
                        <q-btn label="Action" color="secondary" flat />
                    </template>
                </ds-card>

            </div>

        </div>
    </q-page>
</template>

<script setup>
import DsCard from 'src/components/DsCard.vue'
</script>
