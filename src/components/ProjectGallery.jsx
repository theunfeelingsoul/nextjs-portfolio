export default function ProjectGallery({ images }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Project image"
          className="rounded border"
        />
      ))}
    </div>
  );
}
