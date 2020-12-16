export interface User {
  url?: string;
  organization: string;
  last_login?: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_active?: boolean;
  date_joined?: string;
  user_uuid?: string;
  groups?: Array<string>;
  user_permissions?: Array<string>;
}
