import { DomainError } from "../../../domain";

export class InvalidLocationName extends DomainError {
    static create(msg) {
        return new InvalidLocationName(msg)
    }
}