export enum userType {
  ADMIN = 'admin',
  CLIENT = 'client',
  SUPER_ADMIN = 'super_admin',
  CUSTOMER_SERVICE = 'customer_service',
}

export type Response = {
  success: boolean;
  message: string;
  status: number;
  data?: object | null;
};
