import {} from '@types/youtube';

export interface PlayerConfig {
    elementId: string,
    width: number | string,
    height: number | string,
    videoId?: string,
    outputs: {
        ready: any,
        change: any
    }
}
