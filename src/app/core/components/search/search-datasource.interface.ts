interface ISearchDataSourceLink {
    name: string;
    path: string;
    /**
     * FontAwesome icon name
     */
    icon?: string;
    breadcrumb?: string;
}

interface ISearchDataSourceAction {
    name: string;
    action(...args: any[]): void;
    icon?: string
}

interface ISearchDataSourceCourse {

}

export interface ISearchDataSource {
    links?: ISearchDataSourceLink[];
    actions?: ISearchDataSourceAction[];
    courses?: ISearchDataSourceCourse[];
}