import { create } from "zustand";

interface TiptapImageStore {
  imageFiles: File[];
  setImageFiles: (imageFiles: File[]) => void;
  imagePreviews: { url: string; file: File }[];
    setImagePreviews: (imagePreviews: { url: string; file: File }[]) => void;
    removeImage: (index: number) => void;
}

export const useTiptapImageStore = create<TiptapImageStore>((set) => ({
    imageFiles: [],
    setImageFiles: (imageFiles) => set({ imageFiles }),
    imagePreviews: [],
    setImagePreviews: (imagePreviews) => set({ imagePreviews }),
    removeImage: (index) => set((state) => {
        const item = state.imagePreviews[index]; 
        if(item) URL.revokeObjectURL(item.url);
        return {
            imageFiles: state.imageFiles.filter((_, i) => i !== index),
            imagePreviews: state.imagePreviews.filter((_, i) => i !== index),
        };
    })
}));