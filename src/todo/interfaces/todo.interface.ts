import { Document } from "mongoose";

export interface Itodo extends Document{
    
    id: string;
    title: string;
    description: string;
    status: boolean;
    createdAt?: Date;
}