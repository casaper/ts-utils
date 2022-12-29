import { UnknownFunction } from './unknown-function';
import { IsTypeKey } from './is-type-key';

/**
 * Utility to convert IsTypeKey to actual type
 *
 * @typeParam TKey - the type key to resolve as type
 */
export type IsTypeKeyType<TKey extends IsTypeKey> = TKey extends 'bigint'
  ? bigint
  : TKey extends 'boolean'
  ? boolean
  : TKey extends 'Date'
  ? Date
  : TKey extends 'Error'
  ? Error
  : TKey extends 'Function'
  ? UnknownFunction
  : TKey extends 'number'
  ? number
  : TKey extends 'RegExp'
  ? RegExp
  : TKey extends 'string'
  ? string
  : TKey extends 'undefined'
  ? undefined
  : TKey extends 'null'
  ? null
  : TKey extends 'symbol'
  ? symbol
  : never;
