import React from "react";
import { photos } from '../fixtures/galleryPhotos'
import Gallery from "react-photo-gallery";


export default function GalleryContainer() {
    return (
        <Gallery photos={photos} />
    )
}