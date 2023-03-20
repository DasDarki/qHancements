import assert from "assert"

export default {
	ModuleName: "dasdarki-qscenes",
	IsModule: true,
}

export type Pair<T> = [string, T];
export const Assert = (value: unknown): void => assert(value);