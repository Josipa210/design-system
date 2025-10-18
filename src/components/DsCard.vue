<template>
    <q-card class="ds-card flex items-center" :flat="flat" :bordered="bordered" :class="[hoverShadow ? 'hover-shadow' : '', colorClass]">
        <!-- Image left or right -->
        <div v-if="imgSrc && (imgPosition === 'left' || imgPosition === 'right' || imgPosition === 'top')"
            class=" " :class="imgPosition == 'top'?'flex column full-width':'flex row items-center justify-between full-width'">
            <q-img :src="imgSrc" class="ds-card-img shadow-2 row full-width" v-if="imgPosition == 'top'" />
            <q-img :src="imgSrc" class="ds-card-img shadow-2" v-if="imgPosition === 'left'"
                :class="imgPosition ? 'col' : ''" />
            <div class="q-pa-md flex col justify-between">
                <div>
                <div>
                    <div class="text-h6 q-mb-sm">{{ title }}</div>
                    <slot />
                </div>
                <div v-if="$slots.footer">
                
                    <slot name="footer" />
                </div>
                </div>
            </div>
            <q-img :src="imgSrc" class="ds-card-img shadow-2" v-if="imgPosition === 'right'"
                :class="imgPosition ? 'col' : ''" style="margin-right: 0; " />
        </div>

        <!-- Image on top or no image -->
        <div v-else>
            <q-card-section>
                <div class="text-h6 q-mb-sm">{{ title }}</div>
                <slot />
            </q-card-section>
            <q-card-actions v-if="$slots.footer">
                <slot name="footer" />
            </q-card-actions>
        </div>
    </q-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: { type: String, required: true },
    imgSrc: { type: String, default: null },
    imgPosition: { type: String, default: 'top' }, // top / left / right
    color: { type: String, default: '' }, // background color variant
    hoverShadow: { type: Boolean, default: true }, // enable hover shadow
    flat: { type: Boolean, default: false },
    bordered: { type: Boolean, default: true }
})

const colorClass = computed(() => `bg-${props.color}`)
</script>

<style scoped>
.ds-card {
    width: 350px;
    min-height: 160px;
       box-shadow: 0 6px 18px rgba(5, 52, 93, 0.1);
    transition: box-shadow 0.2s ease-in-out;
}

.hover-shadow:hover {
    box-shadow: 0 6px 18px rgba(5, 52, 93, 0.15);
}

.ds-card-img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-right: 16px;
}

.row-reverse .ds-card-img {
    margin-left: 16px;
    margin-right: 0;
}
</style>
