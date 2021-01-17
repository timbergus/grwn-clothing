interface FormInputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  label?: string;
}
