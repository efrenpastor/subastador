import { DomainError } from "../../../domain";

export class InvalidLocationPC extends DomainError {
    static create(msg) {
        return new InvalidLocationPC(msg)
    }
}