import { Webview } from "https://deno.land/x/webview/mod.ts";

const html = `
	<html>
		<body>
			Hello World
		</body>
	</html>
`;

const webview = new Webview({
	url: `data:text/html,${encodeURIComponent(html)}`,
});

await webview.run();