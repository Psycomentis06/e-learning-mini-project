interface ILessonVideo {
    length: number;
    url: string;
    thumbnail: string;
    type: "IFRAME" | "VIDEO"
}

interface ILessonAttachment {
    name: string
    size: number
    type: "PDF" | "DOCX" | "PNG" | "JPEG" | "MP3" | "PPTX"
}

export interface ILesson {
    id: number
    title: string;
    video?: ILessonVideo;
    description: string[];
    attachments?: ILessonAttachment[]
    difficulty: "EASY" | "MEDIUM" | "HARD" | "VERY HARD"
    periodToComplete: number
}