import { EventEmitter } from 'node:events';

export interface VoipOptions {
    ffprobePath?: string;
    voipLogLevel?: 'trace' | 'debug' | 'info' | 'warn' | 'error';
    tmpDir?: string;
    maxConcurrentCalls?: number;
}

export default class Voip extends EventEmitter {
    constructor(socket: any, options?: VoipOptions);
    listen(): Promise<this>;
    call(jid: string, media?: any, resolution?: any, options?: any): Promise<any>;
    groupCall(jids: string[], media?: any, resolution?: any, options?: any): Promise<any>;
    callMany(jids: string[], media?: any, resolution?: any, options?: any): Promise<any>;
    acceptCall(callId: string): Promise<any>;
    rejectCall(callId: string, reason?: any): Promise<any>;
    hangup(callId: string): Promise<any>;
    end(target?: string | boolean): Promise<any>;
    readonly coordinator: any;
    readonly calls: any[];
    readonly maxConcurrentCalls: number;
    activeCalls(): any[];
    info(callId: string): any;
}
