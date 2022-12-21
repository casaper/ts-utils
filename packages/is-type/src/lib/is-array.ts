import { notNil } from './not-nil';

/**
 * Checks if value is array.
 *
 * @param subject - the subject
 */
export const isArray = <TSubject>(
  subject: TSubject[] | null | undefined | unknown
): subject is TSubject[] => !notNil(subject);
