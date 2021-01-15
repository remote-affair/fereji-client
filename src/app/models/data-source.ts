export interface DataSource {
  id: number;
  merged_silos: Array<any>;
  accessible_by: Array<any>;
  user_operations: any;
  silo_uuid: string;
  silo_label: string;
  silo_name: string;
  status: string;
  saving_mode: string;
  path: string;
  row_count: number;
  column_count: number;
  silo_version: string;
  primary_column: string;
  create_date: string;
  modified_date: string;
  source: 1;
  organization: null;
  owner: 1;
  credentials: null;
  parent_silo: null;
  base_silo: null;
  created_by: 1;
}
