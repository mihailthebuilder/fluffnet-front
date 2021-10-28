type Image = {
  preview: string;
  raw: File;
};

type ImageState = Image | null;

type Prediction = {
  prob: number;
  fluffy: string;
};

type PredictionState = Prediction | null;

type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
