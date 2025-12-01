export interface Type {
  title: string;
  desc: string;
  langs: string[];
  tools?: string[];
  difficuly: "lako" | "onako" | "tesko";
  icon?: any;
  avgSalary?: number;
  demand?: 1 | 2 | 3 | 4 | 5;
  subType?: Type[];
}
