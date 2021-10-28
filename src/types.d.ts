type Image = {
  preview: string;
  raw: File;
};

type ImageState = Image | null;

type Prediction = {
  prob: number;
  fluffy: "True" | "False";
};

type PredictionState = Prediction | null;

type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
