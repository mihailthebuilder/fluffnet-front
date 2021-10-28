type Image = {
  preview: string;
  raw: File;
};

type ImageState = Image | null;

type Prediction = {
  prob: string;
} | null;

type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
