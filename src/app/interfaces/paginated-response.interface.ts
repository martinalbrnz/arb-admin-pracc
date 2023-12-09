import { PaginationData } from "./pagination-data.interface"

export interface PaginationResponse<T> {
	data: T,
	error: boolean
	pagination: PaginationData
}
