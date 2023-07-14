import { Due } from "./due.interface";

export interface CreateTaskResponse {
    creatorId: string;
    createdAt?: string;
    assigneeId?: string | null;
    assignerId?: string | null;
    commentCount?: number;
    isCompleted?: boolean;
    content: string;
    description?: string;
    due?: Due;
    duration?: string | null;
    id: string;
    labels?: string[];
    order?: number;
    priority?: number;
    projectId?: string;
    sectionId?: string | null;
    parentId?: string | null;
    url?: string;
}