const GOOGLE_API_KEY = "AIzaSyDn0pDdbpya6FZzwLyVmF-Fj-c3OURCOYQ";

export const getMapPreview = (lat: number, lng: number) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x300maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=AIzaSyDn0pDdbpya6FZzwLyVmF-Fj-c3OURCOYQ`;

  return imagePreviewUrl;
};
