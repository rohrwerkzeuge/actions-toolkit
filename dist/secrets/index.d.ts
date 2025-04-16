export declare class CloudSecret {
    token: string;
    constructor(token: string);
    getField(name: string, field: string): Promise<string>;
    getCredential(name: string): Promise<string>;
}
