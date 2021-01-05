import { Car } from "./car";
import { User } from "./user";

export class Pickup {
    idpickup: number;
    user: User;
    car: Car;
    // @ts-ignore
    pickupdate: Date;
    // @ts-ignore
    pickuphour: Time;
    isdeleted: boolean;
}