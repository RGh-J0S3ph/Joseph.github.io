import type { AccessTokenSubject } from './auth.ts';

declare global {
    namespace Express {
        interface Locals {
            auth?: AccessTokenSubject;
        }
    }
}

export {};