import Globals, {Pair} from "../Globals";
import Logger from "./Logger";

class Settings {
	private constructor() {
		Logger.Ok("Loading configuration settings.")
		this.SettingsList = [

		];
	}

	private static instance: Settings;

	public static Get(): Settings {
		if (Settings.instance)
			return Settings.instance;

		Settings.instance = new Settings();
		return Settings.instance;
	}

	private SettingsInit = false;
	public RegisterSettings(): void {
		if (this.SettingsInit)
			return;

		const g = game as Game;
		this.SettingsList.forEach((item) => {
			g.settings.register(Globals.ModuleName, item[0], item[1]);
		});

		this.SettingsInit = true;
	}

	readonly SettingsList: ReadonlyArray<Pair<ClientSettings.PartialSettingConfig>>;
}

export const RegisterSettings = (): void => Settings.Get().RegisterSettings();

export enum ValidSetting {
	None = "none"
}

export const GetSetting = <T>(setting: ValidSetting): T | null => {
	const found = Settings.Get().SettingsList.find(x => x[0] === setting);
	return found ? found[1] as unknown as T : null;
}