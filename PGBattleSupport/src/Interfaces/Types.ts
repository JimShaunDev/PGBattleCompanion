export interface Type {
  id: Number;
  name: String;
  weakTo: Type[];
  strongTo: Type[];
  img: String;
}
