export interface PaginatedQueryRequest {
    page: number,
    pageSize: number,
    query?: string | undefined
}