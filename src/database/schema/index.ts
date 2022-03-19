import { appSchema } from '@nozbe/watermelondb'
import { userSchema } from './user'

export const mySchema = appSchema({
    version: 1,
    tables: [
        userSchema
    ]
})