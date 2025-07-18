import { useState } from "react"
import { userRegister } from "../../api/UserApi";
import { alertError, alertSuccess } from "../../lib/alert";
import { UserRole } from "../../constants/Users";
import { Link } from "react-router";

export default function UserBuyerRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const role = UserRole.BUYER

    async function handleSubmit(e) {
         e.preventDefault()

        const response = await userRegister({name, email, password, role})
        const responseBody = response.json();
        console.log(response)
        if (response.status === 201) {
            await alertSuccess(response.message)
        } else {
            await alertError(responseBody.message)
        }
    }

    return <>
        <div className="animate-fade-in bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-custom border border-gray-700 backdrop-blur-sm w-full max-w-md">
            <div className="text-center mb-8">
                <div className="inline-block p-3 bg-gradient rounded-full mb-4">
                <i className="fas fa-user-plus text-3xl text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white">E-Commerce Account</h1>
                <p className="text-gray-300 mt-2">Create a new account</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label
                    htmlFor="Email"
                    className="block text-gray-300 text-sm font-medium mb-2"
                >
                    Email
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-user text-gray-500" />
                    </div>
                    <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Choose a email"
                    required
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                </div>
                <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-gray-300 text-sm font-medium mb-2"
                >
                    Full Name
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-id-card text-gray-500" />
                    </div>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your full name"
                    required
                    value={name} onChange={(e) => setName(e.target.value)}
                    />
                </div>
                </div>
                <div className="mb-4">
                <label
                    htmlFor="password"
                    className="block text-gray-300 text-sm font-medium mb-2"
                >
                    Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-lock text-gray-500" />
                    </div>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Create a password"
                    required
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                </div>
                <div className="mb-6">
                <button
                    type="submit"
                    className="w-full bg-gradient text-white py-3 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5"
                >
                    <i className="fas fa-user-plus mr-2" /> Create Account
                </button>
                </div>
                <div class="text-center text-sm text-gray-400">
                    Already have an account?
                    <Link to="/login" class="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">
                        <div>
                            Sign in
                        </div>
                    </Link>
                </div>
            </form>
        </div>
    </>
}