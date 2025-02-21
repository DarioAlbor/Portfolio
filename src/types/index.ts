export interface MyComponentProps {
    title: string;
    description?: string;
}

export type User = {
    id: number;
    name: string;
    email: string;
};

export interface ApiResponse<T> {
    data: T;
    error?: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export interface Experience {
    id: number;
    company: string;
    position: string;
    period: string;
    description: string;
    technologies: string[];
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}