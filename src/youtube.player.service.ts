import { Injectable, NgZone } from '@angular/core';

import { YoutubeApiService } from "./youtube.api.service";

import { PlayerConfig } from './youtube.interface';

const getWindow = () => window;

@Injectable()
export class YoutubePlayerService {

	private _window: any;
	private player: YT.Player;

	constructor(
		private zone: NgZone,
		private youtubeApi: YoutubeApiService,
	) {
		this._window = getWindow();
	}
	
	initialise(config: PlayerConfig): void {
		if(this._window["YT"] === undefined) {
			this.youtubeApi.apiEmitter.subscribe(() => this.zone.run(() => this.newPlayer(config)));
		} else {
			this.zone.run(() => this.newPlayer(config));
		}
	}

	private newPlayer(config: PlayerConfig): YT.Player {
		return this.player = new this._window["YT"]["Player"](config.elementId, {
			width: config.width,
			height: config.height,
			videoId: config.videoId,
			playerVars: { autoplay: config.autoplay, controls: config.controls },
			events: {
			onReady: (event: any) => {
				config.outputs.ready(event.target);
			},
			onStateChange: (event: any) => {
				config.outputs.change(event);
			}
			}
		});
	}

}
