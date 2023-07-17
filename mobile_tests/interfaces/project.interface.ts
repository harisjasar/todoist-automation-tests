export interface Project {
    id?: string;
    name: string;
    color?: string;
    parent_id?: string | null;
    order?: number;
    comment_count?: number;
    is_shared?: boolean;
    is_favorite?: boolean;
    is_inbox_project?: boolean;
    is_team_inbox?: boolean;
    view_style?: 'list' | 'board';
    url?: string;
}
