import { FaRobot, FaShieldHalved, FaClock, FaBrain, FaMessage } from "react-icons/fa6"
import { Link } from "react-router-dom"

export default function ChatWithBloom() {

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Chat with Bloom</h1>
                        <p className="text-gray-500 max-w-[600px] mx-auto">
                            Your 24/7 AI companion for mental wellness support and guidance
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="p-6 space-y-4">
                            <FaRobot className="w-12 h-12 text-[#7FBFB0]" />
                            <h3 className="text-xl font-semibold">Intelligent Support</h3>
                            <p className="text-gray-600">
                                Bloom uses advanced AI to provide personalized mental health support, coping strategies, and wellness recommendations.
                            </p>
                        </div>
                        <div className="p-6 space-y-4">
                            <FaClock className="w-12 h-12 text-[#7FBFB0]" />
                            <h3 className="text-xl font-semibold">Always Available</h3>
                            <p className="text-gray-600">
                                Access support 24/7, whenever you need someone to talk to or need guidance with your mental wellness journey.
                            </p>
                        </div>
                        <div className="p-6 space-y-4">
                            <FaShieldHalved className="w-12 h-12 text-[#7FBFB0]" />
                            <h3 className="text-xl font-semibold">Private & Secure</h3>
                            <p className="text-gray-600">
                                Your conversations are completely private and protected with enterprise-grade security and encryption.
                            </p>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold">How Bloom Helps You</h2>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <FaBrain className="w-6 h-6 text-[#7FBFB0] flex-shrink-0" />
                                        <span className="text-gray-600">Provides evidence-based coping strategies and mental wellness techniques</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <FaMessage className="w-6 h-6 text-[#7FBFB0] flex-shrink-0" />
                                        <span className="text-gray-600">Offers a judgment-free space to express your thoughts and feelings</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <FaClock className="w-6 h-6 text-[#7FBFB0] flex-shrink-0" />
                                        <span className="text-gray-600">Helps establish healthy routines and habits for better mental health</span>
                                    </li>
                                </ul>
                                <div className="mt-20">
                                    <Link to="/loginV2" className="px-2 py-2 bg-[#7FBFB0] hover:bg-[#6BA99B] text-white rounded-md transition-colors">
                                        Start Chatting with Bloom
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-[#F3F4F6] p-6 rounded-lg space-y-4">
                                <div className="flex gap-2 items-start">
                                    <div className="w-8 h-8 rounded-full bg-[#7FBFB0] flex items-center justify-center flex-shrink-0">
                                        <FaRobot className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="bg-[#7FBFB0] text-white p-3 rounded-lg rounded-tl-none max-w-[80%]">
                                        <p>Hello! I'm Bloom, your mental wellness companion. How can I support you today?</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <div className="w-8 h-8 rounded-full bg-[#7FBFB0] flex items-center justify-center flex-shrink-0">
                                        <FaRobot className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="bg-[#7FBFB0] text-white p-3 rounded-lg rounded-tl-none max-w-[80%]">
                                        <p>I'm here to listen, provide support, and help you develop strategies for better mental well-being.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                        <div className="grid gap-4">
                            <div className="space-y-2">
                                <h3 className="font-semibold">Is Bloom a replacement for therapy?</h3>
                                <p className="text-gray-600">
                                    No, Bloom is a supportive tool to complement your mental health journey. While it provides valuable support,
                                    it's not a substitute for professional therapy or medical advice.
                                </p>
                            </div>
                            {/* <div className="space-y-2">
                                <h3 className="font-semibold">How does Bloom protect my privacy?</h3>
                                <p className="text-gray-600">
                                    All conversations with Bloom are encrypted and completely confidential. We never share your personal
                                    information or conversation history with third parties.
                                </p>
                            </div> */}
                            <div className="space-y-2">
                                <h3 className="font-semibold">Can I access previous conversations?</h3>
                                <p className="text-gray-600">
                                    Yes, your conversation history is securely stored and easily accessible within your account, helping you
                                    track your progress and revisit helpful discussions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}