<!-- src/lib/ImageGallery.svelte -->
<script>
import { fade } from 'svelte/transition';
let images = [
  { src: 'gallery-images/image01.jpg', alt: 'Image 1' },
  { src: 'gallery-images/image02.jpg', alt: 'Image 2' },
  { src: 'gallery-images/image03.jpg', alt: 'Image 3' },
  // Add more images as needed
];

let selectedImageIndex = null;

function openModal(index) {
  selectedImageIndex = index;
  document.addEventListener('keydown', handleKeyDown);
}

function closeModal() {
  selectedImageIndex = null;
  document.removeEventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
  if (event.key === 'ArrowRight') {
    nextImage();
  } else if (event.key === 'ArrowLeft') {
    previousImage();
  } else if (event.key === 'Escape') {
    closeModal();
  }
}

function nextImage() {
  if (selectedImageIndex !== null) {
    selectedImageIndex = (selectedImageIndex + 1) % images.length;
  }
}

function previousImage() {
  if (selectedImageIndex !== null) {
    selectedImageIndex = (selectedImageIndex - 1 + images.length) % images.length;
  }
}
  </script>
  
  <style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        padding: 50px 25px 0;
    }

    .gallery img {
        width: 100%;
        cursor: zoom-in;
        box-shadow: 0 0 18px #4e4e4e;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal img {
        max-width: 100%;
        max-height: 100%;
        cursor: zoom-out;
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        border: 1px solid #303030;
        padding: 10px;
        cursor: pointer;
        z-index: 1001;
    }

    .nav-button:hover {
        background:rgba(15, 15, 15, 0.7);
        border: 1px solid #3d3d3d;
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }
  </style>
  
<div class="gallery">
    {#each images as image, index}
    <img src={image.src} alt={image.alt} on:click={() => openModal(index)} />
    {/each}
</div>

{#if selectedImageIndex !== null}
    <div class="modal" on:click={closeModal} transition:fade={{ duration: 500}}>
        <img src={images[selectedImageIndex].src} alt="Selected Image" />
        <button class="nav-button prev" on:click|stopPropagation={previousImage}>&lt;</button>
        <button class="nav-button next" on:click|stopPropagation={nextImage}>&gt;</button>
    </div>
{/if}
  