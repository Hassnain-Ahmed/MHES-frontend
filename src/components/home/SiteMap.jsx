import { Link } from "react-router-dom"

export default function SiteMap() {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Sitemap</h1>
                        <p className="text-gray-500">
                            Find everything you need on our platform with this comprehensive site guide.
                        </p>
                    </div>

                    <div className="p-6 flex justify-center">
                        <img
                            src="/sitemap.png"
                            alt="Site structure diagram showing Admin, Patient, and Therapist roles"
                            width={600}
                            height={600}
                            className="object-contain"
                        />
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-4 text-[#00A3FF]">Admin Role</h2>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#00A3FF]">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#00A3FF]">
                                        User Management
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#00A3FF]">
                                        System Settings
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-4 text-[#7FBFB0]">Patient Role</h2>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#7FBFB0]">
                                        Therapists
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#7FBFB0]">
                                        Video Chatting
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#-bloom" className="text-gray-600 hover:text-[#7FBFB0]">
                                        Chat With Bloom
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#7FBFB0]">
                                        Subscription Packages
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-4 text-[#90C418]">Therapist Role</h2>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#90C418]">
                                        Patient Management
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#90C418]">
                                        Schedule
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#90C418]">
                                        Session History
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="p-6">
                        <h2 className="text-xl font-semibold mb-4">General Pages</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <ul className="space-y-2">
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#7FBFB0]">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#7FBFB0]">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#7FBFB0]">
                                        Address
                                    </Link>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#7FBFB0]">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#7FBFB0]">
                                        Account
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-600 hover:text-[#7FBFB0]">
                                        Sitemap
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </main>
        </div>
    )
}