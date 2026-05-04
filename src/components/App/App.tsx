import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import type { Photo } from "../../types/photo";
import { getPhotos } from "../../services/photos";
import PhotosGallery from "../PhotosGallery/PhotosGallery";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const handleSearch = async (query: string) => {
    console.log(query);

    try {
      const fetchedPhotos = await getPhotos(query);
      setPhotos(fetchedPhotos);
    } catch {}
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSearch} />
          {photos.length > 0 && (
            <PhotosGallery photos={photos} onSelect={() => {}} />
          )}
        </Container>
      </Section>
      <Toaster position="top-right" />
    </>
  );
}
