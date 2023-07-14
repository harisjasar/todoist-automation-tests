export interface CreateTask {
    content: string;
    description?: string;
    project_id?: string;
    section_id?: string;
    parent_id?: string;
    order?: number;
    labels?: string[];
    priority?: number;
    due?: DueType;
    assignee_id?: string;
    duration?: number;
    duration_unit?: 'minute' | 'day';
}


export type DueType = 
    | { due_string: string; due_lang?: string; }
    | { due_date: string; }
    | { due_datetime: string; };
