export interface Token {
  jwt: string;
  expires_in: number;
  issued_at: string;
  refresh_token: string;
}
