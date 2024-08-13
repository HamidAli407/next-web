'use client'
import { useRouter } from "next/navigation"
export default function AboutStudent() {
    const router = useRouter();
    return (
        <>
            <div>About Student Page</div>
            <br />
            <br />
            <button onClick={() => router.push("/")}>Back to Home</button>
        </>
    )
}
