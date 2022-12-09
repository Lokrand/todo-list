export interface ITodo {
  item: {
    title: any;
    completed: boolean;
    id: number | undefined;
  };
  id: any;
  completed: boolean;
  title: string | undefined;
}
