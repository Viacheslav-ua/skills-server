import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  login: string;

  @Field({ nullable: true })
  passwordHash: string;

  @Field({ nullable: true })
  email: string;
}
