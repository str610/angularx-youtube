export interface PlayerConfig {
    elementId: string;
    width: number | string;
    height: number | string;
    autoplay: boolean;
    controls: boolean;
    videoId?: string;
    outputs: {
        ready: any;
        change: any;
    };
}
