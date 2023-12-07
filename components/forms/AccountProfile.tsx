'use client'

import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import { UserValidation } from '@/lib/validations/user';
import * as z from 'zod'
import Image from 'next/image'
import { ChangeEvent } from 'react'
import { Textarea } from '../ui/textarea'


interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}
//interface Props是一個介面，用來定義一個物件的型別 
//這個物件有兩個屬性，user和btnTitle
//使用在AccountProfile這個function裡面

const handleImage = (e: ChangeEvent, fieldChange: (value: string) => void) => {
  e.preventDefault();
}
//handleImage是一個function，有兩個參數，e和fieldChange 
//e是一個事件，fieldChange是一個function，這個function有一個參數，value，型別是string 
//這段用來處理圖片上傳的功能 如果有上傳圖片，就會觸發fieldChange這個function 
//如果沒有上傳圖片，就不會觸發fieldChange這個function void是一個空值，代表沒有回傳值
//e.preventDefault()是一個事件，用來阻止預設行為，這裡是阻止上傳圖片的預設行為 
//為甚麼要阻止預設行為呢？因為我們要自己寫上傳圖片的功能，所以要阻止預設行為

function onSubmit(values: z.infer<typeof UserValidation>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values)
}

//onSubmit是一個function，有一個參數，values，型別是z.infer<typeof UserValidation>
//z.infer<typeof UserValidation>是一個型別，這個型別是從UserValidation這個變數裡面推斷出來的
//UserValidation是一個變數，這個變數是從UserValidation這個檔案裡面匯出來的


const AccountProfile = ({ user, btnTitle }: Props) => {
//AccountProfile是一個function，有兩個參數，user和btnTitle，型別是Props Props的意思是這個function的參數必須是Props這個型別
  const form = useForm({
    resolver: zodResolver(UserValidation),
    //resolver是一個物件，裡面有一個屬性，zodResolver，型別是UserValidation 
    defaultValues: {
      //defaultValues是一個物件，裡面有五個屬性，id,objectId,username,name,bio,image
      profile_photo: '',
      name: '',
      username: '',
      bio: '',
    },
  })
  return (
    <Form {...form}>
      {/* Form {...form} 的意思是把form這個物件裡面的屬性，傳遞給Form這個component */}
      <form
        className='flex flex-col justify-start gap-10'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='profile_photo'
          render={({ field }) => (
            //render是一個function，有一個參數，field，型別是FormFieldProps 
            <FormItem className='flex items-center gap-4'>
              <FormLabel className='account-form_image-label'>
                {field.value ? (
                  <Image
                    src={field.value}
                    alt='profile_icon'
                    width={96}
                    height={96}
                    priority
                    className='rounded-full object-contain'
                  />
                ) : (
                  <Image
                    src='/assets/profile.svg'
                    alt='profile_icon'
                    width={24}
                    height={24}
                    className='object-contain'
                  />
                )}
              </FormLabel>
              <FormControl className='flex-1 text-base-semibold text-gray-200'>
                <Input
                  type='file'
                  accept='image/*'
                  placeholder='Add profile photo'
                  className='account-form_image-input'
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />


{/* name */}
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Name
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


{/* username */}
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Username
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


{/* bio */}
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Bio
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='bg-primary-500'>
          {btnTitle}
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile