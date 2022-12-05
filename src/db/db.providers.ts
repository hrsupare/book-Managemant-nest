import * as mongoose from 'mongoose';

export const dbProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect("mongodb+srv://hsupare:2kZE1zdHBT5kzVVm@cluster0.5drhi.mongodb.net/himanshu-DB")
    }
]