/**
 * Key of dictionary like object
 * @typeParam TObj - the dictionary like object
 */
export type KeyOf<TObj extends object> = keyof TObj & (string | number);
