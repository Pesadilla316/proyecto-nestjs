//crear clase referencia metodo crear
export class CreateTodoDto{
    //atributos del cuerpo de la solicitud
    title: string;
    description: string;
    status: boolean;
    createdAt?: Date;
}