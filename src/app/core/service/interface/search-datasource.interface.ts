export interface ISearchDataSourceLink {
    name: string;
    path: string;
    /**
     * FontAwesome icon name
     */
    icon?: string;
    breadcrumb?: string;
    tags: string[]
}

export interface ISearchDataSourceAction {
  name: string;
  action(...args: any[]): void;
  icon?: string;
  tags: string[];
}

export interface ISearchDataSourceCourse {}

export interface ISearchDataSource {
    links?: ISearchDataSourceLink[];
    actions?: ISearchDataSourceAction[];
    courses?: ISearchDataSourceCourse[];
}