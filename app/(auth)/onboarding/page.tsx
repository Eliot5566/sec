import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";



async function Page(){
    const user = await currentUser();


    const userInfo = {};

    const userData={
        id: user?.id,
        // user?.id是一個可選的屬性 如果user存在就取id  ?代表是否存在
        //如果存在就存取user的id
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user?.firstName || "",
        bio: userInfo?.bio || "",
        image : userInfo?.image || user?.imageUrl ,
    }



    return (
        <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
            <h1 className="head-text">Onboarding</h1>
            <p className="mt-3 text-base-regular text-light-2">歡迎註冊，金全益帳號，馬上開始使用</p>
        
        
        <section className="mt-9 bg-dark-2 p-10">
            <AccountProfile 
            user={userData}
            btnTitle='Continue'
            />
        </section>
        
        </main>
    )
}

export default Page;