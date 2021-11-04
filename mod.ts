import { Application } from "./deps.ts"
import router from "./src/routes.ts"

// Import dotenv auto loader and the config
import { config } from "https://deno.land/x/dotenv@v3.1.0/mod.ts";
import "https://deno.land/x/dotenv@v3.1.0/load.ts";

config({ safe: true });


const port: number = parseInt(Deno.env.get("VAPP_PORT")!);
const name: string = Deno.env.get("VAPP_NAME")!;

const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods())

app.listen({ port })
console.log(`${name} hosted at http://localhost:${port}`);
