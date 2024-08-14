

//basic thing to get the msg from the backend through cloudflare
// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
// 		return Response.json({
// 			msg: "hi there", 
// 		})
// 	},
// };

import { promises } from "dns";

export interface Env {

}

export default { 
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request);
		console.log(request.method);
		console.log(request.body);
		console.log(request.headers);

		if (request.method == "GET") {
			return Response.json({
				msg: "You sent a get Request"
			})
		}else {
		return Response.json({
			msg: "You haven't sent the get request"
		})
	}
}
}

//1:04:00