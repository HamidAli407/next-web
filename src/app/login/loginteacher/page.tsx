'use client'
import { useRouter } from "next/navigation"
export default function LoginTeacher() {
    const router = useRouter();
    return (
        <>
            <div>Login Teacher Page</div>
            <br />
            <br />
            <button onClick={() => router.push("/")}>Back to Home</button>
        </>
    )
}
