import {IsDefined, IsEmail, IsOptional, MaxLength ,} from "class-validator";

class createUserDto {
    @IsDefined()
    @IsEmail()
    email: string;

    @MaxLength(255)
    @IsDefined()
    name: string;

    @IsDefined()
    age: number;

    @IsDefined()
    password: string;
}
export default createUserDto;