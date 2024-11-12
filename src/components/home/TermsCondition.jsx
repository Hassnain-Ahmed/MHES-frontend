import { Link } from "react-router-dom"

export default function TermsCondition() {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms & Conditions</h1>
                        <p className="text-gray-500 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                    <div className="p-6 space-y-6">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                By accessing and using the Mental Health Evaluator System, you agree to be bound by these Terms and
                                Conditions. If you do not agree with any part of these terms, please do not use our platform.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-900">2. Services Description</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our platform provides mental health support through innovative technology solutions. Services may include
                                online consultations, mental health assessments, and educational resources.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-900">3. User Responsibilities</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Provide accurate and complete information</li>
                                <li>Maintain the confidentiality of your account credentials</li>
                                <li>Use the platform in accordance with applicable laws and regulations</li>
                                <li>Respect the privacy and rights of other users</li>
                            </ul>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-900">4. Privacy & Data Protection</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We are committed to protecting your privacy and handling your personal information in accordance with
                                applicable data protection laws. Please review our Privacy Policy for detailed information.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-900">5. Limitation of Liability</h2>
                            <p className="text-gray-600 leading-relaxed">
                                While we strive to provide reliable services, we cannot guarantee uninterrupted access to our platform. We
                                are not liable for any damages arising from the use or inability to use our services.
                            </p>
                        </section>
                    </div>
                    <div className="flex justify-center gap-4">
                        <button
                            className="bg-[#7FBFB0] hover:bg-[#6BA99B] text-white p-2 rounded-md"
                            onClick={() => window.history.back()}
                        >
                            Go Back
                        </button>
                        <Link to="/ContactUs" className="p-2">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}