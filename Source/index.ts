import Logger from "./Utils/Logger";
import PreloadTemplates from "./PreloadTemplates";
import { RegisterSettings } from "./Utils/Settings";

Hooks.once("init", async () => {
	RegisterSettings();
	await PreloadTemplates();
});

Hooks.once("setup", () => {
	Logger.Log("Template module is being setup.")
});

Hooks.once("ready", () => {
	Logger.Ok("Template module is now ready.");
});

setInterval(() => {
	document.getElementsByName('system.attributes.hp.value').forEach(handleHpInput);
	document.getElementsByName('bar1.value').forEach(handleHpInput);
}, 1);

function handleHpInput(x: HTMLElement) {
	const i = x as HTMLInputElement;
	x.onchange = () => {
		const expr = i.value;
		const result = eval(expr);
		i.value = result.toString();
	};
}