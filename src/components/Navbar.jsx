import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Info, Calendar, Users, MapPin, Heart, UserCheck, Menu, X } from 'lucide-react';
import APigaHeroTitle from './APigaHeroTitle';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/about', label: 'About', icon: Info },
        { path: '/schedule', label: 'Program Schedule', icon: Calendar },
        //{ path: '/register', label: 'Register for Event', icon: Users },
        { path: '/team', label: 'Team', icon: UserCheck }
    ];

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="w-full">
            {/* Main navbar */}
            <nav className="bg-white shadow-lg border-b-4 border-green-600 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo section */}
                        <div className="flex items-center space-x-3">
                            <Link
                                to="/"
                                className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
                                onClick={closeMobileMenu}
                            >
                                {/* Logo placeholders - replace with actual logos */}
                                <div className="flex items-center">
                                    <img
                                        src="/logo.svg"
                                        alt="Apiga Pakistan Logo"
                                        className="h-8 w-auto" // or h-10, h-12 depending on desired size
                                    />
                                </div>
                                <div className="hidden sm:block">
                                    <h1 className="text-lg font-bold text-gray-800">APIGA</h1>
                                    <p className="text-xs text-gray-600">Asia Pacific Internet Governance Academy</p>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`flex items-center space-x-2 px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group relative ${isActive(item.path)
                                                ? 'bg-green-400 text-white shadow-md'
                                                : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                                            }`}
                                    >
                                        <IconComponent
                                            size={18}
                                            className={`transition-transform duration-200 ${isActive(item.path) ? '' : 'group-hover:scale-110'
                                                }`}
                                        />
                                        <span className="whitespace-nowrap">{item.label}</span>
                                        {/* Active indicator */}
                                        {isActive(item.path) && (
                                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-gray-700 hover:text-green-700 p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                                aria-label="Toggle mobile menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out relative z-50 ${isMobileMenuOpen
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-200 shadow-lg">
                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <button
                                    key={item.path}
                                    onClick={() => handleNavigation(item.path)}
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-left ${isActive(item.path)
                                            ? 'bg-green-600 text-white shadow-md'
                                            : 'text-gray-700 hover:text-green-700 hover:bg-green-50 hover:shadow-sm'
                                        }`}
                                >
                                    <IconComponent size={20} />
                                    <span>{item.label}</span>
                                    {isActive(item.path) && (
                                        <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            
        </div>
    );
};


export default Navbar;