export interface WithLoading {
    loading: boolean;
}

export interface AsyncStateType<T> extends WithLoading {
    data?: T | null;
    error?: unknown | null;
}
