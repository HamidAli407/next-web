'use client'
import { useRouter } from "next/navigation"
export default function AboutCollege() {
    const router = useRouter();
    return (
        <>
            <div>About College Page</div>
            <br />
            <br />
            <button onClick={() => router.push("/")}>Back to Home</button>
        </>
    )
}
