import { Car } from "./car";
import { User } from "./user";

export class Delivery {
    iddelivery: number;
    user: User;
    car: Car;
    // @ts-ignore
    deliverydate: Date;
    // @ts-ignore
    deliveryhour: Time;
    isdeleted: boolean;
}