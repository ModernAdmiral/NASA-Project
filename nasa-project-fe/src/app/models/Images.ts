export interface ImageDetails {
  id: string;
  sol: string;
  camera: {
    id: string;
    name: string;
    full_name: string;
  };
  earth_date: string;
  img_src: string;
}

export interface Image {
  photos: ImageDetails[];
}

export const initialImageListState = {
  photos: [
    {
      id: "",
      sol: "",
      camera: {
        id: "",
        name: "",
        full_name: "",
      },
      earth_date: "",
      img_src: "",
    },
  ],
};
