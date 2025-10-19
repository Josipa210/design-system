<template>
    <q-page padding>
        <div class="column q-gutter-md">
            <h4 class="q-mb-none">Cards</h4>
            <p>Reusable card components with different layouts:</p>

            <!-- Default cards -->
            <div class="row ">
                <div class="col-12 col-lg-4 q-pa-sm ">
                    <!-- Image on left -->
                    <ds-card title="Left Image" img-src="https://picsum.photos/120/120" img-position="left"
                        color="primary">
                        <p>Text content goes on the right side, next to the image.</p>
                        <template #footer>
                           <ds-button label="Action" color="primary" rounded />
                        </template>
                    </ds-card>
                </div>
                <div class="col-12 col-lg-4 q-pa-sm">
                    <!-- Image on right -->
                    <ds-card title="Right Image" img-src="https://picsum.photos/120/120" img-position="right">
                        <p>Text content goes on the left side, next to the image.</p>
                        <template #footer>
                            <ds-button label="Action" color="primary" rounded outline />
                        </template>
                    </ds-card>
                </div>
            </div>
            <div class="row ">
                <div class="col-12 col-lg-4 q-pa-sm">
                    <!-- Image on top -->
                    <ds-card title="Top Image" img-src="https://picsum.photos/300/150" img-position="top">
                        <p>Image on top, text below.</p>
                        <template #footer>
                             <ds-button label="Action" color="secondary" rounded />
                        </template>
                    </ds-card>
                </div>
                <div class="col-12 col-lg-4 q-pa-sm">
                    <ds-card title="No Image">
                        <p>No image</p>
                        <template #footer>
                             <ds-button label="Action" color="secondary" rounded outline/>
                        </template>
                    </ds-card>
                </div>
            </div>

        </div>
    </q-page>
</template>

<script setup>
import DsButton from 'src/components/DsButton.vue'
import DsCard from 'src/components/DsCard.vue'
</script>
