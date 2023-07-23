import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Users & Document;

@Schema()
export class Users{
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  age: number;
  @Prop({ required: true })
  address: string;
  @Prop({ required: true })
  position: string;
  @Prop({ required: true })
  experience: [
    {
      company: string;
      position: string;
      workingDate: string;
      desc: string;
    },
  ];
  @Prop({ required: true })
  education: [
    {
      school: string;
      degrre: string;
      eduDate: string;
      desc: string;
    },
  ];
}

export const UserSchema = SchemaFactory.createForClass(Users);
