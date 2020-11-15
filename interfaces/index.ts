import TYPES from "../lib/types";

export type LocaleType = 'ro' | 'en'

export type API_TYPE = {
    type: keyof typeof TYPES,
    data: any
}