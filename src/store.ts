// imports 
import { atom } from 'nanostores';

/**
 * Website loader to be shown or not
 */
export const isLoading = atom<boolean>(false);