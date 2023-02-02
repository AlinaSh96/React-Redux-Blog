import { Configuration as DevServerConfiguration} from "webpack-dev-server";
import { BuildOptins } from "./types/config";

export function buildDevServer(options: BuildOptins): DevServerConfiguration {
 return {
    port: options.port,
    open: true,
    historyApiFallback: true,
 }
}