"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudSecret = void 0;
const sdk_1 = require("@1password/sdk");
class CloudSecret {
    token;
    constructor(token) {
        this.token = token;
    }
    async getField(name, field) {
        const client = await (0, sdk_1.createClient)({
            auth: this.token,
            integrationName: "Update Upstream Integration",
            integrationVersion: "0.1.0",
        });
        return client.secrets.resolve(`op://cloud/${name}/${field}`);
    }
    async getCredential(name) {
        return this.getField(name, "credential");
    }
}
exports.CloudSecret = CloudSecret;
//# sourceMappingURL=index.js.map