import { CategoryDto } from "./CategoryDto"

export interface PostDto {
    id: string,
    title: string,
    content: string,
    summaryContent: string,
    imageURL: string,
    createdAt: string,
    disabledAt: string,
    tags: string,
    slug: string
    authorName: string,
    authorBio: string,
    authorProfileImageUrl: string,
    categories: CategoryDto[]
}