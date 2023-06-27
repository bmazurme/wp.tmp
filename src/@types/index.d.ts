type Action<T> = {
  type: string;
  payload: T;
};

type Reducer<T> = (state: T, action: Action<T>) => T;

type User = {
  id: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  email: string;
  avatar?: string;
  password?: string;
};

type TypeProject = {
  id: number;
  name: string;
  owner: number;
  address: string;
  likes: never[];
  users: number[];
  modules: string[];
};

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}
