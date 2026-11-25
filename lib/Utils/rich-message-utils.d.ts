export function tokenizeCode(code: any, language?: string): {
    highlightType: any;
    codeContent: string | undefined;
}[];
export function toUnified(submessages: any, uuid: any): {
    response_id: any;
    sections: any;
};
export function prepareRichResponseMessage(content: any): {
    messageContextInfo: {
        botMetadata: {
            verificationMetadata: {
                proofs: {
                    certificateChain: Uint8Array<ArrayBuffer>[];
                    version: number;
                    useCase: number;
                    signature: Uint8Array<ArrayBuffer>;
                }[];
            };
        };
    };
    botForwardedMessage: {
        message: {
            richResponseMessage: any;
        };
    };
};
export function botMetadataSignature(): Uint8Array<ArrayBuffer>;
export function botMetadataCertificate(length?: number): Uint8Array<ArrayBuffer>;
export function wrapToBotForwardedMessage(richResponseMessage: any): {
    messageContextInfo: {
        botMetadata: {
            verificationMetadata: {
                proofs: {
                    certificateChain: Uint8Array<ArrayBuffer>[];
                    version: number;
                    useCase: number;
                    signature: Uint8Array<ArrayBuffer>;
                }[];
            };
        };
    };
    botForwardedMessage: {
        message: {
            richResponseMessage: any;
        };
    };
};
export function captureUnifiedResponse(message: any): {
    unifiedResponse: { data: Uint8Array | Buffer };
    submessages: any[];
    contextInfo: any;
} | null;
export function generateUnifiedResponseContent(captured: {
    unifiedResponse: { data: Uint8Array | Buffer };
    submessages?: any[];
    contextInfo?: any;
}): any;
