export interface Token {
  refresh: string;
  access_token: string;
  token_type: 'Bearer' | 'JWT';
  expiry: TokenExpiry;
}

export interface TokenExpiry {
  expiry_time: string;
  time_zone: string;
}
