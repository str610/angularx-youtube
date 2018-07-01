/// <reference types="youtube" />
import { AfterViewInit, Renderer2, EventEmitter } from '@angular/core';
import { YoutubeApiService } from './youtube.api.service';
import { YoutubePlayerService } from './youtube.player.service';
export declare class YoutubeComponent implements AfterViewInit {
    youtubeApi: YoutubeApiService;
    youtubePlayer: YoutubePlayerService;
    private renderer;
    videoId: string;
    width: number | string;
    height: number | string;
    autoplay: boolean;
    controls: boolean;
    ready: EventEmitter<YT.Player>;
    change: EventEmitter<YT.PlayerEvent>;
    ytPlayer: YT.Player;
    changeEvent: YT.PlayerEvent;
    constructor(youtubeApi: YoutubeApiService, youtubePlayer: YoutubePlayerService, renderer: Renderer2);
    ngAfterViewInit(): void;
    onReady(player: YT.Player): void;
    onChange(event: YT.PlayerEvent): void;
}
