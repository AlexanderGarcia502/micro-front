import React from 'react';
import { Box, Button, Checkbox, FormControlLabel, Paper, TextField, Typography } from '@mui/material';

const Login: React.FC = () => {
    return (
        <div className="w-full h-screen flex">
            {/* Sección izquierda con el círculo alargado verticalmente */}

            <div className="h-full relative overflow-hidden" style={{ width: '45%' }}>

                <div className="relative text-white flex items-center justify-center h-full inset-0 bg-[#222c45]"
                    style={{
                        clipPath: 'ellipse(100% 100% at 0% 50%)', // Círculo alargado verticalmente
                        zIndex: 1,
                    }}
                >

                    <div
                        className="relative text-white flex items-center justify-center h-full bg-[#28354f]"
                    />
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Bienvenido a Mi Página</h1>
                        <p className="mt-4 text-lg">Explora y disfruta de nuestros servicios.</p>
                    </div>
                </div>
            </div>

            {/* Sección derecha con el formulario de inicio de sesión */}
            <div className="w-1/2 h-full flex items-center justify-center" style={{ backgroundColor: '#222c45' }}>
                <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Iniciar Sesión</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="email">Correo Electrónico</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                type="email"
                                id="email"
                                placeholder="Ingrese su correo electrónico"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700" htmlFor="password">Contraseña</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                type="password"
                                id="password"
                                placeholder="Ingrese su contraseña"
                            />
                        </div>
                        <button
                            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            type="submit"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
