import { DomainError } from '../../../domain'

export class GenericError extends DomainError {
    static create(msg) {
        return new GenericError(msg)
    }
}