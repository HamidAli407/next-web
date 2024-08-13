'use client'
import { useRouter } from "next/navigation"
export default function LoginStudent() {
    const router = useRouter();
    return (
        <>
            <div>Login Student Page</div>
            <br />
            <br />
            <button onClick={() => router.push("/")}>Back to Home</button>
        </>
    )
}
