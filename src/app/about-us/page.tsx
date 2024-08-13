'use client'
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const navigation: any = (page: any) => {
        router.push('/about-us/' + page)
    }
    return (
        <>
            <div>About Us</div>
            <br />
            <br />

            <button onClick={() => navigation('aboutstudent')}>Go to About Student Page</button>
            <br />
            <br />
            <button onClick={() => navigation('aboutcollege')}>Go to About College Page</button>
            <br />
            <br />
            <button onClick={() => router.push("/")}>Back to Home</button>

        </>
    )
}
