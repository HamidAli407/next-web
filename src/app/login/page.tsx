'use client'
import { useRouter } from "next/navigation";

export default function Login() {

    const router = useRouter();
    const navigation = (page: any) => {
        router.push("/login/" + page)
    }
    return (
        <>
            <div>Login Page</div>
            <br />
            <br />

            <button onClick={() => navigation('loginstudent')}>Login Student</button>
            <br />
            <br />
            <button onClick={() => navigation('loginteacher')}>Login Teacher</button>
            <br />
            <br />
            <button onClick={() => router.push("/")}>Back to Home</button>

        </>
    )
}
