import React, { useState } from 'react';
import { X, Mail, Lock, User, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

interface SignInModalProps {
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: formData.name || 'Guest User',
      email: formData.email,
      address: formData.address
    });
    onClose();
    navigate('/profile');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-[10000]">
        <Card className="w-full max-w-sm">
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <button 
                onClick={onClose}
                className="p-1.5 hover:bg-gray-100 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5">
              {isSignUp && (
                <>
                  <div>
                    <label className="block text-xs font-medium mb-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="pl-8 w-full py-1.5 px-3 border rounded text-sm"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          name: e.target.value
                        }))}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Enter your address"
                        className="pl-8 w-full py-1.5 px-3 border rounded text-sm"
                        value={formData.address}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          address: e.target.value
                        }))}
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-medium mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="pl-8 w-full py-1.5 px-3 border rounded text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      email: e.target.value
                    }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="pl-8 w-full py-1.5 px-3 border rounded text-sm"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      password: e.target.value
                    }))}
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" className="w-full py-1.5 text-sm">
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </Button>

                <div className="text-center mt-2">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-xs text-teal-600 hover:underline"
                  >
                    {isSignUp 
                      ? 'Already have an account? Sign in' 
                      : "Don't have an account? Sign up"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
}; 