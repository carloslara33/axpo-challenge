export interface FormField<T> {
  name: keyof T;
  fieldType: "text" | "number" | "radio" | "textarea" | "select";
  extraData?: Record<string, any>;
}
