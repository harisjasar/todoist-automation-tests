import { Due } from "./due.interface";

export interface Task {
    id?: string;
    project_id?: string;
    section_id?: string;
    content: string;
    description?: string;
    is_completed?: boolean;
    labels?: string[];
    parent_id?: string;
    order?: number;
    priority?: number;
    due?: Due | null;
    url?: string;
    comment_count?: number;
    created_at?: string;
    creator_id?: string;
    assignee_id?: string;
    assigner_id?: string;
    duration?: {
        amount: number;
        unit: 'minute' | 'day';
    } | null;
}