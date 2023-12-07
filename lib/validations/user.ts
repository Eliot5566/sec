import * as z from 'zod';

export const UserValidation = z.object({
    profile_photo: z.string().url().min(1),
    //nonempty已經淘汰了 用min(1)取代
    name: z.string().min(3).max(30),
    username: z.string().min(3).max(30),
    bio: z.string().min(3).max(1000),

});