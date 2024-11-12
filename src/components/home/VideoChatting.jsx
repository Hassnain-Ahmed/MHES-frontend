// import { Button } from "@/components/ui/button"
// import { div } from "@/components/ui/div"
import { FaCamera, FaShieldHalved, FaWifi } from "react-icons/fa6"
import { Link } from "react-router-dom"

export default function VideoChatting() {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Video Chatting</h1>
                        <p className="text-gray-500 max-w-[600px] mx-auto">
                            Connect with your therapist securely from the comfort of your home through our video chat platform.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="p-6 space-y-4">
                            <FaCamera className="w-12 h-12 text-[#7FBFB0]" />
                            <h3 className="text-xl font-semibold">HD Quality</h3>
                            <p className="text-gray-600">
                                Crystal clear video and audio quality for the best possible virtual therapy experience.
                            </p>
                        </div>
                        <div className="p-6 space-y-4">
                            <FaShieldHalved className="w-12 h-12 text-[#7FBFB0]" />
                            <h3 className="text-xl font-semibold">Secure & Private</h3>
                            <p className="text-gray-600">
                                End-to-end encryption ensures your sessions remain completely confidential.
                            </p>
                        </div>
                        <div className="p-6 space-y-4">
                            <FaWifi className="w-12 h-12 text-[#7FBFB0]" />
                            <h3 className="text-xl font-semibold">Reliable Connection</h3>
                            <p className="text-gray-600">
                                Optimized for stable connections even with varying internet speeds.
                            </p>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">How It Works</h2>
                            <ol className="space-y-4 list-decimal list-inside text-gray-600">
                                <li>Subscribed Therapist Schedules a session </li>
                                <li>Therpaist created an appointment for meeting</li>
                                <li>Therapist Initiates the call on the appointed time</li>
                            </ol>
                            <div>
                                <Link to="/loginV2/register" className="p-2 rounded-md bg-[#7FBFB0] hover:bg-[#6BA99B] text-white mt-4">Schedule a Session</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}