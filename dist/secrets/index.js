import { createClient } from "@1password/sdk";
export class CloudSecret {
    token;
    constructor(token) {
        this.token = token;
    }
    async getField(name, field) {
        const client = await createClient({
            auth: this.token,
            integrationName: "Rohrwerkzeuge GitHub Action Toolkit",
            integrationVersion: "0.1.0",
        });
        return client.secrets.resolve(`op://cloud/${name}/${field}`);
    }
    async getCredential(name) {
        return this.getField(name, "credential");
    }
}
