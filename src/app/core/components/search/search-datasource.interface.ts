interface ISearchDataSourceLink {
    name: string;
    path: string;
    /**
     * FontAwesome icon name
     */
    icon?: string;
}

interface ISearchDataSourceAction {
    name: string;
    action(...args:any[]): void;
}

interface ISearchDataSourceCourse {

}

export interface ISearchDataSource {
    links?: ISearchDataSourceLink[];
    actions?: ISearchDataSourceAction[];
    courses?: ISearchDataSourceCourse[];
}