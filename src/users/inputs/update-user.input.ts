import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  login: string;

  @Field({ nullable: true })
  passwordHash: string;

  @Field({ nullable: true })
  email: string;
}
