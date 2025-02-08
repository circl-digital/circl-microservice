export class APIResponse<T> {
    statusCode: number;
    message: string;
    error: boolean;
    data?: T | undefined;
}