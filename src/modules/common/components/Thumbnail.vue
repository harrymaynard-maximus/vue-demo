<template>
  <div class="thumbnail-container">
    <img :src="imageObject.fileContent" alt="Image Thumbnail" tabindex="0" :class="thumbnailClass">
    <div class="action-strip">
      <a href="javascript:void(0)" @click="deleteImage($event)" class='text-danger' tabindex="0">Remove</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { CommonImage } from '../models/images'

const ThumbnailProps = Vue.extend({
  props: {
    imageObject: CommonImage
  }
});

@Component
export default class ThumbnailComponent extends ThumbnailProps {
  scaledWidth: number = 300;
  // deleteImage: EventEmitter<CommonImage> = new EventEmitter<CommonImage>();
  
  constructor() {
    super();
  }

  mounted() {
    const scaledWidthString = (180 * this.imageObject.naturalWidth / this.imageObject.naturalHeight).toFixed(0);
    // console.log('scaled width: ' + scaledWidthString);
    this.scaledWidth = parseInt(scaledWidthString, 10);

    if (this.scaledWidth > 250) {
      this.scaledWidth = 250;
    } else if (this.scaledWidth < 30) {
      this.scaledWidth = 100;
    }

    if (isNaN(this.scaledWidth)) {
      this.scaledWidth = 300;
    }
  }

  get thumbnailClass(): string {
    if (this.scaledWidth <= 300) {
      return 'image-thumbnail';
    } else {
      return 'image-thumbnail-width-priority';
    }
  }

  deleteImage(evt: any) {
    console.log('ThumbnailComponent:Delete from thumbnail: %o', evt);
    console.log('ThumbnailComponent:imageObject:', JSON.stringify(this.imageObject, null, 2));
    this.$emit('delete', this.imageObject);
  }
}
</script>
<style scoped>
.image-thumbnail {
  max-height: 100px;
  height: auto;
  max-width: 100%;
}
.image-thumbnail-width-priority {
  max-width: 270px;
  width: auto;
  max-height: 100%;
}
</style>