import { field } from '@nozbe/watermelondb/decorators';
import { Model } from '@nozbe/watermelondb';


export class Users extends Model {
    static table = 'users';
    
    @field('user_id') user_id!: string;
    @field('description') info!: string;
}