export type Children = {
  name: string;
  path: string;
  id?: string;
}

export interface NavItems {
  id: string;
  name: string;
  withIcon: boolean;
  path: string;
  children?: Children[];
  beta?: boolean;
  status?: string;
}