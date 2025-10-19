<template>
  <q-card
    :flat="flat"
    :bordered="bordered"
    class="ds-card"
    :class="[rowLayoutClass, imgPosition === 'right' ? 'row-reverse' : '']"
  >
    <!-- Left Image -->
    <q-img
      v-if="imgSrc && imgPosition === 'left'"
      :src="imgSrc"
      class="ds-card-img left-img shadow-2"
    />

    <!-- Right Image -->
    <q-img
      v-if="imgSrc && imgPosition === 'right'"
      :src="imgSrc"
      class="ds-card-img right-img shadow-2"
    />

    <!-- Top Image -->
    <q-img
      v-if="imgSrc && imgPosition === 'top'"
      :src="imgSrc"
      style="min-height: 200px;object-fit: contain;"
      class="ds-card-img top-img shadow-2"
    />

    <!-- Content -->
    <div class="q-pa-md flex column justify-between full-width">
      <div>
        <div class="text-h6 q-mb-sm">{{ title }}</div>
        <slot />
      </div>
      <div v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </q-card>
</template>

<script setup>
const { title, imgSrc, imgPosition, flat, bordered } = defineProps({
  title: { type: String, required: true },
  imgSrc: { type: String, default: null },
  imgPosition: { type: String, default: 'top' }, // top / left / right
  flat: { type: Boolean, default: false },
  bordered: { type: Boolean, default: true },
  hoverShadow: { type: Boolean, default: true }
})

// Row layout only for left/right on desktop
const rowLayoutClass = (imgSrc && (imgPosition === 'left' || imgPosition === 'right')) ? 'row-layout' : 'column'


</script>

<style scoped>
.ds-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  box-shadow: 0 6px 18px rgba(5, 52, 93, 0.1);
  transition: box-shadow 0.2s ease-in-out;
}

/* Left/Right images on desktop */
.row-layout {
  flex-direction: row;
  align-items: stretch; /* key for full-height image */
}

/* Top image */
.top-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  margin-bottom: 16px;
}

/* Left/right images */
.left-img,
.right-img {
  width: 120px;
  flex-shrink: 0;
  height: auto; /* will stretch with flex */
  object-fit: cover;
}

.right-img {
  margin-left: 16px;
}

.left-img {
  margin-right: 16px;
}

/* Hover effect */
.hover-shadow:hover {
  box-shadow: 0 6px 18px rgba(5, 52, 93, 0.15);
}
.row-reverse {
  flex-direction: row-reverse;
}
/* Mobile breakpoint */
@media (max-width: 600px) {
  .row-layout {
    flex-direction: column;
  }
  .row-reverse {
  flex-direction: row;
}
  .left-img,
  .right-img {
    width: 100%;
    height: 120px;
    margin: 0 0 16px 0;
  }
}
</style>
