import { API, RegisterOptions } from "lambda-api";

module.exports = (api: API, opts: RegisterOptions) => {

    api.get("/", async (req, res) => {
        try {
            console.log('/api/status - log');
            console.error('/api/status - error');
            res.status(200).json({ bohr_api: true });
        } catch (e) {
            console.error(e);
            res.status(500);
        }
    });
};
