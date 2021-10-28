type Image = {
  preview: string;
  raw: File;
} | null;

type Prediction = {
  prob: string;
} | null;

type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
