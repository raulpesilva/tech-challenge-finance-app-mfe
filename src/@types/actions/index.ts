export interface Fields<T extends Record<string, unknown>> {
  inputs: { [K in keyof T]?: T[K] };
  errors: { [K in keyof T]?: string[] };
}

export type ActionResponse<T extends Fields<Record<string, unknown>> = Fields<Record<string, unknown>>> = T & {
  success?: boolean;
  message?: string;
};

